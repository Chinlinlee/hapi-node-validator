import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link Decimal} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DecimalClass extends JavaClass {
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    add(var0: DecimalClass | null): Promise<Decimal | null>;
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    addSync(var0: DecimalClass | null): Decimal | null;
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
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @return original return type: 'boolean'
     */
    equals(var0: DecimalClass | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @return original return type: 'boolean'
     */
    equalsSync(var0: DecimalClass | null): boolean;
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @param var1 original type: 'org.fhir.ucum.Decimal'
     * @return original return type: 'boolean'
     */
    equals(var0: DecimalClass | null, var1: DecimalClass | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @param var1 original type: 'org.fhir.ucum.Decimal'
     * @return original return type: 'boolean'
     */
    equalsSync(var0: DecimalClass | null, var1: DecimalClass | null): boolean;
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
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    copy(): Promise<Decimal | null>;
    /**
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    copySync(): Decimal | null;
    /**
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    static zero(): Promise<Decimal | null>;
    /**
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    static zeroSync(): Decimal | null;
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    multiply(var0: DecimalClass | null): Promise<Decimal | null>;
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    multiplySync(var0: DecimalClass | null): Decimal | null;
    /**
     * @return original return type: 'boolean'
     */
    isZero(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isZeroSync(): boolean;
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    divide(var0: DecimalClass | null): Promise<Decimal | null>;
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    divideSync(var0: DecimalClass | null): Decimal | null;
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    subtract(var0: DecimalClass | null): Promise<Decimal | null>;
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    subtractSync(var0: DecimalClass | null): Decimal | null;
    /**
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    static one(): Promise<Decimal | null>;
    /**
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    static oneSync(): Decimal | null;
    /**
     * @return original return type: 'int'
     */
    asInteger(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    asIntegerSync(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    asDecimal(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    asDecimalSync(): string | null;
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    modulo(var0: DecimalClass | null): Promise<Decimal | null>;
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    moduloSync(var0: DecimalClass | null): Decimal | null;
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    divInt(var0: DecimalClass | null): Promise<Decimal | null>;
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    divIntSync(var0: DecimalClass | null): Decimal | null;
    /**
     * @return original return type: 'boolean'
     */
    isWholeNumber(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isWholeNumberSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    asScientific(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    asScientificSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    isOne(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isOneSync(): boolean;
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @return original return type: 'int'
     */
    comparesTo(var0: DecimalClass | null): Promise<number>;
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @return original return type: 'int'
     */
    comparesToSync(var0: DecimalClass | null): number;
    /**
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    trunc(): Promise<Decimal | null>;
    /**
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    truncSync(): Decimal | null;
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
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    static newInstanceAsync(var0: java_lang_Integer | number): Promise<Decimal>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    static newInstanceAsync(var0: string | null, var1: java_lang_Integer | number): Promise<Decimal>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    static newInstanceAsync(var0: string | null): Promise<Decimal>;
    /**
     * @param var0 original type: 'int'
     */
    constructor(var0: java_lang_Integer | number);
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     */
    constructor(var0: string | null, var1: java_lang_Integer | number);
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
}
declare const Decimal_base: typeof DecimalClass;
/**
 * Class org.fhir.ucum.Decimal.
 *
 * This actually imports the java class for further use.
 * The class {@link DecimalClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Decimal extends Decimal_base {
}
export default Decimal;
//# sourceMappingURL=Decimal.d.ts.map