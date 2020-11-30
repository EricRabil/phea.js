**[@ericrabil/phea.js](../README.md)**

> [Globals](../README.md) / ["dtls"](../modules/_dtls_.md) / DTLS

# Class: DTLS

Manages the DTLS connection to the Hue Entertainment API

## Hierarchy

* EventEmitter

* EventEmitter

  ↳ **DTLS**

## Index

### Properties

* [group](_dtls_.dtls.md#group)
* [hue](_dtls_.dtls.md#hue)
* [lights](_dtls_.dtls.md#lights)
* [options](_dtls_.dtls.md#options)
* [running](_dtls_.dtls.md#running)
* [sequenceNumber](_dtls_.dtls.md#sequencenumber)

### Methods

* [on](_dtls_.dtls.md#on)
* [once](_dtls_.dtls.md#once)
* [sendFrames](_dtls_.dtls.md#sendframes)
* [start](_dtls_.dtls.md#start)
* [stop](_dtls_.dtls.md#stop)
* [make](_dtls_.dtls.md#make)

## Properties

### group

•  **group**: string

*Defined in [src/dtls.ts:73](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L73)*

___

### hue

• `Readonly` **hue**: Api

*Defined in [src/dtls.ts:73](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L73)*

___

### lights

•  **lights**: number[]

*Defined in [src/dtls.ts:73](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L73)*

___

### options

•  **options**: [DTLSConnectionOptions](../interfaces/_dtls_.dtlsconnectionoptions.md)

*Defined in [src/dtls.ts:73](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L73)*

___

### running

•  **running**: boolean = false

*Defined in [src/dtls.ts:42](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L42)*

___

### sequenceNumber

•  **sequenceNumber**: number = 0

*Defined in [src/dtls.ts:43](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L43)*

## Methods

### on

▸ **on**(`event`: \"connected\", `cb`: Function): this

*Overrides void*

*Defined in [src/dtls.ts:19](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"connected\" |
`cb` | Function |

**Returns:** this

▸ **on**(`event`: \"error\", `cb`: Function): this

*Overrides void*

*Defined in [src/dtls.ts:20](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L20)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`cb` | Function |

**Returns:** this

▸ **on**(`event`: \"data\", `cb`: (data: Buffer) => unknown): this

*Overrides void*

*Defined in [src/dtls.ts:21](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L21)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`cb` | (data: Buffer) => unknown |

**Returns:** this

▸ **on**(`event`: \"timeout\", `cb`: Function): this

*Overrides void*

*Defined in [src/dtls.ts:22](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L22)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"timeout\" |
`cb` | Function |

**Returns:** this

▸ **on**(`event`: \"closed\", `cb`: Function): this

*Overrides void*

*Defined in [src/dtls.ts:23](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L23)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"closed\" |
`cb` | Function |

**Returns:** this

▸ **on**(`event`: string, `cb`: Function): this

*Overrides void*

*Defined in [src/dtls.ts:24](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string |
`cb` | Function |

**Returns:** this

___

### once

▸ **once**(`event`: \"connected\", `cb`: Function): this

*Overrides void*

*Defined in [src/dtls.ts:26](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L26)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"connected\" |
`cb` | Function |

**Returns:** this

▸ **once**(`event`: \"error\", `cb`: Function): this

*Overrides void*

*Defined in [src/dtls.ts:27](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L27)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`cb` | Function |

**Returns:** this

▸ **once**(`event`: \"timeout\", `cb`: Function): this

*Overrides void*

*Defined in [src/dtls.ts:28](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L28)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"timeout\" |
`cb` | Function |

**Returns:** this

▸ **once**(`event`: \"closed\", `cb`: Function): this

*Overrides void*

*Defined in [src/dtls.ts:29](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L29)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"closed\" |
`cb` | Function |

**Returns:** this

▸ **once**(`event`: \"data\", `cb`: (data: Buffer) => unknown): this

*Overrides void*

*Defined in [src/dtls.ts:30](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`cb` | (data: Buffer) => unknown |

**Returns:** this

▸ **once**(`event`: string, `cb`: Function): this

*Overrides void*

*Defined in [src/dtls.ts:31](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string |
`cb` | Function |

**Returns:** this

___

### sendFrames

▸ **sendFrames**(`frames`: [Frame](../modules/_structs_frame_.frame.md)[]): Promise\<void>

*Defined in [src/dtls.ts:173](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L173)*

Sends the given frames over the entertainment API

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`frames` | [Frame](../modules/_structs_frame_.frame.md)[] | frames to send  |

**Returns:** Promise\<void>

___

### start

▸ **start**(): Promise\<void>

*Defined in [src/dtls.ts:85](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L85)*

Starts the DTLS session.

**Returns:** Promise\<void>

___

### stop

▸ **stop**(): Promise\<void>

*Defined in [src/dtls.ts:157](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L157)*

Gracefully closes the session

**Returns:** Promise\<void>

___

### make

▸ `Static`**make**(`hue`: Api, `groupID`: string, `options`: [DTLSConnectionOptions](../interfaces/_dtls_.dtlsconnectionoptions.md)): Promise\<[DTLS](_dtls_.dtls.md)>

*Defined in [src/dtls.ts:60](https://github.com/EricRabil/phea.js/blob/66a21c7/src/dtls.ts#L60)*

Retrieves all necessary data before constructing a DTLS instance

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`hue` | Api | hue api object |
`groupID` | string | entertainment group ID |
`options` | [DTLSConnectionOptions](../interfaces/_dtls_.dtlsconnectionoptions.md) | connection options  |

**Returns:** Promise\<[DTLS](_dtls_.dtls.md)>
