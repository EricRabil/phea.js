**[@ericrabil/phea.js](../README.md)**

> [Globals](../README.md) / ["effect/effects/TransitionEffect"](../modules/_effect_effects_transitioneffect_.md) / TransitionEffect

# Class: TransitionEffect

Smoothly transitions between configured frames

## Hierarchy

* [Effect](_effect_effect_.effect.md)

  ↳ **TransitionEffect**

## Index

### Constructors

* [constructor](_effect_effects_transitioneffect_.transitioneffect.md#constructor)

### Properties

* [dead](_effect_effects_transitioneffect_.transitioneffect.md#dead)
* [enabled](_effect_effects_transitioneffect_.transitioneffect.md#enabled)
* [frames](_effect_effects_transitioneffect_.transitioneffect.md#frames)
* [now](_effect_effects_transitioneffect_.transitioneffect.md#now)
* [options](_effect_effects_transitioneffect_.transitioneffect.md#options)

### Accessors

* [finished](_effect_effects_transitioneffect_.transitioneffect.md#finished)

### Methods

* [getColor](_effect_effects_transitioneffect_.transitioneffect.md#getcolor)
* [render](_effect_effects_transitioneffect_.transitioneffect.md#render)

## Constructors

### constructor

\+ **new TransitionEffect**(`frames`: [TransitionFrame](../interfaces/_effect_effects_transitioneffect_.transitionframe.md)[], `options?`: [TransitionOptions](../interfaces/_effect_effects_transitioneffect_.transitionoptions.md)): [TransitionEffect](_effect_effects_transitioneffect_.transitioneffect.md)

*Defined in [src/effect/effects/TransitionEffect.ts:25](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/effects/TransitionEffect.ts#L25)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`frames` | [TransitionFrame](../interfaces/_effect_effects_transitioneffect_.transitionframe.md)[] | - |
`options` | [TransitionOptions](../interfaces/_effect_effects_transitioneffect_.transitionoptions.md) | {} |

**Returns:** [TransitionEffect](_effect_effects_transitioneffect_.transitioneffect.md)

## Properties

### dead

•  **dead**: boolean = false

*Defined in [src/effect/effects/TransitionEffect.ts:77](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/effects/TransitionEffect.ts#L77)*

___

### enabled

•  **enabled**: boolean = true

*Overrides [Effect](_effect_effect_.effect.md).[enabled](_effect_effect_.effect.md#enabled)*

*Defined in [src/effect/effects/TransitionEffect.ts:76](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/effects/TransitionEffect.ts#L76)*

___

### frames

•  **frames**: [TransitionFrame](../interfaces/_effect_effects_transitioneffect_.transitionframe.md)[]

*Defined in [src/effect/effects/TransitionEffect.ts:26](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/effects/TransitionEffect.ts#L26)*

___

### now

• `Readonly` **now**: number

*Inherited from [Effect](_effect_effect_.effect.md).[now](_effect_effect_.effect.md#now)*

*Defined in [src/effect/Effect.ts:11](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/Effect.ts#L11)*

Singleton reference to Date.now() – you don't/shouldn't update this, it is handled for you. All effects will have the same reference to Date.now() in any given frame.

___

### options

•  **options**: [TransitionOptions](../interfaces/_effect_effects_transitioneffect_.transitionoptions.md)

*Defined in [src/effect/effects/TransitionEffect.ts:26](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/effects/TransitionEffect.ts#L26)*

## Accessors

### finished

• get **finished**(): boolean

*Overrides [Effect](_effect_effect_.effect.md).[finished](_effect_effect_.effect.md#finished)*

*Defined in [src/effect/effects/TransitionEffect.ts:122](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/effects/TransitionEffect.ts#L122)*

Returns true if there are no more frames to render, or if it is flagged as dead

**Returns:** boolean

## Methods

### getColor

▸ **getColor**(): [EffectColor](../modules/_structs_effect_color_.effectcolor.md)

*Overrides [Effect](_effect_effect_.effect.md).[getColor](_effect_effect_.effect.md#getcolor)*

*Defined in [src/effect/effects/TransitionEffect.ts:42](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/effects/TransitionEffect.ts#L42)*

**Returns:** [EffectColor](../modules/_structs_effect_color_.effectcolor.md)

___

### render

▸ **render**(): void

*Overrides [Effect](_effect_effect_.effect.md).[render](_effect_effect_.effect.md#render)*

*Defined in [src/effect/effects/TransitionEffect.ts:46](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/effects/TransitionEffect.ts#L46)*

**Returns:** void
