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

## Documentation
[Docs live here.](docs/globals.md)