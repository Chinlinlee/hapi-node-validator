import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { IClientExecutable as ca_uhn_fhir_rest_gclient_IClientExecutable } from "./IClientExecutable";
import { IIdType as org_hl7_fhir_instance_model_api_IIdType, IIdTypeInterface as org_hl7_fhir_instance_model_api_IIdTypeInterface } from "./../../../../../org/hl7/fhir/instance/model/api/IIdType";
/**
 * This class just defines types, you should import {@link IMetaGetUnsourced} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IMetaGetUnsourcedClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    fromType(var0: string | null): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    fromTypeSync(var0: string | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    fromServer(): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    fromServerSync(): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    fromResource(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    fromResourceSync(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIMetaGetUnsourcedProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IMetaGetUnsourcedInterface {
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    fromType(var0: string | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    fromServer(): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    fromResource(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
}
/**
 * Create a proxy for the {@link IMetaGetUnsourced} interface.
 * All required methods in {@link IMetaGetUnsourcedInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIMetaGetUnsourcedProxy(methods: IMetaGetUnsourcedInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IMetaGetUnsourcedInterface>;
declare const IMetaGetUnsourced_base: typeof IMetaGetUnsourcedClass;
/**
 * Class ca.uhn.fhir.rest.gclient.IMetaGetUnsourced.
 *
 * This actually imports the java class for further use.
 * The class {@link IMetaGetUnsourcedClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IMetaGetUnsourced extends IMetaGetUnsourced_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IMetaGetUnsourced;
//# sourceMappingURL=IMetaGetUnsourced.d.ts.map