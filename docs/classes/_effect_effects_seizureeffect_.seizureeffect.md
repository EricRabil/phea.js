**[phea.js](../README.md)**

> [Globals](../globals.md) / ["effect/effects/SeizureEffect"](../modules/_effect_effects_seizureeffect_.md) / SeizureEffect

# Class: SeizureEffect

This does what it says – it rapidly strobes between the configured colors.

Specifically DO NOT use this if you are sensitive to flashing lights.

## Hierarchy

* [Effect](_effect_effect_.effect.md)

  ↳ **SeizureEffect**

## Index

### Constructors

* [constructor](_effect_effects_seizureeffect_.seizureeffect.md#constructor)

### Properties

* [enabled](_effect_effects_seizureeffect_.seizureeffect.md#enabled)
* [finished](_effect_effects_seizureeffect_.seizureeffect.md#finished)
* [frames](_effect_effects_seizureeffect_.seizureeffect.md#frames)
* [now](_effect_effects_seizureeffect_.seizureeffect.md#now)
* [options](_effect_effects_seizureeffect_.seizureeffect.md#options)

### Methods

* [getColor](_effect_effects_seizureeffect_.seizureeffect.md#getcolor)
* [render](_effect_effects_seizureeffect_.seizureeffect.md#render)

## Constructors

### constructor

\+ **new SeizureEffect**(`options`: [SeizureOptions](../interfaces/_effect_effects_seizureeffect_.seizureoptions.md)): [SeizureEffect](_effect_effects_seizureeffect_.seizureeffect.md)

*Defined in src/effect/effects/SeizureEffect.ts:24*

#### Parameters:

Name | Type |
------ | ------ |
`options` | [SeizureOptions](../interfaces/_effect_effects_seizureeffect_.seizureoptions.md) |

**Returns:** [SeizureEffect](_effect_effects_seizureeffect_.seizureeffect.md)

## Properties

### enabled

•  **enabled**: boolean = true

*Overrides [Effect](_effect_effect_.effect.md).[enabled](_effect_effect_.effect.md#enabled)*

*Defined in src/effect/effects/SeizureEffect.ts:58*

___

### finished

•  **finished**: boolean = this.options.framesPerColor === 0 \|\| this.options.colors.length === 0

*Overrides [Effect](_effect_effect_.effect.md).[finished](_effect_effect_.effect.md#finished)*

*Defined in src/effect/effects/SeizureEffect.ts:59*

___

### frames

•  **frames**: number = 0

*Defined in src/effect/effects/SeizureEffect.ts:24*

How many frames into a color we are

___

### now

• `Readonly` **now**: number

*Inherited from [Effect](_effect_effect_.effect.md).[now](_effect_effect_.effect.md#now)*

*Defined in src/effect/Effect.ts:11*

Singleton reference to Date.now() – you don't/shouldn't update this, it is handled for you. All effects will have the same reference to Date.now() in any given frame.

___

### options

•  **options**: [SeizureOptions](../interfaces/_effect_effects_seizureeffect_.seizureoptions.md)

*Defined in src/effect/effects/SeizureEffect.ts:26*

## Methods

### getColor

▸ **getColor**(): [EffectColor](../modules/_structs_effect_color_.effectcolor.md)

*Overrides [Effect](_effect_effect_.effect.md).[getColor](_effect_effect_.effect.md#getcolor)*

*Defined in src/effect/effects/SeizureEffect.ts:40*

**Returns:** [EffectColor](../modules/_structs_effect_color_.effectcolor.md)

___

### render

▸ **render**(): void

*Overrides [Effect](_effect_effect_.effect.md).[render](_effect_effect_.effect.md#render)*

*Defined in src/effect/effects/SeizureEffect.ts:44*

**Returns:** void
