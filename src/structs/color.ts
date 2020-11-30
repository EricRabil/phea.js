/**
 * Base object for representing an RGB color
 */
export interface Color {
    /**
     * red value from 0-255
     */
    red: number;
    /**
     * green value from 0-255
     */
    green: number;
    /**
     * blue value from 0-255
     */
    blue: number;
}

export namespace Color {
    /**
     * Amplifies/dilutes a color with the given ratio
     * @param color color to dilute
     * @param ratio ratio to multiply R/G/B by
     */
    export function dilute({ red, green, blue }: Color, ratio: number) {
        return {
            red: red * ratio,
            green: green * ratio,
            blue: blue * ratio
        };
    }

    /**
     * Returns the sum of a given color property
     * @param key property to take
     * @param colors colors to summize
     */
    function sum<T extends keyof Color>(key: T, colors: Color[]): number {
        return colors.reduce((acc, c) => acc + c[key], 0);
    }

    /**
     * Merges a series of expectedly partial colors into a single color
     * @param colors colors to merge
     */
    export function mergePartials(colors: Color[]): Color {
        return {
            red: sum("red", colors),
            green: sum("green", colors),
            blue: sum("blue", colors)
        };
    }
    
    /**
     * Takes a series of colors and merges them using an even ratio
     * @param colors colors to merge
     */
    export function mergeEvenly(...colors: Color[]): Color {
        colors = colors.map(color => dilute(color, 1 / colors.length));

        return mergePartials(colors);
    }

    export const RED: Color = {
        red: 255,
        green: 0,
        blue: 0
    }

    export const GREEN: Color = {
        red: 0,
        green: 255,
        blue: 0
    }

    export const BLUE: Color = {
        red: 0,
        green: 0,
        blue: 255
    }

    export const WHITE: Color = {
        red: 255,
        green: 255,
        blue: 255
    }

    export const BLACK: Color = {
        red: 0,
        green: 0,
        blue: 0
    }

    export const REDGREEN = mergeEvenly(RED, GREEN);
    export const REDBLUE = mergeEvenly(RED, BLUE);
    export const GREENBLUE = mergeEvenly(GREEN, BLUE);
}
