**[phea.js](../README.md)**

> [Globals](../globals.md) / ["structs/light"](../modules/_structs_light_.md) / Light

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

*Defined in src/structs/light.ts:36*

___

### brightness

•  **brightness**: number = 255

*Defined in src/structs/light.ts:37*

___

### gamut

•  **gamut**: [ColorGamut](../interfaces/_structs_light_.colorgamut.md) \| null = null

*Defined in src/structs/light.ts:38*

___

### green

•  **green**: number = 255

*Defined in src/structs/light.ts:35*

___

### id

•  **id**: number

*Defined in src/structs/light.ts:33*

___

### red

•  **red**: number = 255

*Defined in src/structs/light.ts:34*

## Accessors

### frame

• get **frame**(): [Frame](../modules/_structs_frame_.frame.md)

*Defined in src/structs/light.ts:40*

**Returns:** [Frame](../modules/_structs_frame_.frame.md)

## Methods

### make

▸ `Static`**make**(`api`: Api, `id`: number \| string): Promise\<[Light](_structs_light_.light.md)>

*Defined in src/structs/light.ts:21*

#### Parameters:

Name | Type |
------ | ------ |
`api` | Api |
`id` | number \| string |

**Returns:** Promise\<[Light](_structs_light_.light.md)>
