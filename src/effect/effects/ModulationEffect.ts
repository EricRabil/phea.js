import { EffectColor } from "../../structs/effect-color";
import { Light } from "../../structs/light";
import { Effect } from "../Effect";

/**
 * Modulates the result of an existing effect
 */
export class ModulationEffect<T extends Effect> extends Effect {
    constructor(public wrapper: T, public modulation: Partial<EffectColor>) {
        super();
    }

    getColor(light: Light): EffectColor | undefined {
        const wrappedColor = this.wrapper.getColor(light);
        if (!wrappedColor) return;

        return EffectColor.modulate(wrappedColor, this.modulation);
    }

    render(): void | Promise<void> {
        return this.wrapper.render();
    }

    get enabled(): boolean {
        return this.wrapper.enabled;
    }

    set enabled(isEnabled: boolean) {
        this.wrapper.enabled = isEnabled;
    }
    
    get finished(): boolean {
        return this.wrapper.finished;
    }

    set finished(isFinished: boolean) {
        this.wrapper.finished = isFinished;
    }
}