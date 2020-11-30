/**
 * Resolves a promise after the given time in ms
 * @param ms time to sleep
 */
export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const HueLog: (formatter: string, ...args: any[]) => void = require("debug")("phea");