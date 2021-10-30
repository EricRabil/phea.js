import { Color } from "./color";

export interface EffectColor extends Color {
    /**
     * brightness value from 0-255
     */
    brightness?: number;
    /**
     * opacity from 0.0-1.0, defaults to 1.0
     */
    alpha?: number;
}

export namespace EffectColor {
    const EMPTY_COLOR = { red: 0, green: 0, blue: 0 };

    export function make(color: EffectColor = EMPTY_COLOR): EffectColor {
        return {
            ...color
        }
    }

    /**
     * Mixes two colors
     * @param color1 first color
     * @param color2 second color
     * @param ratio how much alpha the first color gets. the second color gets 1.0 - ratio
     */
    export function mix(color1: EffectColor, color2: EffectColor, ratio: number, mixBrightness = false, mixAlpha = false) {
        const color = EffectColor.make();
        const iratio = 1.0 - ratio;

        if (mixBrightness) {
            const { brightness: brightness1 } = color1, { brightness: brightness2 } = color2;

            const hasB1 = typeof brightness1 === "number";
            const hasB2 = typeof brightness2 === "number";

            if (hasB1 && hasB2) {
                color.brightness = (brightness1! * ratio) + (brightness2! * iratio);
            } else if (hasB1 || hasB2) {
                color.brightness = hasB1 ? brightness1 : hasB2 ? brightness2 : undefined;
            }
        }

        if (mixAlpha) {
            const { alpha: alpha1 } = color1, { alpha: alpha2 } = color2;

            const hasA1 = typeof alpha1 === "number";
            const hasA2 = typeof alpha2 === "number";

            if (hasA1 && hasA2) {
                color.alpha = (alpha1! * ratio) + (alpha2! * iratio);
            } else {
                color.alpha = alpha1 || alpha2;
            }
        }

        color.red += color1.red * ratio;
        color.green += color1.green * ratio;
        color.blue += color1.blue * ratio;

        color.red += color2.red * iratio;
        color.green += color2.green * iratio;
        color.blue += color2.blue * iratio;

        return color;
    }

    const isNumber = (value: unknown) => typeof value === "number";

    /**
     * Modulates a color with the given parameters
     * @param color color to modulate
     * @param param1 parameters to multiply the color by
     */
    export function modulate(color: EffectColor, { red, green, blue, alpha, brightness }: Partial<EffectColor>): EffectColor {
        color = EffectColor.make(color);

        if (isNumber(red)) color.red *= red!;
        if (isNumber(green)) color.green *= green!;
        if (isNumber(blue)) color.blue *= blue!;
        if (isNumber(alpha) && isNumber(color.alpha)) color.alpha! *= alpha!;
        if (isNumber(brightness) && isNumber(color.brightness)) color.brightness! *= brightness!;

        if (color.red > 255) color.red = 255;
        else if (color.red < 0) color.red = 0;

        if (color.green > 255) color.green = 255;
        else if (color.green < 0) color.green = 0;

        if (color.blue > 255) color.blue = 255;
        else if (color.blue < 0) color.blue = 0;

        if (isNumber(color.alpha) && color.alpha! > 1.0) color.alpha = 1.0;
        else if (isNumber(color.alpha) && color.alpha! < 0) color.alpha = 0;

        if (isNumber(color.brightness) && color.brightness! > 255) color.brightness = 255;
        else if (isNumber(color.brightness) && color.brightness! < 0) color.brightness = 0;

        return color;
    }
}