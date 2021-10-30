const dtls = require("@nodertc/dtls");
import axios, { AxiosInstance } from "axios";
import { EventEmitter } from "events";
import Api from "node-hue-api/lib/api/Api";
import { Socket } from "./@types/webrtc-dtls";
import { Frame } from "./structs/frame";
import { ColorGamut } from "./structs/light";
import { HueLog } from "./util";

export interface DTLSConnectionOptions {
    host: string;
    username: string;
    psk: string;
}

/**
 * @noInheritDoc
 */
export default interface DTLS extends EventEmitter {
    on(event: "frames", cb: (frames: Frame[]) => void): this;
    on(event: "connected", cb: Function): this;
    on(event: "error", cb: Function): this;
    on(event: "data", cb: (data: Buffer) => unknown): this;
    on(event: "timeout", cb: Function): this;
    on(event: "closed", cb: Function): this;
    on(event: string, cb: Function): this;

    once(event: "frames", cb: (frames: Frame[]) => void): this;
    once(event: "connected", cb: Function): this;
    once(event: "error", cb: Function): this;
    once(event: "timeout", cb: Function): this;
    once(event: "closed", cb: Function): this;
    once(event: "data", cb: (data: Buffer) => unknown): this;
    once(event: string, cb: Function): this;
}

/**
 * Manages the DTLS connection to the Hue Entertainment API
 * @noInheritDoc
 */
export default class DTLS extends EventEmitter {
    private http: AxiosInstance;
    socket: Socket;

    public running = false;
    public sequenceNumber = 0;

    /**
     * Color gamuts for all of the lights, in the same order as the lights array.
     * 
     * This is used for XY conversion, so that we can include brightness.
     * 
     * All lights must support XY, as the packet must contain either all XYB or RGB.
     */
    private gamuts: (ColorGamut | null)[];

    /**
     * Retrieves all necessary data before constructing a DTLS instance
     * @param hue hue api object
     * @param groupID entertainment group ID
     * @param options connection options
     */
    public static async make(hue: Api, groupID: string, options: DTLSConnectionOptions) {
        const group = await hue.groups.getGroup(groupID);

        const lights = (group.lights as any[]).map(l => +l).filter(l => !isNaN(l));

        // Grrrrr at Hue API for not allowing batch lookup
        const lightObjects = await Promise.all(lights.map(light => hue.lights.getLight(light)));

        const gamuts = lightObjects.map(({ colorGamut }) => colorGamut || null) as (ColorGamut | null)[];

        return new DTLS(hue, lights, gamuts, groupID, options);
    }

    public constructor(public readonly hue: Api, public lights: number[], gamuts: (ColorGamut | null)[], public group: string, public options: DTLSConnectionOptions) {
        super();
        
        this.gamuts = gamuts;
        this.http = axios.create({
            baseURL: `http://${options.host}/api/${options.username}`
        });
    }

    /**
     * Starts the DTLS session.
     */
    async start() {
        await this.setActive(true);

        this.sequenceNumber = 0;

        HueLog("Connecting to Hue");

        let connectSuccessful = false;
        let connectAttempts = 0;

        while (!connectSuccessful && connectAttempts < 5) {
            try {
                connectAttempts++;
                await this.doConnect();
                connectSuccessful = true;
            } catch {
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        }

        if (!connectSuccessful) {
            throw new Error("Failed to connect to Hue DTLS API!");
        }
        
        HueLog("Connected to Hue.");
        
        this.socket.on("error", async (error: Error) => {
            await this.closed();
            this.emit("error", error);
        });

        this.socket.once("timeout", async () => {
            await this.closed();
        });

        this.socket.on("data", data => {
            this.emit("data", data);
        });

        this.emit("connected");
    }

    /**
     * Attempts to connect with the session, resolving upon handshake completion and rejecting on failure before that point
     */
    doConnect(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.socket = dtls.connect({
                type: "udp4",
                remotePort: 2100,
                remoteAddress: this.options.host,
                pskIdentity: this.options.username,
                pskSecret: Buffer.from(this.options.psk, "hex"),
                cipherSuites: ["TLS_PSK_WITH_AES_128_GCM_SHA256"]
            }, () => {
                this.socket.off("error", onError);
                this.socket.off("timeout", onError);
                resolve();
            });

            function onError(error: unknown) {
                reject(error);
            }

            this.socket.once("error", onError);
            this.socket.once("timeout", onError);
        });
    }

    /**
     * Gracefully closes the session
     */
    async stop() {
        this.socket.close();

        await this.closed();
    }

    private async closed() {
        await this.setActive(false);

        this.emit("closed");
    }

    /**
     * Sends the given frames over the entertainment API
     * @param frames frames to send
     */
    sendFrames(frames: Frame[]): Promise<void> {
        return Promise.all([
            new Promise<void>((resolve, reject) => this.socket.write(Frame.asBuffer(frames, this.sequenceNumber++), undefined, (error) => error ? reject(error) : resolve())),
            new Promise<void>(resolve => this.emit("frames", frames) && resolve())
        ]) as unknown as Promise<void>
    }

    /**
     * Enables/disables streaming for the group
     * @param active whether to enable/disable
     */
    async setActive(active: boolean) {
        this.running = active;

        await this.http.put(`/groups/${this.group}`, {
            stream: {
                active
            }
        });
    }
}