import { Light } from "../structs/light";
import { Effect } from "./Effect";

/**
 * Overlays multiple effects over eachother.
 */
export class Mixer {
    /**
     * Light states to track
     */
    lights: Light[] = [];

    /**
     * Effects to apply
     */
    effects: Effect[] = [];

    /**
     * Whether to mix into the previous color or overwrite the color each time
     */
    retainColor = false;

    /**
     * Shared reference to current unix timestamp, updated on each frame
     */
    now = Date.now();

    /**
     * Applies the effects to a given light
     * @param light light to apply effects to
     */
    applyEffectsOnLight(light: Light) {
        let red = 0, green = 0, blue = 0, brightness = 255;

        if (this.retainColor) {
            red = light.red;
            green = light.green;
            blue = light.green;
            brightness = light.brightness;
        }

        for (const effect of this.effects) {
            if (!effect.enabled) continue;

            const layerColor = effect.getColor(light);
            const alpha = layerColor.alpha || 1.0;
            const prevLayersAlpha = 1.0 - alpha;

            red *= prevLayersAlpha;
            green *= prevLayersAlpha;
            blue *= prevLayersAlpha;
            if (typeof layerColor.brightness === "number") brightness *= prevLayersAlpha;

            red += layerColor.red * alpha;
            green += layerColor.green * alpha;
            blue += layerColor.blue * alpha;
            if (typeof layerColor.brightness === "number") brightness += layerColor.brightness * alpha;
        }

        light.red = red;
        light.green = green;
        light.blue = blue;
        light.brightness = brightness;
    }

    /**
     * Applies the effect states to the given light states
     * @param lights lights to update
     */
    applyEffectsOnLights(lights: Light[] = this.lights) {
        for (const light of lights) {
            this.applyEffectsOnLight(light);
        }
    }

    /**
     * Purges effects with finished=true from the effects array
     */
    removeFinishedEffects() {
        this.effects = this.effects.filter(({ finished }) => !finished);
    }

    /**
     * Runs a render frame on each effect
     */
    renderEffects() {
        return Promise.all(this.effects.filter(({ enabled }) => enabled).map(effect => effect.render()));
    }

    /**
     * Garbage collects, runs a render frame, applies to each light
     */
    async render() {
        this.now = Date.now();

        for (const effect of this.effects) {
            (effect.now as unknown) = this.now;
        }

        this.removeFinishedEffects();
        await this.renderEffects();
        this.applyEffectsOnLights();
    }
}