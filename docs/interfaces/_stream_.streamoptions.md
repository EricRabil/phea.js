**[@ericrabil/phea.js](../README.md)**

> [Globals](../README.md) / ["stream"](../modules/_stream_.md) / StreamOptions

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

*Defined in [src/stream.ts:18](https://github.com/EricRabil/phea.js/blob/66a21c7/src/stream.ts#L18)*

DTLS color engine

___

### lights

•  **lights**: [Light](../classes/_structs_light_.light.md)[]

*Defined in [src/stream.ts:14](https://github.com/EricRabil/phea.js/blob/66a21c7/src/stream.ts#L14)*

Lights to be rendered

___

### renderCallback

•  **renderCallback**: () => void \| Promise\<void>

*Defined in [src/stream.ts:22](https://github.com/EricRabil/phea.js/blob/66a21c7/src/stream.ts#L22)*

Called during a render frame

___

### updateFrequency

•  **updateFrequency**: number

*Defined in [src/stream.ts:10](https://github.com/EricRabil/phea.js/blob/66a21c7/src/stream.ts#L10)*

Number of times a second to issue an update
