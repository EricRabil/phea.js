**[@ericrabil/phea.js](../README.md)**

> [Globals](../README.md) / ["hue-stream"](../modules/_hue_stream_.md) / HueStreamOptions

# Interface: HueStreamOptions

## Hierarchy

* **HueStreamOptions**

## Index

### Properties

* [api](_hue_stream_.huestreamoptions.md#api)
* [auth](_hue_stream_.huestreamoptions.md#auth)
* [engine](_hue_stream_.huestreamoptions.md#engine)
* [group](_hue_stream_.huestreamoptions.md#group)
* [lightStateChangedHandler](_hue_stream_.huestreamoptions.md#lightstatechangedhandler)
* [lights](_hue_stream_.huestreamoptions.md#lights)
* [updateFrequency](_hue_stream_.huestreamoptions.md#updatefrequency)

## Properties

### api

• `Optional` **api**: Api

*Defined in [src/hue-stream.ts:15](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L15)*

___

### auth

• `Optional` **auth**: [DTLSConnectionOptions](_dtls_.dtlsconnectionoptions.md)

*Defined in [src/hue-stream.ts:14](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L14)*

___

### engine

•  **engine**: [DTLS](../classes/_dtls_.dtls.md)

*Defined in [src/hue-stream.ts:12](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L12)*

___

### group

• `Optional` **group**: undefined \| string

*Defined in [src/hue-stream.ts:16](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L16)*

___

### lightStateChangedHandler

• `Optional` **lightStateChangedHandler**: undefined \| (lights: [Light](../classes/_structs_light_.light.md)[]) => unknown

*Defined in [src/hue-stream.ts:17](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L17)*

___

### lights

•  **lights**: [Light](../classes/_structs_light_.light.md)[]

*Defined in [src/hue-stream.ts:13](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L13)*

___

### updateFrequency

•  **updateFrequency**: number

*Defined in [src/hue-stream.ts:11](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L11)*
