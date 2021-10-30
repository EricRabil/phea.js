import Api from "node-hue-api/lib/api/Api";
import DTLS from "./dtls";
import { Frame } from "./structs/frame";
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

    private lastFrames: Frame[] = [];

    /**
     * Renders a single frame
     */
    renderSingleFrame() {
        const frames = this.options.lights.map(light => light.frame);

        const changed = frames.some((frame, index) => {
            const oldFrame = this.lastFrames[index];
            if (!oldFrame) return true;
            
            return !(
                frame.color.red === oldFrame.color.red
             && frame.color.green === oldFrame.color.green
             && frame.color.blue === oldFrame.color.blue
             && frame.brightness === oldFrame.brightness
             && frame.gamut?.blue === oldFrame.gamut?.blue
             && frame.gamut?.green === oldFrame.gamut?.green
             && frame.gamut?.red === oldFrame.gamut?.red
            );
        });

        this.lastFrames = frames;

        return Promise.all([
            changed ? this.options.engine.sendFrames(frames) : new Promise(resolve => setTimeout(resolve)),
            this.options.renderCallback()
        ]);
    }
}