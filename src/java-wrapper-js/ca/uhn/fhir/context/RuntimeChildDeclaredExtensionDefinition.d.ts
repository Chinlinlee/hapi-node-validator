import { JavaClass, BasicOrJavaType } from "java-bridge";
import { IBase as org_hl7_fhir_instance_model_api_IBase } from "./../../../../org/hl7/fhir/instance/model/api/IBase";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
import { BaseRuntimeElementDefinition as ca_uhn_fhir_context_BaseRuntimeElementDefinition } from "./BaseRuntimeElementDefinition";
import { Set as java_util_Set } from "./../../../../java/util/Set";
import { List as java_util_List } from "./../../../../java/util/List";
import { Field as java_lang_reflect_Field } from "./../../../../java/lang/reflect/Field";
import { BaseRuntimeChildDefinition$IAccessor as ca_uhn_fhir_context_BaseRuntimeChildDefinition$IAccessor } from "./BaseRuntimeChildDefinition$IAccessor";
import { BaseRuntimeChildDefinition$IMutator as ca_uhn_fhir_context_BaseRuntimeChildDefinition$IMutator } from "./BaseRuntimeChildDefinition$IMutator";
import { BaseRuntimeChildDefinition as ca_uhn_fhir_context_BaseRuntimeChildDefinition } from "./BaseRuntimeChildDefinition";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
/**
 * This class just defines types, you should import {@link RuntimeChildDeclaredExtensionDefinition} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class RuntimeChildDeclaredExtensionDefinitionClass extends JavaClass {
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBase'
     */
    newInstance(): Promise<org_hl7_fhir_instance_model_api_IBase | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBase'
     */
    newInstanceSync(): org_hl7_fhir_instance_model_api_IBase | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.RuntimeChildDeclaredExtensionDefinition'
     */
    getChildExtensionForUrl(var0: string | null): Promise<RuntimeChildDeclaredExtensionDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.RuntimeChildDeclaredExtensionDefinition'
     */
    getChildExtensionForUrlSync(var0: string | null): RuntimeChildDeclaredExtensionDefinition | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.String'
     */
    getChildNameByDatatype(var0: java_lang_Class | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.String'
     */
    getChildNameByDatatypeSync(var0: java_lang_Class | null): string | null;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getInstanceConstructorArguments(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getInstanceConstructorArgumentsSync(): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'void'
     */
    setEnumerationType(var0: java_lang_Class | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'void'
     */
    setEnumerationTypeSync(var0: java_lang_Class | null): void;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getChildType(): Promise<java_lang_Class | null>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getChildTypeSync(): java_lang_Class | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getElementName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getElementNameSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getExtensionUrl(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getExtensionUrlSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeElementDefinition'
     */
    getChildElementDefinitionByDatatype(var0: java_lang_Class | null): Promise<ca_uhn_fhir_context_BaseRuntimeElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeElementDefinition'
     */
    getChildElementDefinitionByDatatypeSync(var0: java_lang_Class | null): ca_uhn_fhir_context_BaseRuntimeElementDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    isDefinedLocally(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDefinedLocallySync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeElementDefinition'
     */
    getChildByName(var0: string | null): Promise<ca_uhn_fhir_context_BaseRuntimeElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeElementDefinition'
     */
    getChildByNameSync(var0: string | null): ca_uhn_fhir_context_BaseRuntimeElementDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    isModifier(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isModifierSync(): boolean;
    /**
     * @return original return type: 'java.util.Set'
     */
    getValidChildNames(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    getValidChildNamesSync(): java_util_Set | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    getValidChildTypes(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    getValidChildTypesSync(): java_util_Set | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getChoices(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getChoicesSync(): java_util_List | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getResourceTypes(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getResourceTypesSync(): java_util_List | null;
    /**
     * @return original return type: 'java.lang.reflect.Field'
     */
    getField(): Promise<java_lang_reflect_Field | null>;
    /**
     * @return original return type: 'java.lang.reflect.Field'
     */
    getFieldSync(): java_lang_reflect_Field | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeChildDefinition$IAccessor'
     */
    getAccessor(): Promise<ca_uhn_fhir_context_BaseRuntimeChildDefinition$IAccessor | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeChildDefinition$IAccessor'
     */
    getAccessorSync(): ca_uhn_fhir_context_BaseRuntimeChildDefinition$IAccessor | null;
    /**
     * @return original return type: 'int'
     */
    getMin(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMinSync(): number;
    /**
     * @return original return type: 'int'
     */
    getMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMaxSync(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    getFormalDefinition(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getFormalDefinitionSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getBindingValueSet(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getBindingValueSetSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getShortDefinition(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getShortDefinitionSync(): string | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeChildDefinition$IMutator'
     */
    getMutator(): Promise<ca_uhn_fhir_context_BaseRuntimeChildDefinition$IMutator | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeChildDefinition$IMutator'
     */
    getMutatorSync(): ca_uhn_fhir_context_BaseRuntimeChildDefinition$IMutator | null;
    /**
     * @return original return type: 'boolean'
     */
    isSummary(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isSummarySync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeChildDefinition'
     */
    getReplacedParentDefinition(): Promise<ca_uhn_fhir_context_BaseRuntimeChildDefinition | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeChildDefinition'
     */
    getReplacedParentDefinitionSync(): ca_uhn_fhir_context_BaseRuntimeChildDefinition | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.BaseRuntimeChildDefinition'
     * @return original return type: 'void'
     */
    setReplacedParentDefinition(var0: ca_uhn_fhir_context_BaseRuntimeChildDefinition | null): Promise<void>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.BaseRuntimeChildDefinition'
     * @return original return type: 'void'
     */
    setReplacedParentDefinitionSync(var0: ca_uhn_fhir_context_BaseRuntimeChildDefinition | null): void;
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
}
declare const RuntimeChildDeclaredExtensionDefinition_base: typeof RuntimeChildDeclaredExtensionDefinitionClass;
/**
 * Class ca.uhn.fhir.context.RuntimeChildDeclaredExtensionDefinition.
 *
 * This actually imports the java class for further use.
 * The class {@link RuntimeChildDeclaredExtensionDefinitionClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class RuntimeChildDeclaredExtensionDefinition extends RuntimeChildDeclaredExtensionDefinition_base {
}
export default RuntimeChildDeclaredExtensionDefinition;
//# sourceMappingURL=RuntimeChildDeclaredExtensionDefinition.d.ts.map