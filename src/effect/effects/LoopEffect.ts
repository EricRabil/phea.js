import { EffectColor } from "../../structs/effect-color";
import { Light } from "../../structs/light";
import { Effect } from "../Effect";

export interface LoopOptions {
    colors: EffectColor[];
    framesPerColor: number;
}

/**
 * Smooth transitions between each color
 */
export class LoopEffect extends Effect {
    public constructor(public options: LoopOptions) {
        super();
    }

    frame: number = 0;

    currentIndex: number = 0;
    currentColor: EffectColor = this.options.colors[0];
    nextColor: EffectColor = this.options.colors[1];

    resultColor: EffectColor;

    getColor(): EffectColor {
        return this.resultColor;
    }

    render(): void {
        if (this.frame === this.options.framesPerColor) {
            this.frame = 1;

            if (this.currentIndex === this.options.colors.length - 1) {
                this.currentIndex = 0;
            } else this.currentIndex += 1;
            
            let nextIndex = this.currentIndex + 1;
            if (nextIndex === this.options.colors.length) nextIndex = 0;

            this.currentColor = this.options.colors[this.currentIndex];
            this.nextColor = this.options.colors[nextIndex];
        } else this.frame += 1;

        const progress = this.frame / this.options.framesPerColor;

        this.resultColor = EffectColor.mix(this.currentColor, this.nextColor, 1.0 - progress);
    }

    enabled: boolean = true;
    finished: boolean = false;
}