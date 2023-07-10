import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Set as java_util_Set, SetInterface as java_util_SetInterface } from "./../../../../java/util/Set";
import { Include as ca_uhn_fhir_model_api_Include } from "./../model/api/Include";
import { IBaseReference as org_hl7_fhir_instance_model_api_IBaseReference, IBaseReferenceInterface as org_hl7_fhir_instance_model_api_IBaseReferenceInterface } from "./../../../../org/hl7/fhir/instance/model/api/IBaseReference";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
import { FhirContext as ca_uhn_fhir_context_FhirContext } from "./../context/FhirContext";
import { IBaseResource as org_hl7_fhir_instance_model_api_IBaseResource, IBaseResourceInterface as org_hl7_fhir_instance_model_api_IBaseResourceInterface } from "./../../../../org/hl7/fhir/instance/model/api/IBaseResource";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../java/util/List";
/**
 * This class just defines types, you should import {@link ResourceReferenceInfo} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ResourceReferenceInfoClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    getName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNameSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @param var0 original type: 'java.util.Set'
     * @return original return type: 'boolean'
     */
    matchesIncludeSet(var0: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.Set'
     * @return original return type: 'boolean'
     */
    matchesIncludeSetSync(var0: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null): boolean;
    /**
     * @param var0 original type: 'ca.uhn.fhir.model.api.Include'
     * @return original return type: 'boolean'
     */
    matchesInclude(var0: ca_uhn_fhir_model_api_Include | null): Promise<boolean>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.model.api.Include'
     * @return original return type: 'boolean'
     */
    matchesIncludeSync(var0: ca_uhn_fhir_model_api_Include | null): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseReference'
     */
    getResourceReference(): Promise<org_hl7_fhir_instance_model_api_IBaseReference | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseReference'
     */
    getResourceReferenceSync(): org_hl7_fhir_instance_model_api_IBaseReference | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): void;
    /**
     * @return original return type: 'void'
     */
    wait(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    waitSync(): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equals(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equalsSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.FhirContext'
     * @param var1 original type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     * @param var2 original type: 'java.util.List'
     * @param var3 original type: 'org.hl7.fhir.instance.model.api.IBaseReference'
     * @return original return type: 'ca.uhn.fhir.util.ResourceReferenceInfo'
     */
    static newInstanceAsync(var0: ca_uhn_fhir_context_FhirContext | null, var1: org_hl7_fhir_instance_model_api_IBaseResource | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseResourceInterface> | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var3: org_hl7_fhir_instance_model_api_IBaseReference | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseReferenceInterface> | null): Promise<ResourceReferenceInfo>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.FhirContext'
     * @param var1 original type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     * @param var2 original type: 'java.util.List'
     * @param var3 original type: 'org.hl7.fhir.instance.model.api.IBaseReference'
     */
    constructor(var0: ca_uhn_fhir_context_FhirContext | null, var1: org_hl7_fhir_instance_model_api_IBaseResource | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseResourceInterface> | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var3: org_hl7_fhir_instance_model_api_IBaseReference | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseReferenceInterface> | null);
}
declare const ResourceReferenceInfo_base: typeof ResourceReferenceInfoClass;
/**
 * Class ca.uhn.fhir.util.ResourceReferenceInfo.
 *
 * This actually imports the java class for further use.
 * The class {@link ResourceReferenceInfoClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ResourceReferenceInfo extends ResourceReferenceInfo_base {
}
export default ResourceReferenceInfo;
//# sourceMappingURL=ResourceReferenceInfo.d.ts.map