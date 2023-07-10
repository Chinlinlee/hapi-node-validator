/// <reference types="node" />
import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Include as ca_uhn_fhir_model_api_Include } from "./../../../../../../ca/uhn/fhir/model/api/Include";
import { Set as java_util_Set, SetInterface as java_util_SetInterface } from "./../../../../../../java/util/Set";
import { IPrimitiveType as org_hl7_fhir_instance_model_api_IPrimitiveType } from "./IPrimitiveType";
import { IBaseResource as org_hl7_fhir_instance_model_api_IBaseResource } from "./IBaseResource";
import { IIdType as org_hl7_fhir_instance_model_api_IIdType, IIdTypeInterface as org_hl7_fhir_instance_model_api_IIdTypeInterface } from "./IIdType";
import { IBaseMetaType as org_hl7_fhir_instance_model_api_IBaseMetaType } from "./IBaseMetaType";
import { FhirVersionEnum as ca_uhn_fhir_context_FhirVersionEnum } from "./../../../../../../ca/uhn/fhir/context/FhirVersionEnum";
import { List as java_util_List } from "./../../../../../../java/util/List";
/**
 * This class just defines types, you should import {@link IBaseBinary} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IBaseBinaryClass extends JavaClass {
    /**
     * Original type: 'ca.uhn.fhir.model.api.Include'
     */
    static readonly INCLUDE_ALL: ca_uhn_fhir_model_api_Include | null;
    /**
     * Original type: 'java.util.Set'
     */
    static readonly WILDCARD_ALL_SET: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null;
    /**
     * @return original return type: 'byte[]'
     */
    getContent(): Promise<Buffer | null>;
    /**
     * @return original return type: 'byte[]'
     */
    getContentSync(): Buffer | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IPrimitiveType'
     */
    getContentElement(): Promise<org_hl7_fhir_instance_model_api_IPrimitiveType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IPrimitiveType'
     */
    getContentElementSync(): org_hl7_fhir_instance_model_api_IPrimitiveType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseBinary'
     */
    setContentAsBase64(var0: string | null): Promise<IBaseBinary | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseBinary'
     */
    setContentAsBase64Sync(var0: string | null): IBaseBinary | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getContentAsBase64(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getContentAsBase64Sync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseBinary'
     */
    setContentType(var0: string | null): Promise<IBaseBinary | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseBinary'
     */
    setContentTypeSync(var0: string | null): IBaseBinary | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getContentType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getContentTypeSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    hasData(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDataSync(): boolean;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseBinary'
     */
    setContent(var0: Buffer | null): Promise<IBaseBinary | null>;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseBinary'
     */
    setContentSync(var0: Buffer | null): IBaseBinary | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     */
    setId(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): Promise<org_hl7_fhir_instance_model_api_IBaseResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     */
    setIdSync(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): org_hl7_fhir_instance_model_api_IBaseResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     */
    setId(var0: string | null): Promise<org_hl7_fhir_instance_model_api_IBaseResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     */
    setIdSync(var0: string | null): org_hl7_fhir_instance_model_api_IBaseResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IIdType'
     */
    getIdElement(): Promise<org_hl7_fhir_instance_model_api_IIdType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IIdType'
     */
    getIdElementSync(): org_hl7_fhir_instance_model_api_IIdType | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseMetaType'
     */
    getMeta(): Promise<org_hl7_fhir_instance_model_api_IBaseMetaType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseMetaType'
     */
    getMetaSync(): org_hl7_fhir_instance_model_api_IBaseMetaType | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirVersionEnum'
     */
    getStructureFhirVersionEnum(): Promise<ca_uhn_fhir_context_FhirVersionEnum | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirVersionEnum'
     */
    getStructureFhirVersionEnumSync(): ca_uhn_fhir_context_FhirVersionEnum | null;
    /**
     * @return original return type: 'boolean'
     */
    isEmpty(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isEmptySync(): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPre(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPreSync(): java_util_List | null;
    /**
     * @return original return type: 'boolean'
     */
    hasFormatComment(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasFormatCommentSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirTypeSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getUserData(var0: string | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getUserDataSync(var0: string | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    setUserData(var0: string | null, var1: BasicOrJavaType | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    setUserDataSync(var0: string | null, var1: BasicOrJavaType | null): void;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPost(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPostSync(): java_util_List | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIBaseBinaryProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IBaseBinaryInterface {
    /**
     * @return original return type: 'byte[]'
     */
    getContent(): Buffer | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IPrimitiveType'
     */
    getContentElement(): org_hl7_fhir_instance_model_api_IPrimitiveType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseBinary'
     */
    setContentAsBase64(var0: string | null): IBaseBinary | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getContentAsBase64(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseBinary'
     */
    setContentType(var0: string | null): IBaseBinary | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getContentType(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    hasData?(): boolean;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseBinary'
     */
    setContent(var0: Buffer | null): IBaseBinary | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     */
    setId(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): org_hl7_fhir_instance_model_api_IBaseResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     */
    setId(var0: string | null): org_hl7_fhir_instance_model_api_IBaseResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IIdType'
     */
    getIdElement(): org_hl7_fhir_instance_model_api_IIdType | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseMetaType'
     */
    getMeta(): org_hl7_fhir_instance_model_api_IBaseMetaType | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirVersionEnum'
     */
    getStructureFhirVersionEnum(): ca_uhn_fhir_context_FhirVersionEnum | null;
    /**
     * @return original return type: 'boolean'
     */
    isEmpty(): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPre(): java_util_List | null;
    /**
     * @return original return type: 'boolean'
     */
    hasFormatComment(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirType?(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getUserData(var0: string | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    setUserData(var0: string | null, var1: BasicOrJavaType | null): void;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPost(): java_util_List | null;
}
/**
 * Create a proxy for the {@link IBaseBinary} interface.
 * All required methods in {@link IBaseBinaryInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIBaseBinaryProxy(methods: IBaseBinaryInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IBaseBinaryInterface>;
declare const IBaseBinary_base: typeof IBaseBinaryClass;
/**
 * Class org.hl7.fhir.instance.model.api.IBaseBinary.
 *
 * This actually imports the java class for further use.
 * The class {@link IBaseBinaryClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IBaseBinary extends IBaseBinary_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IBaseBinary;
//# sourceMappingURL=IBaseBinary.d.ts.map