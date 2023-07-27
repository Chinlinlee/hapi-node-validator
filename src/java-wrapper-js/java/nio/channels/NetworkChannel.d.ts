import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { SocketAddress as java_net_SocketAddress } from "./../../net/SocketAddress";
import { Set as java_util_Set } from "./../../util/Set";
import { SocketOption as java_net_SocketOption, SocketOptionInterface as java_net_SocketOptionInterface } from "./../../net/SocketOption";
/**
 * This class just defines types, you should import {@link NetworkChannel} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class NetworkChannelClass extends JavaClass {
    /**
     * @param var0 original type: 'java.net.SocketAddress'
     * @return original return type: 'java.nio.channels.NetworkChannel'
     */
    bind(var0: java_net_SocketAddress | null): Promise<NetworkChannel | null>;
    /**
     * @param var0 original type: 'java.net.SocketAddress'
     * @return original return type: 'java.nio.channels.NetworkChannel'
     */
    bindSync(var0: java_net_SocketAddress | null): NetworkChannel | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    supportedOptions(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    supportedOptionsSync(): java_util_Set | null;
    /**
     * @return original return type: 'java.net.SocketAddress'
     */
    getLocalAddress(): Promise<java_net_SocketAddress | null>;
    /**
     * @return original return type: 'java.net.SocketAddress'
     */
    getLocalAddressSync(): java_net_SocketAddress | null;
    /**
     * @param var0 original type: 'java.net.SocketOption'
     * @return original return type: 'java.lang.Object'
     */
    getOption(var0: java_net_SocketOption | JavaInterfaceProxy<java_net_SocketOptionInterface> | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.net.SocketOption'
     * @return original return type: 'java.lang.Object'
     */
    getOptionSync(var0: java_net_SocketOption | JavaInterfaceProxy<java_net_SocketOptionInterface> | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.net.SocketOption'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.nio.channels.NetworkChannel'
     */
    setOption(var0: java_net_SocketOption | JavaInterfaceProxy<java_net_SocketOptionInterface> | null, var1: BasicOrJavaType | null): Promise<NetworkChannel | null>;
    /**
     * @param var0 original type: 'java.net.SocketOption'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.nio.channels.NetworkChannel'
     */
    setOptionSync(var0: java_net_SocketOption | JavaInterfaceProxy<java_net_SocketOptionInterface> | null, var1: BasicOrJavaType | null): NetworkChannel | null;
    /**
     * @return original return type: 'boolean'
     */
    isOpen(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isOpenSync(): boolean;
    /**
     * @return original return type: 'void'
     */
    close(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    closeSync(): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createNetworkChannelProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface NetworkChannelInterface {
    /**
     * @param var0 original type: 'java.net.SocketAddress'
     * @return original return type: 'java.nio.channels.NetworkChannel'
     */
    bind(var0: java_net_SocketAddress | null): NetworkChannel | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    supportedOptions(): java_util_Set | null;
    /**
     * @return original return type: 'java.net.SocketAddress'
     */
    getLocalAddress(): java_net_SocketAddress | null;
    /**
     * @param var0 original type: 'java.net.SocketOption'
     * @return original return type: 'java.lang.Object'
     */
    getOption(var0: java_net_SocketOption | JavaInterfaceProxy<java_net_SocketOptionInterface> | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.net.SocketOption'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.nio.channels.NetworkChannel'
     */
    setOption(var0: java_net_SocketOption | JavaInterfaceProxy<java_net_SocketOptionInterface> | null, var1: BasicOrJavaType | null): NetworkChannel | null;
    /**
     * @return original return type: 'boolean'
     */
    isOpen(): boolean;
    /**
     * @return original return type: 'void'
     */
    close(): void;
}
/**
 * Create a proxy for the {@link NetworkChannel} interface.
 * All required methods in {@link NetworkChannelInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createNetworkChannelProxy(methods: NetworkChannelInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<NetworkChannelInterface>;
declare const NetworkChannel_base: typeof NetworkChannelClass;
/**
 * Class java.nio.channels.NetworkChannel.
 *
 * This actually imports the java class for further use.
 * The class {@link NetworkChannelClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class NetworkChannel extends NetworkChannel_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default NetworkChannel;
//# sourceMappingURL=NetworkChannel.d.ts.map