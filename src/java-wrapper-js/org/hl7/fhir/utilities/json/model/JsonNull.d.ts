import { JavaClass, BasicOrJavaType } from "java-bridge";
import { JsonElementType as org_hl7_fhir_utilities_json_model_JsonElementType } from "./JsonElementType";
import { JsonLocationData as org_hl7_fhir_utilities_json_model_JsonLocationData } from "./JsonLocationData";
import { JsonElement as org_hl7_fhir_utilities_json_model_JsonElement } from "./JsonElement";
import { List as java_util_List } from "./../../../../../../java/util/List";
import { JsonPrimitive as org_hl7_fhir_utilities_json_model_JsonPrimitive } from "./JsonPrimitive";
import { JsonNumber as org_hl7_fhir_utilities_json_model_JsonNumber } from "./JsonNumber";
import { JsonString as org_hl7_fhir_utilities_json_model_JsonString } from "./JsonString";
import { JsonObject as org_hl7_fhir_utilities_json_model_JsonObject } from "./JsonObject";
import { JsonBoolean as org_hl7_fhir_utilities_json_model_JsonBoolean } from "./JsonBoolean";
import { JsonArray as org_hl7_fhir_utilities_json_model_JsonArray } from "./JsonArray";
import { Long as java_lang_Long } from "./../../../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link JsonNull} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class JsonNullClass extends JavaClass {
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonElementType'
     */
    type(): Promise<org_hl7_fhir_utilities_json_model_JsonElementType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonElementType'
     */
    typeSync(): org_hl7_fhir_utilities_json_model_JsonElementType | null;
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
    getValue(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getValueSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toJson(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toJsonSync(): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.json.model.JsonLocationData'
     * @return original return type: 'void'
     */
    setStart(var0: org_hl7_fhir_utilities_json_model_JsonLocationData | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.json.model.JsonLocationData'
     * @return original return type: 'void'
     */
    setStartSync(var0: org_hl7_fhir_utilities_json_model_JsonLocationData | null): void;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonElement'
     */
    deepCopy(): Promise<org_hl7_fhir_utilities_json_model_JsonElement | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonElement'
     */
    deepCopySync(): org_hl7_fhir_utilities_json_model_JsonElement | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    asString(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    asStringSync(): string | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonLocationData'
     */
    getStart(): Promise<org_hl7_fhir_utilities_json_model_JsonLocationData | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonLocationData'
     */
    getStartSync(): org_hl7_fhir_utilities_json_model_JsonLocationData | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonLocationData'
     */
    getEnd(): Promise<org_hl7_fhir_utilities_json_model_JsonLocationData | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonLocationData'
     */
    getEndSync(): org_hl7_fhir_utilities_json_model_JsonLocationData | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.json.model.JsonLocationData'
     * @return original return type: 'void'
     */
    setEnd(var0: org_hl7_fhir_utilities_json_model_JsonLocationData | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.json.model.JsonLocationData'
     * @return original return type: 'void'
     */
    setEndSync(var0: org_hl7_fhir_utilities_json_model_JsonLocationData | null): void;
    /**
     * @return original return type: 'boolean'
     */
    hasComments(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasCommentsSync(): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    getComments(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getCommentsSync(): java_util_List | null;
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
    isJsonString(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isJsonStringSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isJsonBoolean(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isJsonBooleanSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonPrimitive'
     */
    asJsonPrimitive(): Promise<org_hl7_fhir_utilities_json_model_JsonPrimitive | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonPrimitive'
     */
    asJsonPrimitiveSync(): org_hl7_fhir_utilities_json_model_JsonPrimitive | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonNumber'
     */
    asJsonNumber(): Promise<org_hl7_fhir_utilities_json_model_JsonNumber | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonNumber'
     */
    asJsonNumberSync(): org_hl7_fhir_utilities_json_model_JsonNumber | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonString'
     */
    asJsonString(): Promise<org_hl7_fhir_utilities_json_model_JsonString | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonString'
     */
    asJsonStringSync(): org_hl7_fhir_utilities_json_model_JsonString | null;
    /**
     * @return original return type: 'boolean'
     */
    isJsonNull(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isJsonNullSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    asJsonObject(): Promise<org_hl7_fhir_utilities_json_model_JsonObject | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    asJsonObjectSync(): org_hl7_fhir_utilities_json_model_JsonObject | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonBoolean'
     */
    asJsonBoolean(): Promise<org_hl7_fhir_utilities_json_model_JsonBoolean | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonBoolean'
     */
    asJsonBooleanSync(): org_hl7_fhir_utilities_json_model_JsonBoolean | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonArray'
     */
    asJsonArray(): Promise<org_hl7_fhir_utilities_json_model_JsonArray | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonArray'
     */
    asJsonArraySync(): org_hl7_fhir_utilities_json_model_JsonArray | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonNull'
     */
    asJsonNull(): Promise<JsonNull | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonNull'
     */
    asJsonNullSync(): JsonNull | null;
    /**
     * @return original return type: 'boolean'
     */
    isJsonNumber(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isJsonNumberSync(): boolean;
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
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonNull'
     */
    static newInstanceAsync(): Promise<JsonNull>;
    constructor();
}
declare const JsonNull_base: typeof JsonNullClass;
/**
 * Class org.hl7.fhir.utilities.json.model.JsonNull.
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