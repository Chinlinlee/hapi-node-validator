import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { IValueSetEnumBinder as ca_uhn_fhir_model_api_IValueSetEnumBinder, IValueSetEnumBinderInterface as ca_uhn_fhir_model_api_IValueSetEnumBinderInterface } from "./../api/IValueSetEnumBinder";
import { Enum as java_lang_Enum } from "./../../../../../java/lang/Enum";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { Optional as java_util_Optional } from "./../../../../../java/util/Optional";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
/**
 * This class just defines types, you should import {@link BundleTypeEnum} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BundleTypeEnumClass extends JavaClass {
    /**
     * Original type: 'ca.uhn.fhir.model.valueset.BundleTypeEnum'
     */
    static readonly TRANSACTION: BundleTypeEnumClass | null;
    /**
     * Original type: 'ca.uhn.fhir.model.valueset.BundleTypeEnum'
     */
    static readonly DOCUMENT: BundleTypeEnumClass | null;
    /**
     * Original type: 'ca.uhn.fhir.model.valueset.BundleTypeEnum'
     */
    static readonly MESSAGE: BundleTypeEnumClass | null;
    /**
     * Original type: 'ca.uhn.fhir.model.valueset.BundleTypeEnum'
     */
    static readonly BATCH_RESPONSE: BundleTypeEnumClass | null;
    /**
     * Original type: 'ca.uhn.fhir.model.valueset.BundleTypeEnum'
     */
    static readonly TRANSACTION_RESPONSE: BundleTypeEnumClass | null;
    /**
     * Original type: 'ca.uhn.fhir.model.valueset.BundleTypeEnum'
     */
    static readonly HISTORY: BundleTypeEnumClass | null;
    /**
     * Original type: 'ca.uhn.fhir.model.valueset.BundleTypeEnum'
     */
    static readonly SEARCHSET: BundleTypeEnumClass | null;
    /**
     * Original type: 'ca.uhn.fhir.model.valueset.BundleTypeEnum'
     */
    static readonly COLLECTION: BundleTypeEnumClass | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly VALUESET_IDENTIFIER: string | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly VALUESET_NAME: string | null;
    /**
     * Original type: 'ca.uhn.fhir.model.api.IValueSetEnumBinder'
     */
    static readonly VALUESET_BINDER: ca_uhn_fhir_model_api_IValueSetEnumBinder | JavaInterfaceProxy<ca_uhn_fhir_model_api_IValueSetEnumBinderInterface> | null;
    /**
     * @return original return type: 'ca.uhn.fhir.model.valueset.BundleTypeEnum[]'
     */
    static values(): Promise<(BundleTypeEnum | null)[] | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.model.valueset.BundleTypeEnum[]'
     */
    static valuesSync(): (BundleTypeEnum | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.model.valueset.BundleTypeEnum'
     */
    static valueOf(var0: string | null): Promise<BundleTypeEnum | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.model.valueset.BundleTypeEnum'
     */
    static valueOfSync(var0: string | null): BundleTypeEnum | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Enum'
     */
    static valueOf(var0: java_lang_Class | null, var1: string | null): Promise<java_lang_Enum | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Enum'
     */
    static valueOfSync(var0: java_lang_Class | null, var1: string | null): java_lang_Enum | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.model.valueset.BundleTypeEnum'
     */
    forCode(var0: string | null): Promise<BundleTypeEnum | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.model.valueset.BundleTypeEnum'
     */
    forCodeSync(var0: string | null): BundleTypeEnum | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSystem(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSystemSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCode(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    name(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    nameSync(): string | null;
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
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareTo(var0: BasicOrJavaType | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareToSync(var0: BasicOrJavaType | null): number;
    /**
     * @param var0 original type: 'java.lang.Enum'
     * @return original return type: 'int'
     */
    compareTo(var0: java_lang_Enum | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Enum'
     * @return original return type: 'int'
     */
    compareToSync(var0: java_lang_Enum | null): number;
    /**
     * @return original return type: 'java.util.Optional'
     */
    describeConstable(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    describeConstableSync(): java_util_Optional | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getDeclaringClass(): Promise<java_lang_Class | null>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getDeclaringClassSync(): java_lang_Class | null;
    /**
     * @return original return type: 'int'
     */
    ordinal(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    ordinalSync(): number;
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
declare const BundleTypeEnum_base: typeof BundleTypeEnumClass;
/**
 * Class ca.uhn.fhir.model.valueset.BundleTypeEnum.
 *
 * This actually imports the java class for further use.
 * The class {@link BundleTypeEnumClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BundleTypeEnum extends BundleTypeEnum_base {
}
export default BundleTypeEnum;
//# sourceMappingURL=BundleTypeEnum.d.ts.map