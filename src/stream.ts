import Api from "node-hue-api/lib/api/Api";
import DTLS from "./dtls";
import { Light } from "./structs/light";
import { sleep } from "./util";

export interface StreamOptions {
    /**
     * Number of times a second to issue an update
     */
    updateFrequency: number;
    /**
     * Lights to be rendered
     */
    lights: Light[];
    /**
     * DTLS color engine
     */
    engine: DTLS;
    /**
     * Called during a render frame
     */
    renderCallback: () => void | Promise<void>;
}

/**
 * Manages the framerate for refreshing
 */
export class Stream {
    public running = false;

    public constructor(public options: StreamOptions) {

    }

    /**
     * Asynchronously runs the render loop
     */
    async renderThread() {
        const sendPeriod = (1.0 / this.options.updateFrequency) * 1000;

        while (this.running) {
            const timeBeforeRender = Date.now();

            // Render! NOW.
            await this.renderSingleFrame();

            const renderDuration = Date.now() - timeBeforeRender;

            // Offset the sleep period by the time it took to render
            const sleepTime = sendPeriod - renderDuration;

            // Sleep if we aren't dropping frames
            if (sleepTime > 0) await sleep(sleepTime);
        }
    }

    /**
     * Renders a single frame
     */
    renderSingleFrame() {
        const frames = this.options.lights.map(light => light.frame);

        return Promise.all([
            this.options.engine.sendFrames(frames),
            this.options.renderCallback()
        ]);
    }
}