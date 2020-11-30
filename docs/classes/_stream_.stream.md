**[@ericrabil/phea.js](../README.md)**

> [Globals](../README.md) / ["stream"](../modules/_stream_.md) / Stream

# Class: Stream

Manages the framerate for refreshing

## Hierarchy

* **Stream**

## Index

### Constructors

* [constructor](_stream_.stream.md#constructor)

### Properties

* [options](_stream_.stream.md#options)
* [running](_stream_.stream.md#running)

### Methods

* [renderSingleFrame](_stream_.stream.md#rendersingleframe)
* [renderThread](_stream_.stream.md#renderthread)

## Constructors

### constructor

\+ **new Stream**(`options`: [StreamOptions](../interfaces/_stream_.streamoptions.md)): [Stream](_stream_.stream.md)

*Defined in [src/stream.ts:29](https://github.com/EricRabil/phea.js/blob/66a21c7/src/stream.ts#L29)*

#### Parameters:

Name | Type |
------ | ------ |
`options` | [StreamOptions](../interfaces/_stream_.streamoptions.md) |

**Returns:** [Stream](_stream_.stream.md)

## Properties

### options

•  **options**: [StreamOptions](../interfaces/_stream_.streamoptions.md)

*Defined in [src/stream.ts:31](https://github.com/EricRabil/phea.js/blob/66a21c7/src/stream.ts#L31)*

___

### running

•  **running**: boolean = false

*Defined in [src/stream.ts:29](https://github.com/EricRabil/phea.js/blob/66a21c7/src/stream.ts#L29)*

## Methods

### renderSingleFrame

▸ **renderSingleFrame**(): Promise\<[void, void]>

*Defined in [src/stream.ts:60](https://github.com/EricRabil/phea.js/blob/66a21c7/src/stream.ts#L60)*

Renders a single frame

**Returns:** Promise\<[void, void]>

___

### renderThread

▸ **renderThread**(): Promise\<void>

*Defined in [src/stream.ts:38](https://github.com/EricRabil/phea.js/blob/66a21c7/src/stream.ts#L38)*

Asynchronously runs the render loop

**Returns:** Promise\<void>
