import { JavaClass, BasicOrJavaType } from "java-bridge";
import { ConceptKind as org_fhir_ucum_ConceptKind } from "./ConceptKind";
import { List as java_util_List } from "./../../../java/util/List";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link Unit} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class UnitClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    getProperty(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPropertySync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setProperty(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setPropertySync(var0: string | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDescription(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDescriptionSync(): string | null;
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
    getCode(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setCode(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setCodeSync(var0: string | null): void;
    /**
     * @return original return type: 'org.fhir.ucum.ConceptKind'
     */
    getKind(): Promise<org_fhir_ucum_ConceptKind | null>;
    /**
     * @return original return type: 'org.fhir.ucum.ConceptKind'
     */
    getKindSync(): org_fhir_ucum_ConceptKind | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getNames(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getNamesSync(): java_util_List | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeUC(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeUCSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setCodeUC(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setCodeUCSync(var0: string | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPrintSymbol(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPrintSymbolSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setPrintSymbol(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setPrintSymbolSync(var0: string | null): void;
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
declare const Unit_base: typeof UnitClass;
/**
 * Class org.fhir.ucum.Unit.
 *
 * This actually imports the java class for further use.
 * The class {@link UnitClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Unit extends Unit_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Unit;
//# sourceMappingURL=Unit.d.ts.map