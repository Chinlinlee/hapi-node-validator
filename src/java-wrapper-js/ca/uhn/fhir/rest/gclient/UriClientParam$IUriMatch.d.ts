import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { ICriterion as ca_uhn_fhir_rest_gclient_ICriterion } from "./ICriterion";
import { StringDt as ca_uhn_fhir_model_primitive_StringDt } from "./../../model/primitive/StringDt";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../java/util/List";
/**
 * This class just defines types, you should import {@link UriClientParam$IUriMatch} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class UriClientParam$IUriMatchClass extends JavaClass {
    /**
     * @param var0 original type: 'ca.uhn.fhir.model.primitive.StringDt'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     */
    value(var0: ca_uhn_fhir_model_primitive_StringDt | null): Promise<ca_uhn_fhir_rest_gclient_ICriterion | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.model.primitive.StringDt'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     */
    valueSync(var0: ca_uhn_fhir_model_primitive_StringDt | null): ca_uhn_fhir_rest_gclient_ICriterion | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     */
    value(var0: string | null): Promise<ca_uhn_fhir_rest_gclient_ICriterion | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     */
    valueSync(var0: string | null): ca_uhn_fhir_rest_gclient_ICriterion | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     */
    values(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<ca_uhn_fhir_rest_gclient_ICriterion | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     */
    valuesSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): ca_uhn_fhir_rest_gclient_ICriterion | null;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     */
    values(var0: (string | null)[] | null): Promise<ca_uhn_fhir_rest_gclient_ICriterion | null>;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     */
    valuesSync(var0: (string | null)[] | null): ca_uhn_fhir_rest_gclient_ICriterion | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createUriClientParam$IUriMatchProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface UriClientParam$IUriMatchInterface {
    /**
     * @param var0 original type: 'ca.uhn.fhir.model.primitive.StringDt'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     */
    value(var0: ca_uhn_fhir_model_primitive_StringDt | null): ca_uhn_fhir_rest_gclient_ICriterion | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     */
    value(var0: string | null): ca_uhn_fhir_rest_gclient_ICriterion | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     */
    values(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): ca_uhn_fhir_rest_gclient_ICriterion | null;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     */
    values(var0: (string | null)[] | null): ca_uhn_fhir_rest_gclient_ICriterion | null;
}
/**
 * Create a proxy for the {@link UriClientParam$IUriMatch} interface.
 * All required methods in {@link UriClientParam$IUriMatchInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createUriClientParam$IUriMatchProxy(methods: UriClientParam$IUriMatchInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<UriClientParam$IUriMatchInterface>;
declare const UriClientParam$IUriMatch_base: typeof UriClientParam$IUriMatchClass;
/**
 * Class ca.uhn.fhir.rest.gclient.UriClientParam$IUriMatch.
 *
 * This actually imports the java class for further use.
 * The class {@link UriClientParam$IUriMatchClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class UriClientParam$IUriMatch extends UriClientParam$IUriMatch_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default UriClientParam$IUriMatch;
//# sourceMappingURL=UriClientParam$IUriMatch.d.ts.map