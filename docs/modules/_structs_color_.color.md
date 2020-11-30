**[@ericrabil/phea.js](../README.md)**

> [Globals](../README.md) / ["structs/color"](_structs_color_.md) / Color

# Namespace: Color

Base object for representing an RGB color

## Index

### Properties

* [blue](_structs_color_.color.md#blue)
* [green](_structs_color_.color.md#green)
* [red](_structs_color_.color.md#red)

### Variables

* [GREENBLUE](_structs_color_.color.md#greenblue)
* [REDBLUE](_structs_color_.color.md#redblue)
* [REDGREEN](_structs_color_.color.md#redgreen)

### Functions

* [dilute](_structs_color_.color.md#dilute)
* [mergeEvenly](_structs_color_.color.md#mergeevenly)
* [mergePartials](_structs_color_.color.md#mergepartials)
* [sum](_structs_color_.color.md#sum)

### Object literals

* [BLACK](_structs_color_.color.md#black)
* [BLUE](_structs_color_.color.md#blue)
* [GREEN](_structs_color_.color.md#green)
* [RED](_structs_color_.color.md#red)
* [WHITE](_structs_color_.color.md#white)

## Properties

### blue

•  **blue**: number

*Defined in [src/structs/color.ts:16](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/color.ts#L16)*

blue value from 0-255

___

### green

•  **green**: number

*Defined in [src/structs/color.ts:12](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/color.ts#L12)*

green value from 0-255

___

### red

•  **red**: number

*Defined in [src/structs/color.ts:8](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/color.ts#L8)*

red value from 0-255

## Variables

### GREENBLUE

• `Const` **GREENBLUE**: [Color](_structs_color_.color.md) = mergeEvenly(GREEN, BLUE)

*Defined in [src/structs/color.ts:96](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/color.ts#L96)*

___

### REDBLUE

• `Const` **REDBLUE**: [Color](_structs_color_.color.md) = mergeEvenly(RED, BLUE)

*Defined in [src/structs/color.ts:95](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/color.ts#L95)*

___

### REDGREEN

• `Const` **REDGREEN**: [Color](_structs_color_.color.md) = mergeEvenly(RED, GREEN)

*Defined in [src/structs/color.ts:94](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/color.ts#L94)*

## Functions

### dilute

▸ **dilute**(`__namedParameters`: { blue: number ; green: number ; red: number  }, `ratio`: number): object

*Defined in [src/structs/color.ts:25](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/color.ts#L25)*

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

*Defined in [src/structs/color.ts:58](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/color.ts#L58)*

Takes a series of colors and merges them using an even ratio

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`...colors` | [Color](_structs_color_.color.md)[] | colors to merge  |

**Returns:** [Color](_structs_color_.color.md)

___

### mergePartials

▸ **mergePartials**(`colors`: [Color](_structs_color_.color.md)[]): [Color](_structs_color_.color.md)

*Defined in [src/structs/color.ts:46](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/color.ts#L46)*

Merges a series of expectedly partial colors into a single color

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`colors` | [Color](_structs_color_.color.md)[] | colors to merge  |

**Returns:** [Color](_structs_color_.color.md)

___

### sum

▸ **sum**\<T>(`key`: T, `colors`: [Color](_structs_color_.color.md)[]): number

*Defined in [src/structs/color.ts:38](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/color.ts#L38)*

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

▪ `Const` **BLACK**: object

*Defined in [src/structs/color.ts:88](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/color.ts#L88)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`blue` | number | 0 |
`green` | number | 0 |
`red` | number | 0 |

___

### BLUE

▪ `Const` **BLUE**: object

*Defined in [src/structs/color.ts:76](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/color.ts#L76)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`blue` | number | 255 |
`green` | number | 0 |
`red` | number | 0 |

___

### GREEN

▪ `Const` **GREEN**: object

*Defined in [src/structs/color.ts:70](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/color.ts#L70)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`blue` | number | 0 |
`green` | number | 255 |
`red` | number | 0 |

___

### RED

▪ `Const` **RED**: object

*Defined in [src/structs/color.ts:64](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/color.ts#L64)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`blue` | number | 0 |
`green` | number | 0 |
`red` | number | 255 |

___

### WHITE

▪ `Const` **WHITE**: object

*Defined in [src/structs/color.ts:82](https://github.com/EricRabil/phea.js/blob/66a21c7/src/structs/color.ts#L82)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`blue` | number | 255 |
`green` | number | 255 |
`red` | number | 255 |
