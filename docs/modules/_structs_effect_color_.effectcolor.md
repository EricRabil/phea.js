**[phea.js](../README.md)**

> [Globals](../globals.md) / ["structs/effect-color"](_structs_effect_color_.md) / EffectColor

# Namespace: EffectColor

## Index

### Properties

* [GREENBLUE](_structs_effect_color_.effectcolor.md#greenblue)
* [REDBLUE](_structs_effect_color_.effectcolor.md#redblue)
* [REDGREEN](_structs_effect_color_.effectcolor.md#redgreen)
* [alpha](_structs_effect_color_.effectcolor.md#alpha)
* [blue](_structs_effect_color_.effectcolor.md#blue)
* [brightness](_structs_effect_color_.effectcolor.md#brightness)
* [green](_structs_effect_color_.effectcolor.md#green)
* [red](_structs_effect_color_.effectcolor.md#red)

### Functions

* [isNumber](_structs_effect_color_.effectcolor.md#isnumber)
* [make](_structs_effect_color_.effectcolor.md#make)
* [mix](_structs_effect_color_.effectcolor.md#mix)
* [modulate](_structs_effect_color_.effectcolor.md#modulate)

### Methods

* [dilute](_structs_effect_color_.effectcolor.md#dilute)
* [mergeEvenly](_structs_effect_color_.effectcolor.md#mergeevenly)
* [mergePartials](_structs_effect_color_.effectcolor.md#mergepartials)
* [sum](_structs_effect_color_.effectcolor.md#sum)

### Object literals

* [BLACK](_structs_effect_color_.effectcolor.md#black)
* [BLUE](_structs_effect_color_.effectcolor.md#blue)
* [EMPTY\_COLOR](_structs_effect_color_.effectcolor.md#empty_color)
* [GREEN](_structs_effect_color_.effectcolor.md#green)
* [RED](_structs_effect_color_.effectcolor.md#red)
* [WHITE](_structs_effect_color_.effectcolor.md#white)

## Properties

### GREENBLUE

•  **GREENBLUE**: [Color](_structs_color_.color.md) = mergeEvenly(GREEN, BLUE)

*Defined in src/structs/color.ts:87*

___

### REDBLUE

•  **REDBLUE**: [Color](_structs_color_.color.md) = mergeEvenly(RED, BLUE)

*Defined in src/structs/color.ts:86*

___

### REDGREEN

•  **REDGREEN**: [Color](_structs_color_.color.md) = mergeEvenly(RED, GREEN)

*Defined in src/structs/color.ts:85*

___

### alpha

• `Optional` **alpha**: undefined \| number

*Defined in src/structs/effect-color.ts:5*

___

### blue

•  **blue**: number

*Inherited from [Color](_structs_color_.color.md).[blue](_structs_color_.color.md#blue)*

*Defined in src/structs/color.ts:7*

___

### brightness

• `Optional` **brightness**: undefined \| number

*Defined in src/structs/effect-color.ts:4*

___

### green

•  **green**: number

*Inherited from [Color](_structs_color_.color.md).[green](_structs_color_.color.md#green)*

*Defined in src/structs/color.ts:6*

___

### red

•  **red**: number

*Inherited from [Color](_structs_color_.color.md).[red](_structs_color_.color.md#red)*

*Defined in src/structs/color.ts:5*

## Functions

### isNumber

▸ `Const`**isNumber**(`value`: unknown): boolean

*Defined in src/structs/effect-color.ts:51*

#### Parameters:

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** boolean

___

### make

▸ **make**(`color?`: [EffectColor](_structs_effect_color_.effectcolor.md)): [EffectColor](_structs_effect_color_.effectcolor.md)

*Defined in src/structs/effect-color.ts:11*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`color` | [EffectColor](_structs_effect_color_.effectcolor.md) | EMPTY\_COLOR |

**Returns:** [EffectColor](_structs_effect_color_.effectcolor.md)

___

### mix

▸ **mix**(`color1`: [EffectColor](_structs_effect_color_.effectcolor.md), `color2`: [EffectColor](_structs_effect_color_.effectcolor.md), `ratio`: number, `mixBrightness?`: boolean): [EffectColor](_structs_effect_color_.effectcolor.md)

*Defined in src/structs/effect-color.ts:23*

Mixes two colors

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`color1` | [EffectColor](_structs_effect_color_.effectcolor.md) | - | first color |
`color2` | [EffectColor](_structs_effect_color_.effectcolor.md) | - | second color |
`ratio` | number | - | how much alpha the first color gets. the second color gets 1.0 - ratio  |
`mixBrightness` | boolean | false | - |

**Returns:** [EffectColor](_structs_effect_color_.effectcolor.md)

___

### modulate

▸ **modulate**(`color`: [EffectColor](_structs_effect_color_.effectcolor.md), `__namedParameters`: { alpha: undefined \| number ; blue: undefined \| number ; brightness: undefined \| number ; green: undefined \| number ; red: undefined \| number  }): [EffectColor](_structs_effect_color_.effectcolor.md)

*Defined in src/structs/effect-color.ts:58*

Modulates a color with the given parameters

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`color` | [EffectColor](_structs_effect_color_.effectcolor.md) | color to modulate |
`__namedParameters` | { alpha: undefined \| number ; blue: undefined \| number ; brightness: undefined \| number ; green: undefined \| number ; red: undefined \| number  } | - |

**Returns:** [EffectColor](_structs_effect_color_.effectcolor.md)

## Methods

### dilute

▸ **dilute**(`__namedParameters`: { blue: number ; green: number ; red: number  }, `ratio`: number): object

*Defined in src/structs/color.ts:16*

Amplifies/dilutes a color with the given ratio

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`__namedParameters` | { blue: number ; green: number ; red: number  } | - |
`ratio` | number | ratio to multiply R/G/B by  |

**Returns:** object

Name | Type |
------ | ------ |
`blue` | number |
`green` | number |
`red` | number |

___

### mergeEvenly

▸ **mergeEvenly**(...`colors`: [Color](_structs_color_.color.md)[]): [Color](_structs_color_.color.md)

*Defined in src/structs/color.ts:49*

Takes a series of colors and merges them using an even ratio

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`...colors` | [Color](_structs_color_.color.md)[] | colors to merge  |

**Returns:** [Color](_structs_color_.color.md)

___

### mergePartials

▸ **mergePartials**(`colors`: [Color](_structs_color_.color.md)[]): [Color](_structs_color_.color.md)

*Defined in src/structs/color.ts:37*

Merges a series of expectedly partial colors into a single color

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`colors` | [Color](_structs_color_.color.md)[] | colors to merge  |

**Returns:** [Color](_structs_color_.color.md)

___

### sum

▸ **sum**\<T>(`key`: T, `colors`: [Color](_structs_color_.color.md)[]): number

*Defined in src/structs/color.ts:29*

Returns the sum of a given color property

#### Type parameters:

Name | Type |
------ | ------ |
`T` | keyof [Color](_structs_color_.color.md) |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | T | property to take |
`colors` | [Color](_structs_color_.color.md)[] | colors to summize  |

**Returns:** number

## Object literals

### BLACK

▪  **BLACK**: object

*Defined in src/structs/color.ts:79*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`blue` | number | 0 |
`green` | number | 0 |
`red` | number | 0 |

___

### BLUE

▪  **BLUE**: object

*Defined in src/structs/color.ts:67*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`blue` | number | 255 |
`green` | number | 0 |
`red` | number | 0 |

___

### EMPTY\_COLOR

▪ `Const` **EMPTY\_COLOR**: object

*Defined in src/structs/effect-color.ts:9*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`blue` | number | 0 |
`green` | number | 0 |
`red` | number | 0 |

___

### GREEN

▪  **GREEN**: object

*Defined in src/structs/color.ts:61*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`blue` | number | 0 |
`green` | number | 255 |
`red` | number | 0 |

___

### RED

▪  **RED**: object

*Defined in src/structs/color.ts:55*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`blue` | number | 0 |
`green` | number | 0 |
`red` | number | 255 |

___

### WHITE

▪  **WHITE**: object

*Defined in src/structs/color.ts:73*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`blue` | number | 255 |
`green` | number | 255 |
`red` | number | 255 |
