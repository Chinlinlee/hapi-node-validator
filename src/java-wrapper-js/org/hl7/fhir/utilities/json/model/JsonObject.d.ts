import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Boolean as java_lang_Boolean } from "./../../../../../../java/lang/Boolean";
import { Integer as java_lang_Integer } from "./../../../../../../java/lang/Integer";
import { Long as java_lang_Long } from "./../../../../../../java/lang/Long";
import { JsonElement as org_hl7_fhir_utilities_json_model_JsonElement } from "./JsonElement";
import { JsonElementType as org_hl7_fhir_utilities_json_model_JsonElementType } from "./JsonElementType";
import { Instant as java_time_Instant } from "./../../../../../../java/time/Instant";
import { List as java_util_List } from "./../../../../../../java/util/List";
import { JsonArray as org_hl7_fhir_utilities_json_model_JsonArray } from "./JsonArray";
import { JsonBoolean as org_hl7_fhir_utilities_json_model_JsonBoolean } from "./JsonBoolean";
import { JsonString as org_hl7_fhir_utilities_json_model_JsonString } from "./JsonString";
import { JsonNumber as org_hl7_fhir_utilities_json_model_JsonNumber } from "./JsonNumber";
import { JsonNull as org_hl7_fhir_utilities_json_model_JsonNull } from "./JsonNull";
import { JsonLocationData as org_hl7_fhir_utilities_json_model_JsonLocationData } from "./JsonLocationData";
import { JsonPrimitive as org_hl7_fhir_utilities_json_model_JsonPrimitive } from "./JsonPrimitive";
import { Class as java_lang_Class } from "./../../../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link JsonObject} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class JsonObjectClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    add(var0: string | null, var1: string | null): Promise<JsonObject | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    addSync(var0: string | null, var1: string | null): JsonObject | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    add(var0: string | null, var1: java_lang_Boolean | boolean): Promise<JsonObject | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    addSync(var0: string | null, var1: java_lang_Boolean | boolean): JsonObject | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    add(var0: string | null, var1: java_lang_Integer | number): Promise<JsonObject | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    addSync(var0: string | null, var1: java_lang_Integer | number): JsonObject | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'long'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    add(var0: string | null, var1: java_lang_Long | bigint | number): Promise<JsonObject | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'long'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    addSync(var0: string | null, var1: java_lang_Long | bigint | number): JsonObject | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.utilities.json.model.JsonElement'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    add(var0: string | null, var1: org_hl7_fhir_utilities_json_model_JsonElement | null): Promise<JsonObject | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.utilities.json.model.JsonElement'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    addSync(var0: string | null, var1: org_hl7_fhir_utilities_json_model_JsonElement | null): JsonObject | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    remove(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    removeSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonElement'
     */
    get(var0: string | null): Promise<org_hl7_fhir_utilities_json_model_JsonElement | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonElement'
     */
    getSync(var0: string | null): org_hl7_fhir_utilities_json_model_JsonElement | null;
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
     * @return original return type: 'void'
     */
    clear(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    clearSync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    str(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    strSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     * @return original return type: 'void'
     */
    merge(var0: JsonObjectClass | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     * @return original return type: 'void'
     */
    mergeSync(var0: JsonObjectClass | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasArray(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasArraySync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    set(var0: string | null, var1: java_lang_Integer | number): Promise<JsonObject | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    setSync(var0: string | null, var1: java_lang_Integer | number): JsonObject | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    set(var0: string | null, var1: java_lang_Boolean | boolean): Promise<JsonObject | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    setSync(var0: string | null, var1: java_lang_Boolean | boolean): JsonObject | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.utilities.json.model.JsonElement'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    set(var0: string | null, var1: org_hl7_fhir_utilities_json_model_JsonElement | null): Promise<JsonObject | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.utilities.json.model.JsonElement'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    setSync(var0: string | null, var1: org_hl7_fhir_utilities_json_model_JsonElement | null): JsonObject | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.time.Instant'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    set(var0: string | null, var1: java_time_Instant | null): Promise<JsonObject | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.time.Instant'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    setSync(var0: string | null, var1: java_time_Instant | null): JsonObject | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    set(var0: string | null, var1: string | null): Promise<JsonObject | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    setSync(var0: string | null, var1: string | null): JsonObject | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getProperties(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getPropertiesSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'boolean'
     */
    has(var0: (string | null)[] | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'boolean'
     */
    hasSync(var0: (string | null)[] | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    has(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    getStrings(var0: string | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    getStringsSync(var0: string | null): java_util_List | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    deepCopy(): Promise<JsonObject | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    deepCopySync(): JsonObject | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonElement'
     */
    deepCopy(): Promise<org_hl7_fhir_utilities_json_model_JsonElement | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonElement'
     */
    deepCopySync(): org_hl7_fhir_utilities_json_model_JsonElement | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonArray'
     */
    forceArray(var0: string | null): Promise<org_hl7_fhir_utilities_json_model_JsonArray | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonArray'
     */
    forceArraySync(var0: string | null): org_hl7_fhir_utilities_json_model_JsonArray | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    asString(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    asStringSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'java.lang.String'
     */
    asString(var0: (string | null)[] | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'java.lang.String'
     */
    asStringSync(var0: (string | null)[] | null): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    asString(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    asStringSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    getJsonObjects(var0: string | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    getJsonObjectsSync(var0: string | null): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasObject(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasObjectSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    getJsonObject(var0: string | null): Promise<JsonObject | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    getJsonObjectSync(var0: string | null): JsonObject | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonArray'
     */
    getJsonArray(var0: string | null): Promise<org_hl7_fhir_utilities_json_model_JsonArray | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonArray'
     */
    getJsonArraySync(var0: string | null): org_hl7_fhir_utilities_json_model_JsonArray | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasPrimitive(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasPrimitiveSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    asBoolean(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    asBooleanSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.utilities.json.model.JsonElement'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'boolean'
     * @param var4 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    addForParser(var0: string | null, var1: org_hl7_fhir_utilities_json_model_JsonElement | null, var2: java_lang_Boolean | boolean, var3: java_lang_Boolean | boolean, var4: java_lang_Boolean | boolean): Promise<JsonObject | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.utilities.json.model.JsonElement'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'boolean'
     * @param var4 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    addForParserSync(var0: string | null, var1: org_hl7_fhir_utilities_json_model_JsonElement | null, var2: java_lang_Boolean | boolean, var3: java_lang_Boolean | boolean, var4: java_lang_Boolean | boolean): JsonObject | null;
    /**
     * @return original return type: 'boolean'
     */
    isExtraComma(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isExtraCommaSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasString(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasStringSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasBoolean(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasBooleanSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonBoolean'
     */
    getJsonBoolean(var0: string | null): Promise<org_hl7_fhir_utilities_json_model_JsonBoolean | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonBoolean'
     */
    getJsonBooleanSync(var0: string | null): org_hl7_fhir_utilities_json_model_JsonBoolean | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.time.Instant'
     */
    asDate(var0: string | null): Promise<java_time_Instant | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.time.Instant'
     */
    asDateSync(var0: string | null): java_time_Instant | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setExtraComma(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setExtraCommaSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonString'
     */
    getJsonString(var0: string | null): Promise<org_hl7_fhir_utilities_json_model_JsonString | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonString'
     */
    getJsonStringSync(var0: string | null): org_hl7_fhir_utilities_json_model_JsonString | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasNumber(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasNumberSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    forceObject(var0: string | null): Promise<JsonObject | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    forceObjectSync(var0: string | null): JsonObject | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasNull(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasNullSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Integer'
     */
    asInteger(var0: string | null): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Integer'
     */
    asIntegerSync(var0: string | null): number | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getNames(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getNamesSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    findByStringProp(var0: string | null, var1: string | null, var2: string | null): Promise<JsonObject | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    findByStringPropSync(var0: string | null, var1: string | null, var2: string | null): JsonObject | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonNumber'
     */
    getJsonNumber(var0: string | null): Promise<org_hl7_fhir_utilities_json_model_JsonNumber | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonNumber'
     */
    getJsonNumberSync(var0: string | null): org_hl7_fhir_utilities_json_model_JsonNumber | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonNull'
     */
    getJsonNull(var0: string | null): Promise<org_hl7_fhir_utilities_json_model_JsonNull | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonNull'
     */
    getJsonNullSync(var0: string | null): org_hl7_fhir_utilities_json_model_JsonNull | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.time.Instant'
     */
    asInstant(var0: string | null): Promise<java_time_Instant | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.time.Instant'
     */
    asInstantSync(var0: string | null): java_time_Instant | null;
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
    asJsonObject(): Promise<JsonObject | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    asJsonObjectSync(): JsonObject | null;
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
    asJsonNull(): Promise<org_hl7_fhir_utilities_json_model_JsonNull | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonNull'
     */
    asJsonNullSync(): org_hl7_fhir_utilities_json_model_JsonNull | null;
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
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    static newInstanceAsync(): Promise<JsonObject>;
    constructor();
}
declare const JsonObject_base: typeof JsonObjectClass;
/**
 * Class org.hl7.fhir.utilities.json.model.JsonObject.
 *
 * This actually imports the java class for further use.
 * The class {@link JsonObjectClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class JsonObject extends JsonObject_base {
}
export default JsonObject;
//# sourceMappingURL=JsonObject.d.ts.map