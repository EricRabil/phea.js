import { EffectColor } from "../../structs/effect-color";
import { Effect } from "../Effect";

/**
 * Returns a single color, forever. This can be mutated externally to make it not a single color, but doesn't offer much customization.
 */
export class StaticEffect extends Effect {
    constructor(public color: EffectColor) {
        super();
    }

    getColor(): EffectColor {
        return this.color;
    }

    render(): void {
        return;
    }

    enabled: boolean = false;
    finished: boolean = false;
}