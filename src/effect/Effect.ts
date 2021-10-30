import { EffectColor } from "../structs/effect-color";
import { Light } from "../structs/light";

/**
 * Common structure for an effect
 */
export abstract class Effect {
    /**
     * Singleton reference to Date.now() – you don't/shouldn't update this, it is handled for you. All effects will have the same reference to Date.now() in any given frame.
     */
    readonly now: number;
    /**
     * Returns the next color for a given light
     * @param light light to compute a color for
     */
    abstract getColor(light: Light): EffectColor | undefined;
    /**
     * Runs a render frame
     */
    abstract render(): void | Promise<void>;
    /**
     * Whether the effect should be included in the render stack at this time
     */
    abstract enabled: boolean;
    /**
     * Whether the effect should be permanently removed from the render stack
     */
    abstract finished: boolean;
}