**[phea.js](../README.md)**

> [Globals](../globals.md) / ["structs/frame"](_structs_frame_.md) / Frame

# Namespace: Frame

## Index

### Properties

* [brightness](_structs_frame_.frame.md#brightness)
* [color](_structs_frame_.frame.md#color)
* [gamut](_structs_frame_.frame.md#gamut)
* [light](_structs_frame_.frame.md#light)

### Variables

* [rgbToXY](_structs_frame_.frame.md#rgbtoxy)

### Functions

* [asBuffer](_structs_frame_.frame.md#asbuffer)
* [write](_structs_frame_.frame.md#write)

## Properties

### brightness

•  **brightness**: number \| null

*Defined in src/structs/frame.ts:8*

___

### color

•  **color**: [Color](_structs_color_.color.md)

*Defined in src/structs/frame.ts:7*

___

### gamut

•  **gamut**: [ColorGamut](../interfaces/_structs_light_.colorgamut.md) \| null

*Defined in src/structs/frame.ts:9*

___

### light

•  **light**: number

*Defined in src/structs/frame.ts:6*

## Variables

### rgbToXY

•  **rgbToXY**: rgbToXY

*Defined in src/structs/frame.ts:13*

## Functions

### asBuffer

▸ **asBuffer**(`frames`: [Frame](_structs_frame_.frame.md)[], `seqNr`: number): Buffer

*Defined in src/structs/frame.ts:48*

Serialize an array of frames to a Buffer ready to be sent

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`frames` | [Frame](_structs_frame_.frame.md)[] | frames to serialize |
`seqNr` | number | sequence number  |

**Returns:** Buffer

___

### write

▸ **write**(`__namedParameters`: { brightness: null \| number ; color: { blue: number ; green: number ; red: number  } ; gamut: null \| [ColorGamut](../interfaces/_structs_light_.colorgamut.md) ; light: number  }, `useXY`: boolean, `buffer`: number[]): void

*Defined in src/structs/frame.ts:21*

Writes a frame to a buffer array

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`__namedParameters` | { brightness: null \| number ; color: { blue: number ; green: number ; red: number  } ; gamut: null \| [ColorGamut](../interfaces/_structs_light_.colorgamut.md) ; light: number  } | - |
`useXY` | boolean | whether to use the XY colorspace |
`buffer` | number[] | buffer to write to  |

**Returns:** void
