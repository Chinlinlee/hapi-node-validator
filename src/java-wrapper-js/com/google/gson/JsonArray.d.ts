import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Number as java_lang_Number } from "./../../../java/lang/Number";
import { JsonElement as com_google_gson_JsonElement } from "./JsonElement";
import { Boolean as java_lang_Boolean } from "./../../../java/lang/Boolean";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { Iterator as java_util_Iterator } from "./../../../java/util/Iterator";
import { BigInteger as java_math_BigInteger } from "./../../../java/math/BigInteger";
import { BigDecimal as java_math_BigDecimal } from "./../../../java/math/BigDecimal";
import { JsonNull as com_google_gson_JsonNull } from "./JsonNull";
import { JsonPrimitive as com_google_gson_JsonPrimitive } from "./JsonPrimitive";
import { JsonObject as com_google_gson_JsonObject } from "./JsonObject";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
import { Spliterator as java_util_Spliterator } from "./../../../java/util/Spliterator";
import { Consumer as java_util_function_Consumer, ConsumerInterface as java_util_function_ConsumerInterface } from "./../../../java/util/function/Consumer";
/**
 * This class just defines types, you should import {@link JsonArray} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class JsonArrayClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    add(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    addSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.Number'
     * @return original return type: 'void'
     */
    add(var0: java_lang_Number | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Number'
     * @return original return type: 'void'
     */
    addSync(var0: java_lang_Number | null): void;
    /**
     * @param var0 original type: 'com.google.gson.JsonElement'
     * @return original return type: 'void'
     */
    add(var0: com_google_gson_JsonElement | null): Promise<void>;
    /**
     * @param var0 original type: 'com.google.gson.JsonElement'
     * @return original return type: 'void'
     */
    addSync(var0: com_google_gson_JsonElement | null): void;
    /**
     * @param var0 original type: 'java.lang.Character'
     * @return original return type: 'void'
     */
    add(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Character'
     * @return original return type: 'void'
     */
    addSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    add(var0: java_lang_Boolean | boolean | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    addSync(var0: java_lang_Boolean | boolean | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'com.google.gson.JsonElement'
     */
    remove(var0: java_lang_Integer | number): Promise<com_google_gson_JsonElement | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'com.google.gson.JsonElement'
     */
    removeSync(var0: java_lang_Integer | number): com_google_gson_JsonElement | null;
    /**
     * @param var0 original type: 'com.google.gson.JsonElement'
     * @return original return type: 'boolean'
     */
    remove(var0: com_google_gson_JsonElement | null): Promise<boolean>;
    /**
     * @param var0 original type: 'com.google.gson.JsonElement'
     * @return original return type: 'boolean'
     */
    removeSync(var0: com_google_gson_JsonElement | null): boolean;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'com.google.gson.JsonElement'
     */
    get(var0: java_lang_Integer | number): Promise<com_google_gson_JsonElement | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'com.google.gson.JsonElement'
     */
    getSync(var0: java_lang_Integer | number): com_google_gson_JsonElement | null;
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
     * @return original return type: 'boolean'
     */
    isEmpty(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isEmptySync(): boolean;
    /**
     * @return original return type: 'int'
     */
    size(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    sizeSync(): number;
    /**
     * @return original return type: 'java.util.Iterator'
     */
    iterator(): Promise<java_util_Iterator | null>;
    /**
     * @return original return type: 'java.util.Iterator'
     */
    iteratorSync(): java_util_Iterator | null;
    /**
     * @param var0 original type: 'com.google.gson.JsonElement'
     * @return original return type: 'boolean'
     */
    contains(var0: com_google_gson_JsonElement | null): Promise<boolean>;
    /**
     * @param var0 original type: 'com.google.gson.JsonElement'
     * @return original return type: 'boolean'
     */
    containsSync(var0: com_google_gson_JsonElement | null): boolean;
    /**
     * @param var0 original type: 'com.google.gson.JsonArray'
     * @return original return type: 'void'
     */
    addAll(var0: JsonArrayClass | null): Promise<void>;
    /**
     * @param var0 original type: 'com.google.gson.JsonArray'
     * @return original return type: 'void'
     */
    addAllSync(var0: JsonArrayClass | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'com.google.gson.JsonElement'
     * @return original return type: 'com.google.gson.JsonElement'
     */
    set(var0: java_lang_Integer | number, var1: com_google_gson_JsonElement | null): Promise<com_google_gson_JsonElement | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'com.google.gson.JsonElement'
     * @return original return type: 'com.google.gson.JsonElement'
     */
    setSync(var0: java_lang_Integer | number, var1: com_google_gson_JsonElement | null): com_google_gson_JsonElement | null;
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
     * @return original return type: 'com.google.gson.JsonArray'
     */
    deepCopy(): Promise<JsonArray | null>;
    /**
     * @return original return type: 'com.google.gson.JsonArray'
     */
    deepCopySync(): JsonArray | null;
    /**
     * @return original return type: 'com.google.gson.JsonElement'
     */
    deepCopy(): Promise<com_google_gson_JsonElement | null>;
    /**
     * @return original return type: 'com.google.gson.JsonElement'
     */
    deepCopySync(): com_google_gson_JsonElement | null;
    /**
     * @return original return type: 'char'
     */
    getAsCharacter(): Promise<string | null>;
    /**
     * @return original return type: 'char'
     */
    getAsCharacterSync(): string | null;
    /**
     * @return original return type: 'java.lang.Number'
     */
    getAsNumber(): Promise<java_lang_Number | null>;
    /**
     * @return original return type: 'java.lang.Number'
     */
    getAsNumberSync(): java_lang_Number | null;
    /**
     * @return original return type: 'short'
     */
    getAsShort(): Promise<number>;
    /**
     * @return original return type: 'short'
     */
    getAsShortSync(): number;
    /**
     * @return original return type: 'byte'
     */
    getAsByte(): Promise<number>;
    /**
     * @return original return type: 'byte'
     */
    getAsByteSync(): number;
    /**
     * @return original return type: 'float'
     */
    getAsFloat(): Promise<number>;
    /**
     * @return original return type: 'float'
     */
    getAsFloatSync(): number;
    /**
     * @return original return type: 'java.math.BigInteger'
     */
    getAsBigInteger(): Promise<java_math_BigInteger | null>;
    /**
     * @return original return type: 'java.math.BigInteger'
     */
    getAsBigIntegerSync(): java_math_BigInteger | null;
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
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'com.google.gson.JsonNull'
     */
    getAsJsonNull(): Promise<com_google_gson_JsonNull | null>;
    /**
     * @return original return type: 'com.google.gson.JsonNull'
     */
    getAsJsonNullSync(): com_google_gson_JsonNull | null;
    /**
     * @return original return type: 'com.google.gson.JsonPrimitive'
     */
    getAsJsonPrimitive(): Promise<com_google_gson_JsonPrimitive | null>;
    /**
     * @return original return type: 'com.google.gson.JsonPrimitive'
     */
    getAsJsonPrimitiveSync(): com_google_gson_JsonPrimitive | null;
    /**
     * @return original return type: 'com.google.gson.JsonArray'
     */
    getAsJsonArray(): Promise<JsonArray | null>;
    /**
     * @return original return type: 'com.google.gson.JsonArray'
     */
    getAsJsonArraySync(): JsonArray | null;
    /**
     * @return original return type: 'com.google.gson.JsonObject'
     */
    getAsJsonObject(): Promise<com_google_gson_JsonObject | null>;
    /**
     * @return original return type: 'com.google.gson.JsonObject'
     */
    getAsJsonObjectSync(): com_google_gson_JsonObject | null;
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
     * @return original return type: 'java.util.Spliterator'
     */
    spliterator(): Promise<java_util_Spliterator | null>;
    /**
     * @return original return type: 'java.util.Spliterator'
     */
    spliteratorSync(): java_util_Spliterator | null;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    forEach(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    forEachSync(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null): void;
    /**
     * @return original return type: 'com.google.gson.JsonArray'
     */
    static newInstanceAsync(): Promise<JsonArray>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'com.google.gson.JsonArray'
     */
    static newInstanceAsync(var0: java_lang_Integer | number): Promise<JsonArray>;
    constructor();
    /**
     * @param var0 original type: 'int'
     */
    constructor(var0: java_lang_Integer | number);
}
declare const JsonArray_base: typeof JsonArrayClass;
/**
 * Class com.google.gson.JsonArray.
 *
 * This actually imports the java class for further use.
 * The class {@link JsonArrayClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class JsonArray extends JsonArray_base {
}
export default JsonArray;
//# sourceMappingURL=JsonArray.d.ts.map