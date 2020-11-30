**[@ericrabil/phea.js](../README.md)**

> [Globals](../README.md) / ["hue-stream"](../modules/_hue_stream_.md) / HueStream

# Class: HueStream

Manages the streaming activity and mixer state

## Hierarchy

* EventEmitter

* EventEmitter

  ↳ **HueStream**

## Index

### Properties

* [mixer](_hue_stream_.huestream.md#mixer)
* [options](_hue_stream_.huestream.md#options)
* [renderResult](_hue_stream_.huestream.md#renderresult)
* [stream](_hue_stream_.huestream.md#stream)

### Accessors

* [blue](_hue_stream_.huestream.md#blue)
* [brightness](_hue_stream_.huestream.md#brightness)
* [effects](_hue_stream_.huestream.md#effects)
* [green](_hue_stream_.huestream.md#green)
* [red](_hue_stream_.huestream.md#red)

### Methods

* [on](_hue_stream_.huestream.md#on)
* [once](_hue_stream_.huestream.md#once)
* [render](_hue_stream_.huestream.md#render)
* [renderSingleFrame](_hue_stream_.huestream.md#rendersingleframe)
* [start](_hue_stream_.huestream.md#start)
* [stop](_hue_stream_.huestream.md#stop)
* [createGroup](_hue_stream_.huestream.md#creategroup)
* [discover](_hue_stream_.huestream.md#discover)
* [lightIDs](_hue_stream_.huestream.md#lightids)
* [lights](_hue_stream_.huestream.md#lights)
* [make](_hue_stream_.huestream.md#make)
* [register](_hue_stream_.huestream.md#register)

## Properties

### mixer

•  **mixer**: [Mixer](_effect_mixer_.mixer.md) = new Mixer()

*Defined in [src/hue-stream.ts:45](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L45)*

Effect mixer instance

___

### options

•  **options**: [HueStreamOptions](../interfaces/_hue_stream_.huestreamoptions.md)

*Defined in [src/hue-stream.ts:146](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L146)*

___

### renderResult

•  **renderResult**: Promise\<void>

*Defined in [src/hue-stream.ts:177](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L177)*

 This will resolve/reject the end result of the renering loop – in other words, it will not resolve until the render loop is ended, and it will not reject unless the render loop rejects.

___

### stream

•  **stream**: [Stream](_stream_.stream.md)

*Defined in [src/hue-stream.ts:49](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L49)*

Frame manager

## Accessors

### blue

• get **blue**(): number

*Defined in [src/hue-stream.ts:297](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L297)*

Average light blue

**Returns:** number

• set **blue**(`blue`: number): void

*Defined in [src/hue-stream.ts:290](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L290)*

Sets the blue value for all lights

#### Parameters:

Name | Type |
------ | ------ |
`blue` | number |

**Returns:** void

___

### brightness

• get **brightness**(): number

*Defined in [src/hue-stream.ts:255](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L255)*

Average light brightness

**Returns:** number

• set **brightness**(`brightness`: number): void

*Defined in [src/hue-stream.ts:248](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L248)*

Sets the brightness value for all lights

#### Parameters:

Name | Type |
------ | ------ |
`brightness` | number |

**Returns:** void

___

### effects

• get **effects**(): [Effect](_effect_effect_.effect.md)[]

*Defined in [src/hue-stream.ts:237](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L237)*

The effects used in the mixer

**Returns:** [Effect](_effect_effect_.effect.md)[]

• set **effects**(`effects`: [Effect](_effect_effect_.effect.md)[]): void

*Defined in [src/hue-stream.ts:241](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L241)*

The effects used in the mixer

#### Parameters:

Name | Type |
------ | ------ |
`effects` | [Effect](_effect_effect_.effect.md)[] |

**Returns:** void

___

### green

• get **green**(): number

*Defined in [src/hue-stream.ts:283](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L283)*

Average green value of the lights

**Returns:** number

• set **green**(`green`: number): void

*Defined in [src/hue-stream.ts:276](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L276)*

Sets the green value for all lights

#### Parameters:

Name | Type |
------ | ------ |
`green` | number |

**Returns:** void

___

### red

• get **red**(): number

*Defined in [src/hue-stream.ts:269](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L269)*

Average red value of the lights

**Returns:** number

• set **red**(`red`: number): void

*Defined in [src/hue-stream.ts:262](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L262)*

Sets the red value for all lights

#### Parameters:

Name | Type |
------ | ------ |
`red` | number |

**Returns:** void

## Methods

### on

▸ **on**(`event`: \"connected\", `cb`: Function): this

*Overrides void*

*Defined in [src/hue-stream.ts:24](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"connected\" |
`cb` | Function |

**Returns:** this

▸ **on**(`event`: \"error\", `cb`: Function): this

*Overrides void*

*Defined in [src/hue-stream.ts:25](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L25)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`cb` | Function |

**Returns:** this

▸ **on**(`event`: \"timeout\", `cb`: Function): this

*Overrides void*

*Defined in [src/hue-stream.ts:26](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L26)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"timeout\" |
`cb` | Function |

**Returns:** this

▸ **on**(`event`: \"closed\", `cb`: Function): this

*Overrides void*

*Defined in [src/hue-stream.ts:27](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L27)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"closed\" |
`cb` | Function |

**Returns:** this

▸ **on**(`event`: string, `cb`: Function): this

*Overrides void*

*Defined in [src/hue-stream.ts:28](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L28)*

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

*Defined in [src/hue-stream.ts:30](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"connected\" |
`cb` | Function |

**Returns:** this

▸ **once**(`event`: \"error\", `cb`: Function): this

*Overrides void*

*Defined in [src/hue-stream.ts:31](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`cb` | Function |

**Returns:** this

▸ **once**(`event`: \"timeout\", `cb`: Function): this

*Overrides void*

*Defined in [src/hue-stream.ts:32](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L32)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"timeout\" |
`cb` | Function |

**Returns:** this

▸ **once**(`event`: \"closed\", `cb`: Function): this

*Overrides void*

*Defined in [src/hue-stream.ts:33](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L33)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"closed\" |
`cb` | Function |

**Returns:** this

▸ **once**(`event`: string, `cb`: Function): this

*Overrides void*

*Defined in [src/hue-stream.ts:34](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L34)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string |
`cb` | Function |

**Returns:** this

___

### render

▸ **render**(): Promise\<void>

*Defined in [src/hue-stream.ts:209](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L209)*

Renders the mixer by one

**Returns:** Promise\<void>

___

### renderSingleFrame

▸ **renderSingleFrame**(): Promise\<void>

*Defined in [src/hue-stream.ts:202](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L202)*

Renders a single frame in the session.

**Returns:** Promise\<void>

___

### start

▸ **start**(): Promise\<void>

*Defined in [src/hue-stream.ts:182](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L182)*

Starts the Entertainment session.

**Returns:** Promise\<void>

___

### stop

▸ **stop**(): Promise\<void>

*Defined in [src/hue-stream.ts:193](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L193)*

Stops the Entertainment session.

**Returns:** Promise\<void>

___

### createGroup

▸ `Static`**createGroup**(`__namedParameters`: { host: string ; username: string  }, `lights`: (string \| number)[], `name?`: string): Promise\<string>

*Defined in [src/hue-stream.ts:101](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L101)*

Creates an entertainment group with the given lights and name

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`__namedParameters` | { host: string ; username: string  } | - | - |
`lights` | (string \| number)[] | - | light IDs to include in the group |
`name` | string | "Phea.JS Group" | group name  |

**Returns:** Promise\<string>

___

### discover

▸ `Static`**discover**(`upnp?`: boolean): Promise\<string[]>

*Defined in [src/hue-stream.ts:55](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L55)*

Discovers all bridges on your LAN

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`upnp` | boolean | true | whether this should be a upnp search or use the Hue discovery API  |

**Returns:** Promise\<string[]>

___

### lightIDs

▸ `Static`**lightIDs**(`auth`: [DTLSConnectionOptions](../interfaces/_dtls_.dtlsconnectionoptions.md)): Promise\<string[]>

*Defined in [src/hue-stream.ts:89](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L89)*

Returns an array of light IDs from the Hue API

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`auth` | [DTLSConnectionOptions](../interfaces/_dtls_.dtlsconnectionoptions.md) | connection options  |

**Returns:** Promise\<string[]>

___

### lights

▸ `Static`**lights**(`__namedParameters`: { host: string ; username: string  }): Promise\<HueLight[]>

*Defined in [src/hue-stream.ts:79](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L79)*

Returns an array of light objects from the Hue API

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { host: string ; username: string  } |

**Returns:** Promise\<HueLight[]>

___

### make

▸ `Static`**make**(`options`: Partial\<[HueStreamOptions](../interfaces/_hue_stream_.huestreamoptions.md)>): Promise\<[HueStream](_hue_stream_.huestream.md)>

*Defined in [src/hue-stream.ts:120](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L120)*

Crafts a HueStream instance with the given options.

You can omit the lights and engine parameters and have them made for you,

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | Partial\<[HueStreamOptions](../interfaces/_hue_stream_.huestreamoptions.md)> |   |

**Returns:** Promise\<[HueStream](_hue_stream_.huestream.md)>

___

### register

▸ `Static`**register**(`ip`: string): Promise\<{ psk: string ; username: string  }>

*Defined in [src/hue-stream.ts:65](https://github.com/EricRabil/phea.js/blob/66a21c7/src/hue-stream.ts#L65)*

Registers with the given Bridge IP

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ip` | string | ip to register with  |

**Returns:** Promise\<{ psk: string ; username: string  }>
