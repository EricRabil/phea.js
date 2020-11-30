import { EffectColor } from "../../structs/effect-color";
import { Effect } from "../Effect";

export interface TransitionFrame {
    /**
     * The color to mix to
     */
    color: EffectColor;
    /**
     * Explicit unix timestamp when the transition starts
     */
    start: number;
}

/**
 * Smoothly transitions between configured frames
 */
export class TransitionEffect extends Effect {
    constructor(public frames: TransitionFrame[]) {
        super();
        
        this.frames = frames.sort(({ start: start1 }, { start: start2 }) => start1 - start2).reverse();
    }

    /**
     * Current frame
     */
    private currentColor: EffectColor = {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 0
    };

    getColor(): EffectColor {
        return this.currentColor;
    }

    render(): void {
        const { currentFrame, nextFrame } = this;
        
        if (!currentFrame) {
            return;
        }
        
        let color = currentFrame.color;

        if (nextFrame) {
            const { start: currentStart } = currentFrame, { start: nextStart, color: nextColor } = nextFrame;

            const totalDistance = nextStart - currentStart;
            const distanceFromNext = nextStart - this.now;
            
            // This is essentially the keyframe progression from one frame to the next.
            // I use this ratio to mix the current color and the next, and it gradually mixes more and more until it reaches the next color.
            const remainingRatio = distanceFromNext / totalDistance;

            color = EffectColor.mix(color, nextColor, remainingRatio, true, true);
        }
        
        this.currentColor = color;
    }

    enabled: boolean = true;
    dead: boolean = false;

    /**
     * The upcoming frame
     */
    private get nextFrame(): TransitionFrame | null {
        const nextIndex = this.nextFrameIndex;
        if (nextIndex === null) return null;
        
        return this.frames[nextIndex];
    }

    /**
     * The current frame
     */
    private get currentFrame(): TransitionFrame | null {
        const current = this.currentFrameIndex;
        if (current === null) return null;

        return this.frames[current];
    }

    /**
     * Index of the upcoming frame
     */
    private get nextFrameIndex(): number | null {
        const current = this.currentFrameIndex;
        if (current === null || current === 0) return null;

        return current - 1;
    }

    /**
     * Index of the current frame
     */
    private get currentFrameIndex(): number | null {
        const index = this.frames.findIndex(({ start }) => this.now >= start);
        if (index === -1) return null;

        return index;
    }
    
    /**
     * Returns true if there are no more frames to render, or if it is flagged as dead
     */
    get finished(): boolean {
        return this.dead || this.currentFrameIndex === null;
    }
}