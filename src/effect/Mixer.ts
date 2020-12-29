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
        let red = 0, green = 0, blue = 0, brightness = 0;

        if (this.retainColor) {
            red = light.red;
            green = light.green;
            blue = light.green;
            brightness = light.brightness;
        }

        for (const effect of this.effects) {
            if (!effect.enabled) continue;

            const layerColor = effect.getColor(light);
            if (!layerColor) continue;

            if (typeof layerColor.brightness !== "number") layerColor.brightness = 255;
            if (typeof layerColor.alpha !== "number") layerColor.alpha = 1.0;
            if (!layerColor.alpha) continue;

            const alpha = layerColor.alpha;
            const prevLayersAlpha = 1.0 - alpha;

            if (layerColor.red >= 0 && layerColor.green <= 255) {
                red *= prevLayersAlpha;
                red += layerColor.red * alpha;
            }

            if (layerColor.green >= 0 && layerColor.green <= 255) {
                green *= prevLayersAlpha;
                green += layerColor.green * alpha;
            }

            if (layerColor.blue >= 0 && layerColor.blue <= 255) {
                blue *= prevLayersAlpha;
                blue += layerColor.blue * alpha;
            }

            if (layerColor.brightness >= 0 && layerColor.brightness <= 255) {
                brightness *= prevLayersAlpha;
                brightness += layerColor.brightness * alpha;
            }
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