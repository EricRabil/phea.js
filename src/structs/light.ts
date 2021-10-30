import Api from "node-hue-api/lib/api/Api";
import { Frame } from "./frame";

export interface XY {
    x: number;
    y: number;
}

export interface ColorGamut {
    red: XY;
    green: XY;
    blue: XY;
}

/**
 * Manages the state of a specific light. Mutations here will be directly visible on your lights as long as they aren't overwritten by an effect.
 */
export class Light {
    constructor() {}
    
    public static async make(api: Api, id: number | string) {
        const light = new Light();

        light.id = id = +id;

        const hueLight = await api.lights.getLight(id);

        if (hueLight) light.gamut = hueLight.colorGamut || null;

        return light;
    }

    id: number;
    red: number = 255;
    green: number = 255;
    blue: number = 255;
    brightness: number = 255;
    gamut: ColorGamut | null = null;

    get frame(): Frame {
        return {
            light: this.id,
            color: {
                red: this.red,
                green: this.green,
                blue: this.blue
            },
            brightness: this.brightness,
            gamut: this.gamut
        }
    }
}