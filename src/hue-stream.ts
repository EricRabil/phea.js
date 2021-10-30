import Api, { Light as HueLight } from "node-hue-api/lib/api/Api";
import hue from "node-hue-api";
import DTLS, { DTLSConnectionOptions } from "./dtls";
import { Mixer } from "./effect/Mixer";
import { Stream, StreamOptions } from "./stream";
import { Light } from "./structs/light";
import { Effect } from "./effect/Effect";
import { EventEmitter } from "events";
import { Frame } from "./structs/frame";

export interface HueStreamOptions {
    updateFrequency: number;
    engine: DTLS;
    lights: Light[];
    auth?: DTLSConnectionOptions;
    api?: Api;
    group?: string;
    lightStateChangedHandler?: (lights: Light[]) => unknown;
}

/**
 * @noInheritDoc
 */
export interface HueStream extends EventEmitter {
    on(event: "frames", cb: (frames: Frame[]) => void): this;
    on(event: "connected", cb: Function): this;
    on(event: "error", cb: Function): this;
    on(event: "timeout", cb: Function): this;
    on(event: "closed", cb: Function): this;
    on(event: string, cb: Function): this;

    once(event: "frames", cb: (frames: Frame[]) => void): this;
    once(event: "connected", cb: Function): this;
    once(event: "error", cb: Function): this;
    once(event: "timeout", cb: Function): this;
    once(event: "closed", cb: Function): this;
    once(event: string, cb: Function): this;
}

/**
 * Manages the streaming activity and mixer state
 * @noInheritDoc
 */
export class HueStream extends EventEmitter {
    /**
     * Effect mixer instance
     */
    public mixer = new Mixer();
    /**
     * Frame manager
     */
    public stream: Stream;

    /**
     * Discovers all bridges on your LAN
     * @param upnp whether this should be a upnp search or use the Hue discovery API
     */
    public static async discover(upnp: boolean = true): Promise<string[]> {
        const results: Array<{ ipaddress: string }> = await hue.v3.discovery[upnp ? "upnpSearch" : "nupnpSearch"](5000);

        return results.map(({ ipaddress }) => ipaddress);
    }

    /**
     * Registers with the given Bridge IP
     * @param ip ip to register with
     */
    public static async register(ip: string): Promise<{ username: string, psk: string }> {
        const stupidBitch = await hue.v3.api.createLocal(ip).connect();
        const { username, clientkey: psk } = await stupidBitch.users.createUser(Date.now().toString(5), Date.now().toString(5));

        return {
            username,
            psk
        };
    }
    
    /**
     * Returns an array of light objects from the Hue API
     * @param options connection options
     */
    public static async lights({ host, username }: DTLSConnectionOptions): Promise<HueLight[]> {
        const api = await hue.v3.api.createLocal(host).connect(username);

        return api.lights.getAll();
    }

    /**
     * Returns an array of light IDs from the Hue API
     * @param auth connection options
     */
    public static async lightIDs(auth: DTLSConnectionOptions): Promise<string[]> {
        const lights = await this.lights(auth);

        return lights.map(light => light.id.toString());
    }

    /**
     * Creates an entertainment group with the given lights and name
     * @param options Hue connection options
     * @param lights light IDs to include in the group
     * @param name group name
     */
    public static async createGroup({ host, username }: DTLSConnectionOptions, lights: (string | number)[], name: string = "Phea.JS Group"): Promise<string> {
        const api = await hue.v3.api.createLocal(host).connect(username);

        const groupModel = hue.v3.model.createEntertainment();
        groupModel.name = name;
        groupModel.lights = lights;
        groupModel.class = "Other";

        const group = await api.groups.createGroup(groupModel);

        return group.id.toString();
    }

    /**
     * Crafts a HueStream instance with the given options.
     * 
     * You can omit the lights and engine parameters and have them made for you, 
     * @param options 
     */
    public static async make(options: Partial<HueStreamOptions>) {
        if (!options.updateFrequency) options.updateFrequency = 50;

        if (!options.api) {
            if (!options.auth) throw new Error("Omitting the api object requires you to pass the auth object");

            options.api = await hue.v3.api.createLocal(options.auth.host).connect(options.auth.username);
        }

        if (!options.lights) {
            if (!options.auth || !options.group) throw new Error("Omitting lights requires passing group and auth object");

            const group = await options.api.groups.getGroup(options.group);
            
            options.lights = await Promise.all((group.lights as (string | number)[]).map(light => Light.make(options.api!, light)));
        }
        
        if (!options.engine) {
            if (!options.group || !options.auth) throw new Error("Omitting DTLS requires passing group and auth object");

            options.engine = await DTLS.make(options.api!, options.group!, options.auth);
        }

        return new HueStream(options as HueStreamOptions);
    }

    public constructor(public options: HueStreamOptions) {
        super();

        this.mixer.lights = options.lights;

        this.stream = new Stream({
            ...(options as StreamOptions),
            renderCallback: this.render.bind(this)
        });
        
        this.options.engine.on("connected", () => {
            if (this.stream) this.stream.running = true;
            this.emit("connected");
        });

        this.options.engine.on("closed", () => {
            if (this.stream) this.stream.running = false;
            this.emit("closed");
        });

        this.options.engine.on("timeout", () => {
            if (this.stream) this.stream.running = false;
            this.emit("timeout");
        });

        this.options.engine.on("error", () => this.emit("error"));

        this.options.engine.on("frames", frames => this.emit("frames", frames));
    }

    /**
     *  This will resolve/reject the end result of the renering loop – in other words, it will not resolve until the render loop is ended, and it will not reject unless the render loop rejects.
     */
    renderResult: Promise<void>;

    /**
     * Starts the Entertainment session.
     */
    async start() {
        await this.options.engine.start();

        this.stream.running = true;

        this.renderResult = this.stream.renderThread();
    }

    /**
     * Stops the Entertainment session.
     */
    async stop() {
        this.stream.running = false;

        await this.options.engine.stop();
    }

    /**
     * Renders a single frame in the session.
     */
    async renderSingleFrame() {
        await this.stream.renderSingleFrame();
    }

    /**
     * Renders the mixer by one
     */
    async render() {
        if (!this.options.engine.running) return;

        await this.mixer.render();

        if (this.options.lightStateChangedHandler) this.options.lightStateChangedHandler(this.options.lights);
    }

    /**
     * Takes the average value from all of the lights and returns it
     * @param key key to average
     */
    private average<T extends keyof Light>(key: T): number {
        return this.options.lights.reduce((acc, c) => acc += (c[key] as unknown as number || 0), 0) / this.options.lights.length;
    }

    /**
     * Sets a key to a given value on all lights
     * @param key key to set
     * @param value value to set
     */
    private batchSet<T extends keyof Light>(key: T, value: Light[T]) {
        this.options.lights.forEach(light => light[key] = value);
    }

    /**
     * The effects used in the mixer
     */
    get effects(): Effect[] {
        return this.mixer.effects;
    }

    set effects(effects: Effect[]) {
        this.mixer.effects = effects;
    }

    /**
     * Sets the brightness value for all lights
     */
    set brightness(brightness: number) {
        this.batchSet("brightness", brightness);
    }

    /**
     * Average light brightness
     */
    get brightness(): number {
        return this.average("brightness");
    }

    /**
     * Sets the red value for all lights
     */
    set red(red: number) {
        this.batchSet("red", red);
    }

    /**
     * Average red value of the lights
     */
    get red(): number {
        return this.average("red");
    }

    /**
     * Sets the green value for all lights
     */
    set green(green: number) {
        this.batchSet("green", green);
    }

    /**
     * Average green value of the lights
     */
    get green(): number {
        return this.average("green");
    }

    /**
     * Sets the blue value for all lights
     */
    set blue(blue: number) {
        this.batchSet("blue", blue);
    }

    /**
     * Average light blue
     */
    get blue(): number {
        return this.average("blue");
    }
}
