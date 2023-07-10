import { JavaClass, BasicOrJavaType } from "java-bridge";
import { JsonElement as com_google_gson_JsonElement } from "./JsonElement";
import { JsonArray as com_google_gson_JsonArray } from "./JsonArray";
import { JsonObject as com_google_gson_JsonObject } from "./JsonObject";
import { BigDecimal as java_math_BigDecimal } from "./../../../java/math/BigDecimal";
import { BigInteger as java_math_BigInteger } from "./../../../java/math/BigInteger";
import { Number as java_lang_Number } from "./../../../java/lang/Number";
import { JsonPrimitive as com_google_gson_JsonPrimitive } from "./JsonPrimitive";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link JsonNull} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class JsonNullClass extends JavaClass {
    /**
     * Original type: 'com.google.gson.JsonNull'
     */
    static readonly INSTANCE: JsonNullClass | null;
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
     * @return original return type: 'com.google.gson.JsonNull'
     */
    deepCopy(): Promise<JsonNull | null>;
    /**
     * @return original return type: 'com.google.gson.JsonNull'
     */
    deepCopySync(): JsonNull | null;
    /**
     * @return original return type: 'com.google.gson.JsonElement'
     */
    deepCopy(): Promise<com_google_gson_JsonElement | null>;
    /**
     * @return original return type: 'com.google.gson.JsonElement'
     */
    deepCopySync(): com_google_gson_JsonElement | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'boolean'
     */
    getAsBoolean(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    getAsBooleanSync(): boolean;
    /**
     * @return original return type: 'double'
     */
    getAsDouble(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getAsDoubleSync(): number;
    /**
     * @return original return type: 'int'
     */
    getAsInt(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getAsIntSync(): number;
    /**
     * @return original return type: 'long'
     */
    getAsLong(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    getAsLongSync(): number;
    /**
     * @return original return type: 'boolean'
     */
    isJsonObject(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isJsonObjectSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isJsonArray(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isJsonArraySync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isJsonPrimitive(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isJsonPrimitiveSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isJsonNull(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isJsonNullSync(): boolean;
    /**
     * @return original return type: 'com.google.gson.JsonArray'
     */
    getAsJsonArray(): Promise<com_google_gson_JsonArray | null>;
    /**
     * @return original return type: 'com.google.gson.JsonArray'
     */
    getAsJsonArraySync(): com_google_gson_JsonArray | null;
    /**
     * @return original return type: 'com.google.gson.JsonObject'
     */
    getAsJsonObject(): Promise<com_google_gson_JsonObject | null>;
    /**
     * @return original return type: 'com.google.gson.JsonObject'
     */
    getAsJsonObjectSync(): com_google_gson_JsonObject | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getAsString(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getAsStringSync(): string | null;
    /**
     * @return original return type: 'java.math.BigDecimal'
     */
    getAsBigDecimal(): Promise<java_math_BigDecimal | null>;
    /**
     * @return original return type: 'java.math.BigDecimal'
     */
    getAsBigDecimalSync(): java_math_BigDecimal | null;
    /**
     * @return original return type: 'byte'
     */
    getAsByte(): Promise<number>;
    /**
     * @return original return type: 'byte'
     */
    getAsByteSync(): number;
    /**
     * @return original return type: 'com.google.gson.JsonNull'
     */
    getAsJsonNull(): Promise<JsonNull | null>;
    /**
     * @return original return type: 'com.google.gson.JsonNull'
     */
    getAsJsonNullSync(): JsonNull | null;
    /**
     * @return original return type: 'char'
     */
    getAsCharacter(): Promise<string | null>;
    /**
     * @return original return type: 'char'
     */
    getAsCharacterSync(): string | null;
    /**
     * @return original return type: 'java.math.BigInteger'
     */
    getAsBigInteger(): Promise<java_math_BigInteger | null>;
    /**
     * @return original return type: 'java.math.BigInteger'
     */
    getAsBigIntegerSync(): java_math_BigInteger | null;
    /**
     * @return original return type: 'short'
     */
    getAsShort(): Promise<number>;
    /**
     * @return original return type: 'short'
     */
    getAsShortSync(): number;
    /**
     * @return original return type: 'java.lang.Number'
     */
    getAsNumber(): Promise<java_lang_Number | null>;
    /**
     * @return original return type: 'java.lang.Number'
     */
    getAsNumberSync(): java_lang_Number | null;
    /**
     * @return original return type: 'float'
     */
    getAsFloat(): Promise<number>;
    /**
     * @return original return type: 'float'
     */
    getAsFloatSync(): number;
    /**
     * @return original return type: 'com.google.gson.JsonPrimitive'
     */
    getAsJsonPrimitive(): Promise<com_google_gson_JsonPrimitive | null>;
    /**
     * @return original return type: 'com.google.gson.JsonPrimitive'
     */
    getAsJsonPrimitiveSync(): com_google_gson_JsonPrimitive | null;
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
     * @return original return type: 'com.google.gson.JsonNull'
     */
    static newInstanceAsync(): Promise<JsonNull>;
    constructor();
}
declare const JsonNull_base: typeof JsonNullClass;
/**
 * Class com.google.gson.JsonNull.
 *
 * This actually imports the java class for further use.
 * The class {@link JsonNullClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class JsonNull extends JsonNull_base {
}
export default JsonNull;
//# sourceMappingURL=JsonNull.d.ts.map