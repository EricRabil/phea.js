**[@ericrabil/phea.js](../README.md)**

> [Globals](../README.md) / ["effect/effects/LoopEffect"](../modules/_effect_effects_loopeffect_.md) / LoopEffect

# Class: LoopEffect

Smooth transitions between each color

## Hierarchy

* [Effect](_effect_effect_.effect.md)

  ↳ **LoopEffect**

## Index

### Constructors

* [constructor](_effect_effects_loopeffect_.loopeffect.md#constructor)

### Properties

* [currentColor](_effect_effects_loopeffect_.loopeffect.md#currentcolor)
* [currentIndex](_effect_effects_loopeffect_.loopeffect.md#currentindex)
* [enabled](_effect_effects_loopeffect_.loopeffect.md#enabled)
* [finished](_effect_effects_loopeffect_.loopeffect.md#finished)
* [frame](_effect_effects_loopeffect_.loopeffect.md#frame)
* [nextColor](_effect_effects_loopeffect_.loopeffect.md#nextcolor)
* [now](_effect_effects_loopeffect_.loopeffect.md#now)
* [options](_effect_effects_loopeffect_.loopeffect.md#options)
* [resultColor](_effect_effects_loopeffect_.loopeffect.md#resultcolor)

### Methods

* [getColor](_effect_effects_loopeffect_.loopeffect.md#getcolor)
* [render](_effect_effects_loopeffect_.loopeffect.md#render)

## Constructors

### constructor

\+ **new LoopEffect**(`options`: [LoopOptions](../interfaces/_effect_effects_loopeffect_.loopoptions.md)): [LoopEffect](_effect_effects_loopeffect_.loopeffect.md)

*Defined in [src/effect/effects/LoopEffect.ts:13](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/effects/LoopEffect.ts#L13)*

#### Parameters:

Name | Type |
------ | ------ |
`options` | [LoopOptions](../interfaces/_effect_effects_loopeffect_.loopoptions.md) |

**Returns:** [LoopEffect](_effect_effects_loopeffect_.loopeffect.md)

## Properties

### currentColor

•  **currentColor**: [EffectColor](../modules/_structs_effect_color_.effectcolor.md) = this.options.colors[0]

*Defined in [src/effect/effects/LoopEffect.ts:21](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/effects/LoopEffect.ts#L21)*

___

### currentIndex

•  **currentIndex**: number = 0

*Defined in [src/effect/effects/LoopEffect.ts:20](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/effects/LoopEffect.ts#L20)*

___

### enabled

•  **enabled**: boolean = true

*Overrides [Effect](_effect_effect_.effect.md).[enabled](_effect_effect_.effect.md#enabled)*

*Defined in [src/effect/effects/LoopEffect.ts:50](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/effects/LoopEffect.ts#L50)*

___

### finished

•  **finished**: boolean = false

*Overrides [Effect](_effect_effect_.effect.md).[finished](_effect_effect_.effect.md#finished)*

*Defined in [src/effect/effects/LoopEffect.ts:51](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/effects/LoopEffect.ts#L51)*

___

### frame

•  **frame**: number = 0

*Defined in [src/effect/effects/LoopEffect.ts:18](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/effects/LoopEffect.ts#L18)*

___

### nextColor

•  **nextColor**: [EffectColor](../modules/_structs_effect_color_.effectcolor.md) = this.options.colors[1]

*Defined in [src/effect/effects/LoopEffect.ts:22](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/effects/LoopEffect.ts#L22)*

___

### now

• `Readonly` **now**: number

*Inherited from [Effect](_effect_effect_.effect.md).[now](_effect_effect_.effect.md#now)*

*Defined in [src/effect/Effect.ts:11](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/Effect.ts#L11)*

Singleton reference to Date.now() – you don't/shouldn't update this, it is handled for you. All effects will have the same reference to Date.now() in any given frame.

___

### options

•  **options**: [LoopOptions](../interfaces/_effect_effects_loopeffect_.loopoptions.md)

*Defined in [src/effect/effects/LoopEffect.ts:14](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/effects/LoopEffect.ts#L14)*

___

### resultColor

•  **resultColor**: [EffectColor](../modules/_structs_effect_color_.effectcolor.md)

*Defined in [src/effect/effects/LoopEffect.ts:24](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/effects/LoopEffect.ts#L24)*

## Methods

### getColor

▸ **getColor**(): [EffectColor](../modules/_structs_effect_color_.effectcolor.md)

*Overrides [Effect](_effect_effect_.effect.md).[getColor](_effect_effect_.effect.md#getcolor)*

*Defined in [src/effect/effects/LoopEffect.ts:26](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/effects/LoopEffect.ts#L26)*

**Returns:** [EffectColor](../modules/_structs_effect_color_.effectcolor.md)

___

### render

▸ **render**(): void

*Overrides [Effect](_effect_effect_.effect.md).[render](_effect_effect_.effect.md#render)*

*Defined in [src/effect/effects/LoopEffect.ts:30](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/effects/LoopEffect.ts#L30)*

**Returns:** void
