**[phea.js](../README.md)**

> [Globals](../globals.md) / ["effect/effects/StaticEffect"](../modules/_effect_effects_staticeffect_.md) / StaticEffect

# Class: StaticEffect

Returns a single color, forever. This can be mutated externally to make it not a single color, but doesn't offer much customization.

## Hierarchy

* [Effect](_effect_effect_.effect.md)

  ↳ **StaticEffect**

## Index

### Constructors

* [constructor](_effect_effects_staticeffect_.staticeffect.md#constructor)

### Properties

* [color](_effect_effects_staticeffect_.staticeffect.md#color)
* [enabled](_effect_effects_staticeffect_.staticeffect.md#enabled)
* [finished](_effect_effects_staticeffect_.staticeffect.md#finished)
* [now](_effect_effects_staticeffect_.staticeffect.md#now)

### Methods

* [getColor](_effect_effects_staticeffect_.staticeffect.md#getcolor)
* [render](_effect_effects_staticeffect_.staticeffect.md#render)

## Constructors

### constructor

\+ **new StaticEffect**(`color`: [EffectColor](../modules/_structs_effect_color_.effectcolor.md)): [StaticEffect](_effect_effects_staticeffect_.staticeffect.md)

*Defined in src/effect/effects/StaticEffect.ts:7*

#### Parameters:

Name | Type |
------ | ------ |
`color` | [EffectColor](../modules/_structs_effect_color_.effectcolor.md) |

**Returns:** [StaticEffect](_effect_effects_staticeffect_.staticeffect.md)

## Properties

### color

•  **color**: [EffectColor](../modules/_structs_effect_color_.effectcolor.md)

*Defined in src/effect/effects/StaticEffect.ts:8*

___

### enabled

•  **enabled**: boolean = false

*Overrides [Effect](_effect_effect_.effect.md).[enabled](_effect_effect_.effect.md#enabled)*

*Defined in src/effect/effects/StaticEffect.ts:20*

___

### finished

•  **finished**: boolean = false

*Overrides [Effect](_effect_effect_.effect.md).[finished](_effect_effect_.effect.md#finished)*

*Defined in src/effect/effects/StaticEffect.ts:21*

___

### now

• `Readonly` **now**: number

*Inherited from [Effect](_effect_effect_.effect.md).[now](_effect_effect_.effect.md#now)*

*Defined in src/effect/Effect.ts:11*

Singleton reference to Date.now() – you don't/shouldn't update this, it is handled for you. All effects will have the same reference to Date.now() in any given frame.

## Methods

### getColor

▸ **getColor**(): [EffectColor](../modules/_structs_effect_color_.effectcolor.md)

*Overrides [Effect](_effect_effect_.effect.md).[getColor](_effect_effect_.effect.md#getcolor)*

*Defined in src/effect/effects/StaticEffect.ts:12*

**Returns:** [EffectColor](../modules/_structs_effect_color_.effectcolor.md)

___

### render

▸ **render**(): void

*Overrides [Effect](_effect_effect_.effect.md).[render](_effect_effect_.effect.md#render)*

*Defined in src/effect/effects/StaticEffect.ts:16*

**Returns:** void
