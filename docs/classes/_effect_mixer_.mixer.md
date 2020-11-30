**[@ericrabil/phea.js](../README.md)**

> [Globals](../README.md) / ["effect/Mixer"](../modules/_effect_mixer_.md) / Mixer

# Class: Mixer

Overlays multiple effects over eachother.

## Hierarchy

* **Mixer**

## Index

### Properties

* [effects](_effect_mixer_.mixer.md#effects)
* [lights](_effect_mixer_.mixer.md#lights)
* [now](_effect_mixer_.mixer.md#now)
* [retainColor](_effect_mixer_.mixer.md#retaincolor)

### Methods

* [applyEffectsOnLight](_effect_mixer_.mixer.md#applyeffectsonlight)
* [applyEffectsOnLights](_effect_mixer_.mixer.md#applyeffectsonlights)
* [removeFinishedEffects](_effect_mixer_.mixer.md#removefinishedeffects)
* [render](_effect_mixer_.mixer.md#render)
* [renderEffects](_effect_mixer_.mixer.md#rendereffects)

## Properties

### effects

•  **effects**: [Effect](_effect_effect_.effect.md)[] = []

*Defined in [src/effect/Mixer.ts:16](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/Mixer.ts#L16)*

Effects to apply

___

### lights

•  **lights**: [Light](_structs_light_.light.md)[] = []

*Defined in [src/effect/Mixer.ts:11](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/Mixer.ts#L11)*

Light states to track

___

### now

•  **now**: number = Date.now()

*Defined in [src/effect/Mixer.ts:26](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/Mixer.ts#L26)*

Shared reference to current unix timestamp, updated on each frame

___

### retainColor

•  **retainColor**: boolean = false

*Defined in [src/effect/Mixer.ts:21](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/Mixer.ts#L21)*

Whether to mix into the previous color or overwrite the color each time

## Methods

### applyEffectsOnLight

▸ **applyEffectsOnLight**(`light`: [Light](_structs_light_.light.md)): void

*Defined in [src/effect/Mixer.ts:32](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/Mixer.ts#L32)*

Applies the effects to a given light

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`light` | [Light](_structs_light_.light.md) | light to apply effects to  |

**Returns:** void

___

### applyEffectsOnLights

▸ **applyEffectsOnLights**(`lights?`: [Light](_structs_light_.light.md)[]): void

*Defined in [src/effect/Mixer.ts:70](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/Mixer.ts#L70)*

Applies the effect states to the given light states

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`lights` | [Light](_structs_light_.light.md)[] | this.lights | lights to update  |

**Returns:** void

___

### removeFinishedEffects

▸ **removeFinishedEffects**(): void

*Defined in [src/effect/Mixer.ts:79](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/Mixer.ts#L79)*

Purges effects with finished=true from the effects array

**Returns:** void

___

### render

▸ **render**(): Promise\<void>

*Defined in [src/effect/Mixer.ts:93](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/Mixer.ts#L93)*

Garbage collects, runs a render frame, applies to each light

**Returns:** Promise\<void>

___

### renderEffects

▸ **renderEffects**(): Promise\<void[]>

*Defined in [src/effect/Mixer.ts:86](https://github.com/EricRabil/phea.js/blob/66a21c7/src/effect/Mixer.ts#L86)*

Runs a render frame on each effect

**Returns:** Promise\<void[]>
