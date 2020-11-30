declare module "@nodertc/dtls" {
    import { Duplex } from "stream";
    
    export interface Socket extends Duplex {
        /**
         * Set MTU (minimal transfer unit) for this socket, 1420 bytes maximal.
         * @param mtu new mtu
         */
        setMTU(mtu: number): void;
        /**
         * Return MTU (minimal transfer unit) for this socket, 1200 bytes by default.
         */
        getMTU(): number;
        /**
         * Sets the socket to timeout after timeout milliseconds of inactivity on the socket. By default dtls.Socket do not have a timeout.
         * The optional callback parameter will be added as a one-time listener for the 'timeout' event.
         * @param timeout timeout duration in ms
         * @param callback called if the timeout happens
         */
        setTimeout(timeout: number, callback?: Function): void;
        /**
         * Close socket, stop listening for socket. Do not emit data events anymore.
         */
        close(): void;
        /**
         * Get a string that contains the selected ALPN protocol.
         */
        alpnProtocol: string;

        on(event: "connect", cb: () => unknown): this;
        on(event: "timeout", cb: () => unknown): this;
        on(event: "data", cb: (data: Buffer) => unknown): this;
        on(event: string, cb: Function): this;

        once(event: "connect", cb: () => unknown): this;
        once(event: "timeout", cb: () => unknown): this;
        once(event: string, cb: Function): this;
    }

    export interface Options {
        extendedMasterSecret?: boolean;
        checkServerIdentity?: (cert: unknown) => boolean;
        certificate?: Buffer;
        certificatePrivateKey?: Buffer;
        maxHandshakeRetransmissions?: number;
        alpn?: string | string[];
        pskIdentity?: string | Buffer;
        pskSecret?: string | Buffer;
        ignorePSKIdentityHint?: boolean;
        cipherSuites?: (number | string)[];

        type: "udp4";
        remotePort: number;
        remoteAddress: string;
    }

    export function connect(options: Options, cb?: () => void): Socket;
}