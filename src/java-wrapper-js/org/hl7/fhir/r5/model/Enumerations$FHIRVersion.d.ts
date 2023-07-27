import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Enum as java_lang_Enum } from "./../../../../../java/lang/Enum";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { Optional as java_util_Optional } from "./../../../../../java/util/Optional";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
/**
 * This class just defines types, you should import {@link Enumerations$FHIRVersion} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Enumerations$FHIRVersionClass extends JavaClass {
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _0_01: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _0_05: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _0_06: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _0_11: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _0_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _0_0_80: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _0_0_81: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _0_0_82: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _0_4: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _0_4_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _0_5: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _0_5_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _1_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _1_0_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _1_0_1: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _1_0_2: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _1_1: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _1_1_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _1_4: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _1_4_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _1_6: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _1_6_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _1_8: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _1_8_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _3_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _3_0_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _3_0_1: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _3_0_2: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _3_3: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _3_3_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _3_5: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _3_5_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _4_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _4_0_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _4_0_1: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _4_1: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _4_1_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _4_2: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _4_2_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _4_3: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _4_3_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _4_3_0CIBUILD: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _4_3_0SNAPSHOT1: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _4_4: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _4_4_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _4_5: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _4_5_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _4_6: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _4_6_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _5_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _5_0_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _5_0_0CIBUILD: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _5_0_0SNAPSHOT1: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _5_0_0SNAPSHOT2: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _5_0_0BALLOT: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _5_0_0SNAPSHOT3: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _5_0_0DRAFTFINAL: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _6_0_0CIBUILD: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly _6_0_0: Enumerations$FHIRVersionClass | null;
    /**
     * Original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static readonly NULL: Enumerations$FHIRVersionClass | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion[]'
     */
    static values(): Promise<(Enumerations$FHIRVersion | null)[] | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion[]'
     */
    static valuesSync(): (Enumerations$FHIRVersion | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static valueOf(var0: string | null): Promise<Enumerations$FHIRVersion | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static valueOfSync(var0: string | null): Enumerations$FHIRVersion | null;
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
    getSystem(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSystemSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDisplay(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDisplaySync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static fromCode(var0: string | null): Promise<Enumerations$FHIRVersion | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    static fromCodeSync(var0: string | null): Enumerations$FHIRVersion | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toCode(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toCodeSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isValidCode(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isValidCodeSync(var0: string | null): boolean;
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
declare const Enumerations$FHIRVersion_base: typeof Enumerations$FHIRVersionClass;
/**
 * Class org.hl7.fhir.r5.model.Enumerations$FHIRVersion.
 *
 * This actually imports the java class for further use.
 * The class {@link Enumerations$FHIRVersionClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Enumerations$FHIRVersion extends Enumerations$FHIRVersion_base {
}
export default Enumerations$FHIRVersion;
//# sourceMappingURL=Enumerations$FHIRVersion.d.ts.map