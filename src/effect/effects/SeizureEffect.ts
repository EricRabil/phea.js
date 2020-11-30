import { EffectColor } from "../../structs/effect-color";
import { Effect } from "../Effect";

export interface SeizureOptions {
    /**
     * Colors to flip between
     */
    colors: EffectColor[];
    /**
     * How many frames each color will be shown for
     */
    framesPerColor: number;
}

/**
 * This does what it says – it rapidly strobes between the configured colors.
 * 
 * Specifically DO NOT use this if you are sensitive to flashing lights.
 */
export class SeizureEffect extends Effect {
    /**
     * How many frames into a color we are
     */
    frames: number = 0;

    constructor(public options: SeizureOptions) {
        super();
    }

    /**
     * Current color index
     */
    private currentIndex: number = 0;

    /**
     * Current color
     */
    private currentColor: EffectColor = this.options.colors[this.currentIndex];

    getColor(): EffectColor {
        return this.currentColor;
    }

    render(): void {
        this.frames++;

        if (this.frames === this.options.framesPerColor) {
            // The color has been shown for the desired number of frames. Roll over.
            this.frames = 0;

            if (this.currentIndex === this.options.colors.length - 1) this.currentIndex = 0;
            else this.currentIndex += 1;

            this.currentColor = this.options.colors[this.currentIndex];
        }
    }

    enabled: boolean = true;
    finished: boolean = this.options.framesPerColor === 0 || this.options.colors.length === 0;
}