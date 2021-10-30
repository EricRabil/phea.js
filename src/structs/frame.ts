import { Color } from "./color";
import { ADDRTYPE_LIGHTID, COLORSPACE_RGB, COLORSPACE_XY, HUE_STREAM, RESERVED, VERSION_MAJOR, VERSION_MINOR } from "../Constants";
import { ColorGamut } from "./light";

export interface Frame {
    light: number;
    color: Color;
    brightness: number | null;
    gamut: ColorGamut | null;
}

export namespace Frame {
    const { rgbToXY } = require("node-hue-api/lib/rgb") as { rgbToXY(rgb: [number, number, number], gamut: ColorGamut): [number, number] };

    /**
     * Writes a frame to a buffer array
     * @param frame frame to write
     * @param useXY whether to use the XY colorspace
     * @param buffer buffer to write to 
     */
    export function write({ light, color: { red, green, blue }, gamut, brightness }: Frame, useXY: boolean, buffer: number[]) {
        if (gamut && useXY) {
            // Even if the gamut is there, useXY needs to be passed – useXY should only be true if all lights have a gamut. A packet can only contain all XY or all RGB. No mix and match.
            const [ x, y ] = rgbToXY([ red, green, blue ], gamut);
            red = x * 255;
            green = y * 255;
            blue = brightness || 255;
        }

        buffer.push(
            ADDRTYPE_LIGHTID,
            RESERVED,
            light,
            red,
            red,
            green,
            green,
            blue,
            blue
        );
    }

    /**
     * Serialize an array of frames to a Buffer ready to be sent
     * @param frames frames to serialize
     * @param seqNr sequence number
     */
    export function asBuffer(frames: Frame[], seqNr: number) {
        frames = frames.slice(0, 10)

        const buffer: number[] = HUE_STREAM.slice();

        const isXY = frames.every(({ gamut }) => gamut);

        buffer.push(
            VERSION_MAJOR,
            VERSION_MINOR,
            seqNr,
            RESERVED,
            RESERVED,
            isXY ? COLORSPACE_XY : COLORSPACE_RGB,
            RESERVED
        );

        frames.forEach(frame => Frame.write(frame, isXY, buffer));

        return Buffer.from(buffer);
    }
}