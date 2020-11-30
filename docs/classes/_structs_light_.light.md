**[@ericrabil/phea.js](../README.md)**

> [Globals](../README.md) / ["structs/light"](../modules/_structs_light_.md) / Light

# Class: Light

Manages the state of a specific light. Mutations here will be directly visible on your lights as long as they aren't overwritten by an effect.

## Hierarchy

* **Light**

## Index

### Properties

* [blue](_structs_light_.light.md#blue)
* [brightness](_structs_light_.light.md#brightness)
* [gamut](_structs_light_.light.md#gamut)
* [green](_structs_light_.light.md#green)
* [id](_structs_light_.light.md#id)
* [red](_structs_light_.light.md#red)

### Accessors

* [frame](_structs_light_.light.md#frame)

### Methods

* [make](_structs_light_.light.md#make)

## Properties

### blue

•  **blue**: number = 255

*Defined in [src/structs/light.ts:36](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/light.ts#L36)*

___

### brightness

•  **brightness**: number = 255

*Defined in [src/structs/light.ts:37](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/light.ts#L37)*

___

### gamut

•  **gamut**: [ColorGamut](../interfaces/_structs_light_.colorgamut.md) \| null = null

*Defined in [src/structs/light.ts:38](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/light.ts#L38)*

___

### green

•  **green**: number = 255

*Defined in [src/structs/light.ts:35](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/light.ts#L35)*

___

### id

•  **id**: number

*Defined in [src/structs/light.ts:33](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/light.ts#L33)*

___

### red

•  **red**: number = 255

*Defined in [src/structs/light.ts:34](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/light.ts#L34)*

## Accessors

### frame

• get **frame**(): [Frame](../modules/_structs_frame_.frame.md)

*Defined in [src/structs/light.ts:40](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/light.ts#L40)*

**Returns:** [Frame](../modules/_structs_frame_.frame.md)

## Methods

### make

▸ `Static`**make**(`api`: Api, `id`: number \| string): Promise\<[Light](_structs_light_.light.md)>

*Defined in [src/structs/light.ts:21](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/light.ts#L21)*

#### Parameters:

Name | Type |
------ | ------ |
`api` | Api |
`id` | number \| string |

**Returns:** Promise\<[Light](_structs_light_.light.md)>
