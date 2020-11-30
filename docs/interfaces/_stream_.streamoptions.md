**[phea.js](../README.md)**

> [Globals](../globals.md) / ["stream"](../modules/_stream_.md) / StreamOptions

# Interface: StreamOptions

## Hierarchy

* **StreamOptions**

## Index

### Properties

* [engine](_stream_.streamoptions.md#engine)
* [lights](_stream_.streamoptions.md#lights)
* [renderCallback](_stream_.streamoptions.md#rendercallback)
* [updateFrequency](_stream_.streamoptions.md#updatefrequency)

## Properties

### engine

•  **engine**: [DTLS](../classes/_dtls_.dtls.md)

*Defined in src/stream.ts:18*

DTLS color engine

___

### lights

•  **lights**: [Light](../classes/_structs_light_.light.md)[]

*Defined in src/stream.ts:14*

Lights to be rendered

___

### renderCallback

•  **renderCallback**: () => void \| Promise\<void>

*Defined in src/stream.ts:22*

Called during a render frame

___

### updateFrequency

•  **updateFrequency**: number

*Defined in src/stream.ts:10*

Number of times a second to issue an update
