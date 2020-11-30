**[@ericrabil/phea.js](../README.md)**

> [Globals](../README.md) / ["effect/Effect"](../modules/_effect_effect_.md) / Effect

# Class: Effect

Common structure for an effect

## Hierarchy

* **Effect**

  ↳ [SeizureEffect](_effect_effects_seizureeffect_.seizureeffect.md)

  ↳ [StaticEffect](_effect_effects_staticeffect_.staticeffect.md)

  ↳ [TransitionEffect](_effect_effects_transitioneffect_.transitioneffect.md)

  ↳ [LoopEffect](_effect_effects_loopeffect_.loopeffect.md)

## Index

### Properties

* [enabled](_effect_effect_.effect.md#enabled)
* [finished](_effect_effect_.effect.md#finished)
* [now](_effect_effect_.effect.md#now)

### Methods

* [getColor](_effect_effect_.effect.md#getcolor)
* [render](_effect_effect_.effect.md#render)

## Properties

### enabled

• `Abstract` **enabled**: boolean

*Defined in [src/effect/Effect.ts:24](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/Effect.ts#L24)*

Whether the effect should be included in the render stack at this time

___

### finished

• `Abstract` **finished**: boolean

*Defined in [src/effect/Effect.ts:28](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/Effect.ts#L28)*

Whether the effect should be permanently removed from the render stack

___

### now

• `Readonly` **now**: number

*Defined in [src/effect/Effect.ts:11](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/Effect.ts#L11)*

Singleton reference to Date.now() – you don't/shouldn't update this, it is handled for you. All effects will have the same reference to Date.now() in any given frame.

## Methods

### getColor

▸ `Abstract`**getColor**(`light`: [Light](_structs_light_.light.md)): [EffectColor](../modules/_structs_effect_color_.effectcolor.md)

*Defined in [src/effect/Effect.ts:16](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/Effect.ts#L16)*

Returns the next color for a given light

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`light` | [Light](_structs_light_.light.md) | light to compute a color for  |

**Returns:** [EffectColor](../modules/_structs_effect_color_.effectcolor.md)

___

### render

▸ `Abstract`**render**(): void \| Promise\<void>

*Defined in [src/effect/Effect.ts:20](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/Effect.ts#L20)*

Runs a render frame

**Returns:** void \| Promise\<void>
