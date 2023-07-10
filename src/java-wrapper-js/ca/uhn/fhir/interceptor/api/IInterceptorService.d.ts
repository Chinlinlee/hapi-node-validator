import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Pointcut as ca_uhn_fhir_interceptor_api_Pointcut } from "./Pointcut";
import { IAnonymousInterceptor as ca_uhn_fhir_interceptor_api_IAnonymousInterceptor, IAnonymousInterceptorInterface as ca_uhn_fhir_interceptor_api_IAnonymousInterceptorInterface } from "./IAnonymousInterceptor";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Collection as java_util_Collection, CollectionInterface as java_util_CollectionInterface } from "./../../../../../java/util/Collection";
import { Predicate as java_util_function_Predicate, PredicateInterface as java_util_function_PredicateInterface } from "./../../../../../java/util/function/Predicate";
import { List as java_util_List } from "./../../../../../java/util/List";
import { IPointcut as ca_uhn_fhir_interceptor_api_IPointcut, IPointcutInterface as ca_uhn_fhir_interceptor_api_IPointcutInterface } from "./IPointcut";
import { HookParams as ca_uhn_fhir_interceptor_api_HookParams } from "./HookParams";
/**
 * This class just defines types, you should import {@link IInterceptorService} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IInterceptorServiceClass extends JavaClass {
    /**
     * @param var0 original type: 'ca.uhn.fhir.interceptor.api.Pointcut'
     * @param var1 original type: 'ca.uhn.fhir.interceptor.api.IAnonymousInterceptor'
     * @return original return type: 'void'
     */
    registerAnonymousInterceptor(var0: ca_uhn_fhir_interceptor_api_Pointcut | null, var1: ca_uhn_fhir_interceptor_api_IAnonymousInterceptor | JavaInterfaceProxy<ca_uhn_fhir_interceptor_api_IAnonymousInterceptorInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.interceptor.api.Pointcut'
     * @param var1 original type: 'ca.uhn.fhir.interceptor.api.IAnonymousInterceptor'
     * @return original return type: 'void'
     */
    registerAnonymousInterceptorSync(var0: ca_uhn_fhir_interceptor_api_Pointcut | null, var1: ca_uhn_fhir_interceptor_api_IAnonymousInterceptor | JavaInterfaceProxy<ca_uhn_fhir_interceptor_api_IAnonymousInterceptorInterface> | null): void;
    /**
     * @param var0 original type: 'ca.uhn.fhir.interceptor.api.Pointcut'
     * @param var1 original type: 'int'
     * @param var2 original type: 'ca.uhn.fhir.interceptor.api.IAnonymousInterceptor'
     * @return original return type: 'void'
     */
    registerAnonymousInterceptor(var0: ca_uhn_fhir_interceptor_api_Pointcut | null, var1: java_lang_Integer | number, var2: ca_uhn_fhir_interceptor_api_IAnonymousInterceptor | JavaInterfaceProxy<ca_uhn_fhir_interceptor_api_IAnonymousInterceptorInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.interceptor.api.Pointcut'
     * @param var1 original type: 'int'
     * @param var2 original type: 'ca.uhn.fhir.interceptor.api.IAnonymousInterceptor'
     * @return original return type: 'void'
     */
    registerAnonymousInterceptorSync(var0: ca_uhn_fhir_interceptor_api_Pointcut | null, var1: java_lang_Integer | number, var2: ca_uhn_fhir_interceptor_api_IAnonymousInterceptor | JavaInterfaceProxy<ca_uhn_fhir_interceptor_api_IAnonymousInterceptorInterface> | null): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    unregisterInterceptor(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    unregisterInterceptorSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    registerInterceptor(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    registerInterceptorSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'void'
     */
    unregisterInterceptors(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'void'
     */
    unregisterInterceptorsSync(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): void;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'void'
     */
    registerInterceptors(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'void'
     */
    registerInterceptorsSync(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): void;
    /**
     * @param var0 original type: 'java.util.function.Predicate'
     * @return original return type: 'void'
     */
    unregisterInterceptorsIf(var0: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.Predicate'
     * @return original return type: 'void'
     */
    unregisterInterceptorsIfSync(var0: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): void;
    /**
     * @return original return type: 'void'
     */
    unregisterAllAnonymousInterceptors(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    unregisterAllAnonymousInterceptorsSync(): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    registerThreadLocalInterceptor(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    registerThreadLocalInterceptorSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    getAllRegisteredInterceptors(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getAllRegisteredInterceptorsSync(): java_util_List | null;
    /**
     * @return original return type: 'void'
     */
    unregisterAllInterceptors(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    unregisterAllInterceptorsSync(): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    unregisterThreadLocalInterceptor(var0: BasicOrJavaType | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    unregisterThreadLocalInterceptorSync(var0: BasicOrJavaType | null): void;
    /**
     * @param var0 original type: 'ca.uhn.fhir.interceptor.api.IPointcut'
     * @param var1 original type: 'ca.uhn.fhir.interceptor.api.HookParams'
     * @return original return type: 'java.lang.Object'
     */
    callHooksAndReturnObject(var0: ca_uhn_fhir_interceptor_api_IPointcut | JavaInterfaceProxy<ca_uhn_fhir_interceptor_api_IPointcutInterface> | null, var1: ca_uhn_fhir_interceptor_api_HookParams | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.interceptor.api.IPointcut'
     * @param var1 original type: 'ca.uhn.fhir.interceptor.api.HookParams'
     * @return original return type: 'java.lang.Object'
     */
    callHooksAndReturnObjectSync(var0: ca_uhn_fhir_interceptor_api_IPointcut | JavaInterfaceProxy<ca_uhn_fhir_interceptor_api_IPointcutInterface> | null, var1: ca_uhn_fhir_interceptor_api_HookParams | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.interceptor.api.IPointcut'
     * @return original return type: 'boolean'
     */
    hasHooks(var0: ca_uhn_fhir_interceptor_api_IPointcut | JavaInterfaceProxy<ca_uhn_fhir_interceptor_api_IPointcutInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.interceptor.api.IPointcut'
     * @return original return type: 'boolean'
     */
    hasHooksSync(var0: ca_uhn_fhir_interceptor_api_IPointcut | JavaInterfaceProxy<ca_uhn_fhir_interceptor_api_IPointcutInterface> | null): boolean;
    /**
     * @param var0 original type: 'ca.uhn.fhir.interceptor.api.IPointcut'
     * @param var1 original type: 'ca.uhn.fhir.interceptor.api.HookParams'
     * @return original return type: 'boolean'
     */
    callHooks(var0: ca_uhn_fhir_interceptor_api_IPointcut | JavaInterfaceProxy<ca_uhn_fhir_interceptor_api_IPointcutInterface> | null, var1: ca_uhn_fhir_interceptor_api_HookParams | null): Promise<boolean>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.interceptor.api.IPointcut'
     * @param var1 original type: 'ca.uhn.fhir.interceptor.api.HookParams'
     * @return original return type: 'boolean'
     */
    callHooksSync(var0: ca_uhn_fhir_interceptor_api_IPointcut | JavaInterfaceProxy<ca_uhn_fhir_interceptor_api_IPointcutInterface> | null, var1: ca_uhn_fhir_interceptor_api_HookParams | null): boolean;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIInterceptorServiceProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IInterceptorServiceInterface {
    /**
     * @param var0 original type: 'ca.uhn.fhir.interceptor.api.Pointcut'
     * @param var1 original type: 'ca.uhn.fhir.interceptor.api.IAnonymousInterceptor'
     * @return original return type: 'void'
     */
    registerAnonymousInterceptor(var0: ca_uhn_fhir_interceptor_api_Pointcut | null, var1: ca_uhn_fhir_interceptor_api_IAnonymousInterceptor | JavaInterfaceProxy<ca_uhn_fhir_interceptor_api_IAnonymousInterceptorInterface> | null): void;
    /**
     * @param var0 original type: 'ca.uhn.fhir.interceptor.api.Pointcut'
     * @param var1 original type: 'int'
     * @param var2 original type: 'ca.uhn.fhir.interceptor.api.IAnonymousInterceptor'
     * @return original return type: 'void'
     */
    registerAnonymousInterceptor(var0: ca_uhn_fhir_interceptor_api_Pointcut | null, var1: java_lang_Integer | number, var2: ca_uhn_fhir_interceptor_api_IAnonymousInterceptor | JavaInterfaceProxy<ca_uhn_fhir_interceptor_api_IAnonymousInterceptorInterface> | null): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    unregisterInterceptor(var0: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    registerInterceptor(var0: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'void'
     */
    unregisterInterceptors(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): void;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'void'
     */
    registerInterceptors(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): void;
    /**
     * @param var0 original type: 'java.util.function.Predicate'
     * @return original return type: 'void'
     */
    unregisterInterceptorsIf(var0: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): void;
    /**
     * @return original return type: 'void'
     */
    unregisterAllAnonymousInterceptors(): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    registerThreadLocalInterceptor(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    getAllRegisteredInterceptors(): java_util_List | null;
    /**
     * @return original return type: 'void'
     */
    unregisterAllInterceptors(): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    unregisterThreadLocalInterceptor(var0: BasicOrJavaType | null): void;
    /**
     * @param var0 original type: 'ca.uhn.fhir.interceptor.api.IPointcut'
     * @param var1 original type: 'ca.uhn.fhir.interceptor.api.HookParams'
     * @return original return type: 'java.lang.Object'
     */
    callHooksAndReturnObject(var0: ca_uhn_fhir_interceptor_api_IPointcut | JavaInterfaceProxy<ca_uhn_fhir_interceptor_api_IPointcutInterface> | null, var1: ca_uhn_fhir_interceptor_api_HookParams | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.interceptor.api.IPointcut'
     * @return original return type: 'boolean'
     */
    hasHooks(var0: ca_uhn_fhir_interceptor_api_IPointcut | JavaInterfaceProxy<ca_uhn_fhir_interceptor_api_IPointcutInterface> | null): boolean;
    /**
     * @param var0 original type: 'ca.uhn.fhir.interceptor.api.IPointcut'
     * @param var1 original type: 'ca.uhn.fhir.interceptor.api.HookParams'
     * @return original return type: 'boolean'
     */
    callHooks(var0: ca_uhn_fhir_interceptor_api_IPointcut | JavaInterfaceProxy<ca_uhn_fhir_interceptor_api_IPointcutInterface> | null, var1: ca_uhn_fhir_interceptor_api_HookParams | null): boolean;
}
/**
 * Create a proxy for the {@link IInterceptorService} interface.
 * All required methods in {@link IInterceptorServiceInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIInterceptorServiceProxy(methods: IInterceptorServiceInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IInterceptorServiceInterface>;
declare const IInterceptorService_base: typeof IInterceptorServiceClass;
/**
 * Class ca.uhn.fhir.interceptor.api.IInterceptorService.
 *
 * This actually imports the java class for further use.
 * The class {@link IInterceptorServiceClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IInterceptorService extends IInterceptorService_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IInterceptorService;
//# sourceMappingURL=IInterceptorService.d.ts.map