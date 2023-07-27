import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../java/util/List";
import { StructureDefinition as org_hl7_fhir_r4_model_StructureDefinition } from "./StructureDefinition";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { Base as org_hl7_fhir_r4_model_Base } from "./Base";
/**
 * This class just defines types, you should import {@link Property} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PropertyClass extends JavaClass {
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
     * @return original return type: 'java.lang.String'
     */
    getDefinition(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDefinitionSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTypeCode(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTypeCodeSync(): string | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getValues(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getValuesSync(): java_util_List | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValues(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValuesSync(): boolean;
    /**
     * @return original return type: 'int'
     */
    getMinCardinality(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMinCardinalitySync(): number;
    /**
     * @return original return type: 'int'
     */
    getMaxCardinality(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMaxCardinalitySync(): number;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    getStructure(): Promise<org_hl7_fhir_r4_model_StructureDefinition | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    getStructureSync(): org_hl7_fhir_r4_model_StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StructureDefinition'
     * @return original return type: 'void'
     */
    setStructure(var0: org_hl7_fhir_r4_model_StructureDefinition | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StructureDefinition'
     * @return original return type: 'void'
     */
    setStructureSync(var0: org_hl7_fhir_r4_model_StructureDefinition | null): void;
    /**
     * @return original return type: 'boolean'
     */
    isList(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isListSync(): boolean;
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
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Property'
     */
    static newInstanceAsync(var0: string | null, var1: string | null, var2: string | null, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: org_hl7_fhir_r4_model_Base | null): Promise<Property>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.Property'
     */
    static newInstanceAsync(var0: string | null, var1: string | null, var2: string | null, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<Property>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'org.hl7.fhir.r4.model.Base'
     */
    constructor(var0: string | null, var1: string | null, var2: string | null, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: org_hl7_fhir_r4_model_Base | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'java.util.List'
     */
    constructor(var0: string | null, var1: string | null, var2: string | null, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null);
}
declare const Property_base: typeof PropertyClass;
/**
 * Class org.hl7.fhir.r4.model.Property.
 *
 * This actually imports the java class for further use.
 * The class {@link PropertyClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Property extends Property_base {
}
export default Property;
//# sourceMappingURL=Property.d.ts.map