import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { FhirVersionEnum as ca_uhn_fhir_context_FhirVersionEnum } from "./../../context/FhirVersionEnum";
import { IPrimitiveType as org_hl7_fhir_instance_model_api_IPrimitiveType } from "./../../../../../org/hl7/fhir/instance/model/api/IPrimitiveType";
import { IBaseResource as org_hl7_fhir_instance_model_api_IBaseResource, IBaseResourceInterface as org_hl7_fhir_instance_model_api_IBaseResourceInterface } from "./../../../../../org/hl7/fhir/instance/model/api/IBaseResource";
import { IVersionSpecificBundleFactory as ca_uhn_fhir_rest_api_IVersionSpecificBundleFactory } from "./../../rest/api/IVersionSpecificBundleFactory";
import { FhirContext as ca_uhn_fhir_context_FhirContext } from "./../../context/FhirContext";
import { IFhirPath as ca_uhn_fhir_fhirpath_IFhirPath } from "./../../fhirpath/IFhirPath";
import { InputStream as java_io_InputStream } from "./../../../../../java/io/InputStream";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { RuntimeResourceDefinition as ca_uhn_fhir_context_RuntimeResourceDefinition } from "./../../context/RuntimeResourceDefinition";
import { IBase as org_hl7_fhir_instance_model_api_IBase } from "./../../../../../org/hl7/fhir/instance/model/api/IBase";
import { IIdType as org_hl7_fhir_instance_model_api_IIdType } from "./../../../../../org/hl7/fhir/instance/model/api/IIdType";
/**
 * This class just defines types, you should import {@link IFhirVersion} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IFhirVersionClass extends JavaClass {
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirVersionEnum'
     */
    getVersion(): Promise<ca_uhn_fhir_context_FhirVersionEnum | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirVersionEnum'
     */
    getVersionSync(): ca_uhn_fhir_context_FhirVersionEnum | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IPrimitiveType'
     */
    getLastUpdated(var0: org_hl7_fhir_instance_model_api_IBaseResource | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseResourceInterface> | null): Promise<org_hl7_fhir_instance_model_api_IPrimitiveType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IPrimitiveType'
     */
    getLastUpdatedSync(var0: org_hl7_fhir_instance_model_api_IBaseResource | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseResourceInterface> | null): org_hl7_fhir_instance_model_api_IPrimitiveType | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.FhirContext'
     * @return original return type: 'ca.uhn.fhir.rest.api.IVersionSpecificBundleFactory'
     */
    newBundleFactory(var0: ca_uhn_fhir_context_FhirContext | null): Promise<ca_uhn_fhir_rest_api_IVersionSpecificBundleFactory | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.FhirContext'
     * @return original return type: 'ca.uhn.fhir.rest.api.IVersionSpecificBundleFactory'
     */
    newBundleFactorySync(var0: ca_uhn_fhir_context_FhirContext | null): ca_uhn_fhir_rest_api_IVersionSpecificBundleFactory | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.FhirContext'
     * @return original return type: 'ca.uhn.fhir.fhirpath.IFhirPath'
     */
    createFhirPathExecutor(var0: ca_uhn_fhir_context_FhirContext | null): Promise<ca_uhn_fhir_fhirpath_IFhirPath | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.FhirContext'
     * @return original return type: 'ca.uhn.fhir.fhirpath.IFhirPath'
     */
    createFhirPathExecutorSync(var0: ca_uhn_fhir_context_FhirContext | null): ca_uhn_fhir_fhirpath_IFhirPath | null;
    /**
     * @return original return type: 'java.io.InputStream'
     */
    getFhirVersionPropertiesFile(): Promise<java_io_InputStream | null>;
    /**
     * @return original return type: 'java.io.InputStream'
     */
    getFhirVersionPropertiesFileSync(): java_io_InputStream | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPathToSchemaDefinitions(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPathToSchemaDefinitionsSync(): string | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getResourceReferenceType(): Promise<java_lang_Class | null>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getResourceReferenceTypeSync(): java_lang_Class | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.RuntimeResourceDefinition'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     */
    generateProfile(var0: ca_uhn_fhir_context_RuntimeResourceDefinition | null, var1: string | null): Promise<org_hl7_fhir_instance_model_api_IBaseResource | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.RuntimeResourceDefinition'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     */
    generateProfileSync(var0: ca_uhn_fhir_context_RuntimeResourceDefinition | null, var1: string | null): org_hl7_fhir_instance_model_api_IBaseResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBase'
     */
    newCodingDt(): Promise<org_hl7_fhir_instance_model_api_IBase | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBase'
     */
    newCodingDtSync(): org_hl7_fhir_instance_model_api_IBase | null;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getServerVersion(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getServerVersionSync(): BasicOrJavaType | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IIdType'
     */
    newIdType(): Promise<org_hl7_fhir_instance_model_api_IIdType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IIdType'
     */
    newIdTypeSync(): org_hl7_fhir_instance_model_api_IIdType | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getContainedType(): Promise<java_lang_Class | null>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getContainedTypeSync(): java_lang_Class | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIFhirVersionProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IFhirVersionInterface {
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirVersionEnum'
     */
    getVersion(): ca_uhn_fhir_context_FhirVersionEnum | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IPrimitiveType'
     */
    getLastUpdated(var0: org_hl7_fhir_instance_model_api_IBaseResource | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseResourceInterface> | null): org_hl7_fhir_instance_model_api_IPrimitiveType | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.FhirContext'
     * @return original return type: 'ca.uhn.fhir.rest.api.IVersionSpecificBundleFactory'
     */
    newBundleFactory(var0: ca_uhn_fhir_context_FhirContext | null): ca_uhn_fhir_rest_api_IVersionSpecificBundleFactory | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.FhirContext'
     * @return original return type: 'ca.uhn.fhir.fhirpath.IFhirPath'
     */
    createFhirPathExecutor(var0: ca_uhn_fhir_context_FhirContext | null): ca_uhn_fhir_fhirpath_IFhirPath | null;
    /**
     * @return original return type: 'java.io.InputStream'
     */
    getFhirVersionPropertiesFile(): java_io_InputStream | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPathToSchemaDefinitions(): string | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getResourceReferenceType(): java_lang_Class | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.RuntimeResourceDefinition'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     */
    generateProfile(var0: ca_uhn_fhir_context_RuntimeResourceDefinition | null, var1: string | null): org_hl7_fhir_instance_model_api_IBaseResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBase'
     */
    newCodingDt(): org_hl7_fhir_instance_model_api_IBase | null;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getServerVersion(): BasicOrJavaType | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IIdType'
     */
    newIdType(): org_hl7_fhir_instance_model_api_IIdType | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getContainedType(): java_lang_Class | null;
}
/**
 * Create a proxy for the {@link IFhirVersion} interface.
 * All required methods in {@link IFhirVersionInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIFhirVersionProxy(methods: IFhirVersionInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IFhirVersionInterface>;
declare const IFhirVersion_base: typeof IFhirVersionClass;
/**
 * Class ca.uhn.fhir.model.api.IFhirVersion.
 *
 * This actually imports the java class for further use.
 * The class {@link IFhirVersionClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IFhirVersion extends IFhirVersion_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IFhirVersion;
//# sourceMappingURL=IFhirVersion.d.ts.map