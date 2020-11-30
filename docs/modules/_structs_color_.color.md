**[phea.js](../README.md)**

> [Globals](../globals.md) / ["structs/color"](_structs_color_.md) / Color

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

*Defined in src/structs/color.ts:7*

___

### green

•  **green**: number

*Defined in src/structs/color.ts:6*

___

### red

•  **red**: number

*Defined in src/structs/color.ts:5*

## Variables

### GREENBLUE

• `Const` **GREENBLUE**: [Color](_structs_color_.color.md) = mergeEvenly(GREEN, BLUE)

*Defined in src/structs/color.ts:87*

___

### REDBLUE

• `Const` **REDBLUE**: [Color](_structs_color_.color.md) = mergeEvenly(RED, BLUE)

*Defined in src/structs/color.ts:86*

___

### REDGREEN

• `Const` **REDGREEN**: [Color](_structs_color_.color.md) = mergeEvenly(RED, GREEN)

*Defined in src/structs/color.ts:85*

## Functions

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

▪ `Const` **BLACK**: object

*Defined in src/structs/color.ts:79*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`blue` | number | 0 |
`green` | number | 0 |
`red` | number | 0 |

___

### BLUE

▪ `Const` **BLUE**: object

*Defined in src/structs/color.ts:67*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`blue` | number | 255 |
`green` | number | 0 |
`red` | number | 0 |

___

### GREEN

▪ `Const` **GREEN**: object

*Defined in src/structs/color.ts:61*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`blue` | number | 0 |
`green` | number | 255 |
`red` | number | 0 |

___

### RED

▪ `Const` **RED**: object

*Defined in src/structs/color.ts:55*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`blue` | number | 0 |
`green` | number | 0 |
`red` | number | 255 |

___

### WHITE

▪ `Const` **WHITE**: object

*Defined in src/structs/color.ts:73*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`blue` | number | 255 |
`green` | number | 255 |
`red` | number | 255 |
