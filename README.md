# phea.js
Node.JS implementation of the Hue Entertainment API but it works

I wrote this library because the existing Node.JS Hue Entertainment API implementations were simply painful to use.

## Installation
```
yarn add @ericrabil/phea.js
```

## Example

```js
import HueStream, { LoopEffect, Color } from "@ericrabil/phea.js";
// Equivalent, for the plebeians:
const { HueStream, LoopEffect, Color } = require("phea.js");

async function run() {
    const ipAddresses = await HueStream.discover();

    // Determine what IP you'll use here

    const ipAddress = ipAddresses[0];

    // Push the button!

    console.log("Hey, you should click that button");

    await new Promise(resolve => setTimeout(resolve, 10000));

    const credentials = await HueStream.register(ipAddress);

    const lightIDs = await HueStream.lightIDs(credentials);
    const entertainmentGroupID = await HueStream.createGroup(credentials, lightIDs);

    // Yay! We're ready to use HueStream.

    const stream = await HueStream.make({
        group: entertainmentGroupID,
        auth: credentials
    });
    
    const effect = new LoopEffect({
        colors: [
            Color.RED,
            Color.GREEN,
            Color.BLUE
        ],
        // 50 is the default refresh rate
        framesPerColor: 50
    });

    stream.effects.push(effect);

    await stream.start();
}

run();
```

## Writing your own effects

Subclass the [Effect](https://github.com/EricRabil/phea.js/blob/main/src/effect/Effect.ts) class, then push it to `stream.effects`.

There's [a few example effects](https://github.com/EricRabil/phea.js/blob/main/src/effect/effects) to get you started.

## Colors

phea.js has two Color structs – `Color` and `EffectColor`, which extends `Color`.

`Color` is simply an RGB object, while `EffectColor` adds opacity and brightness.

- `red`, `green`, `blue`, and `brightness` are all values from 0.0 – 255.0.
- `Color` and `EffectColor` offer a variety of utility functions for mixing and matching colors. Read about them on their respective doc pages.

## Using the DTLS client directly

Don't want to use my wrapper? :( That's fine. There's a `DTLS` export that lets you interact with the API directly. Pass it an instance of the Hue API per [`node-hue-api`](https://github.com/peter-murray/node-hue-api), the groupID, and the credentials.

```ts
interface DTLSConnectionOptions {
    host: string;
    username: string;
    psk: string;
}

class DTLS {
    constructor(public readonly hue: Api, public lights: number[], gamuts: (ColorGamut | null)[], public group: string, public options: DTLSConnectionOptions);
}
```

## Documentation
[Docs live here.](docs/README.md)