import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { IReadIfNoneMatch as ca_uhn_fhir_rest_gclient_IReadIfNoneMatch } from "./IReadIfNoneMatch";
import { IClientExecutable as ca_uhn_fhir_rest_gclient_IClientExecutable } from "./IClientExecutable";
import { EncodingEnum as ca_uhn_fhir_rest_api_EncodingEnum } from "./../api/EncodingEnum";
import { CacheControlDirective as ca_uhn_fhir_rest_api_CacheControlDirective } from "./../api/CacheControlDirective";
import { SummaryEnum as ca_uhn_fhir_rest_api_SummaryEnum } from "./../api/SummaryEnum";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../java/util/List";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
/**
 * This class just defines types, you should import {@link IReadExecutable} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IReadExecutableClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IReadIfNoneMatch'
     */
    ifVersionMatches(var0: string | null): Promise<ca_uhn_fhir_rest_gclient_IReadIfNoneMatch | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IReadIfNoneMatch'
     */
    ifVersionMatchesSync(var0: string | null): ca_uhn_fhir_rest_gclient_IReadIfNoneMatch | null;
    /**
     * @return original return type: 'java.lang.Object'
     */
    execute(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    executeSync(): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    accept(var0: string | null): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    acceptSync(var0: string | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    encoded(var0: ca_uhn_fhir_rest_api_EncodingEnum | null): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    encodedSync(var0: ca_uhn_fhir_rest_api_EncodingEnum | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.CacheControlDirective'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    cacheControl(var0: ca_uhn_fhir_rest_api_CacheControlDirective | null): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.CacheControlDirective'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    cacheControlSync(var0: ca_uhn_fhir_rest_api_CacheControlDirective | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    elementsSubset(var0: (string | null)[] | null): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    elementsSubsetSync(var0: (string | null)[] | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.SummaryEnum'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    summaryMode(var0: ca_uhn_fhir_rest_api_SummaryEnum | null): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.SummaryEnum'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    summaryModeSync(var0: ca_uhn_fhir_rest_api_SummaryEnum | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    encodedXml(): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    encodedXmlSync(): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    preferResponseType(var0: java_lang_Class | null): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    preferResponseTypeSync(var0: java_lang_Class | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    encodedJson(): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    encodedJsonSync(): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    prettyPrint(): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    prettyPrintSync(): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    preferResponseTypes(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    preferResponseTypesSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    withAdditionalHeader(var0: string | null, var1: string | null): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    withAdditionalHeaderSync(var0: string | null, var1: string | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    andLogRequestAndResponse(var0: java_lang_Boolean | boolean): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    andLogRequestAndResponseSync(var0: java_lang_Boolean | boolean): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIReadExecutableProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IReadExecutableInterface {
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IReadIfNoneMatch'
     */
    ifVersionMatches(var0: string | null): ca_uhn_fhir_rest_gclient_IReadIfNoneMatch | null;
    /**
     * @return original return type: 'java.lang.Object'
     */
    execute(): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    accept(var0: string | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    encoded(var0: ca_uhn_fhir_rest_api_EncodingEnum | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.CacheControlDirective'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    cacheControl(var0: ca_uhn_fhir_rest_api_CacheControlDirective | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    elementsSubset(var0: (string | null)[] | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.SummaryEnum'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    summaryMode(var0: ca_uhn_fhir_rest_api_SummaryEnum | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    encodedXml(): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    preferResponseType(var0: java_lang_Class | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    encodedJson(): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    prettyPrint(): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    preferResponseTypes(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    withAdditionalHeader(var0: string | null, var1: string | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    andLogRequestAndResponse(var0: java_lang_Boolean | boolean): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
}
/**
 * Create a proxy for the {@link IReadExecutable} interface.
 * All required methods in {@link IReadExecutableInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIReadExecutableProxy(methods: IReadExecutableInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IReadExecutableInterface>;
declare const IReadExecutable_base: typeof IReadExecutableClass;
/**
 * Class ca.uhn.fhir.rest.gclient.IReadExecutable.
 *
 * This actually imports the java class for further use.
 * The class {@link IReadExecutableClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IReadExecutable extends IReadExecutable_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IReadExecutable;
//# sourceMappingURL=IReadExecutable.d.ts.map