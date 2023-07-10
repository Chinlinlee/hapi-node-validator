import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Collection as java_util_Collection } from "./../../../../../java/util/Collection";
import { ListMultimap as com_google_common_collect_ListMultimap } from "./../../../../../com/google/common/collect/ListMultimap";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
/**
 * This class just defines types, you should import {@link HookParams} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class HookParamsClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'ca.uhn.fhir.interceptor.api.HookParams'
     */
    add(var0: java_lang_Class | null, var1: BasicOrJavaType | null): Promise<HookParams | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'ca.uhn.fhir.interceptor.api.HookParams'
     */
    addSync(var0: java_lang_Class | null, var1: BasicOrJavaType | null): HookParams | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'ca.uhn.fhir.interceptor.api.HookParams'
     */
    add(var0: BasicOrJavaType | null): Promise<HookParams | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'ca.uhn.fhir.interceptor.api.HookParams'
     */
    addSync(var0: BasicOrJavaType | null): HookParams | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.Object'
     */
    get(var0: java_lang_Class | null, var1: java_lang_Integer | number): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.Object'
     */
    getSync(var0: java_lang_Class | null, var1: java_lang_Integer | number): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.Object'
     */
    get(var0: java_lang_Class | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.Object'
     */
    getSync(var0: java_lang_Class | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'java.util.Collection'
     */
    values(): Promise<java_util_Collection | null>;
    /**
     * @return original return type: 'java.util.Collection'
     */
    valuesSync(): java_util_Collection | null;
    /**
     * @return original return type: 'com.google.common.collect.ListMultimap'
     */
    getParamsForType(): Promise<com_google_common_collect_ListMultimap | null>;
    /**
     * @return original return type: 'com.google.common.collect.ListMultimap'
     */
    getParamsForTypeSync(): com_google_common_collect_ListMultimap | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'ca.uhn.fhir.interceptor.api.HookParams'
     */
    addIfMatchesType(var0: java_lang_Class | null, var1: BasicOrJavaType | null): Promise<HookParams | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'ca.uhn.fhir.interceptor.api.HookParams'
     */
    addIfMatchesTypeSync(var0: java_lang_Class | null, var1: BasicOrJavaType | null): HookParams | null;
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
     * @return original return type: 'ca.uhn.fhir.interceptor.api.HookParams'
     */
    static newInstanceAsync(): Promise<HookParams>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'ca.uhn.fhir.interceptor.api.HookParams'
     */
    static newInstanceAsync(var0: (BasicOrJavaType | null)[] | null): Promise<HookParams>;
    constructor();
    /**
     * @param var0 original type: 'java.lang.Object[]'
     */
    constructor(var0: (BasicOrJavaType | null)[] | null);
}
declare const HookParams_base: typeof HookParamsClass;
/**
 * Class ca.uhn.fhir.interceptor.api.HookParams.
 *
 * This actually imports the java class for further use.
 * The class {@link HookParamsClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class HookParams extends HookParams_base {
}
export default HookParams;
//# sourceMappingURL=HookParams.d.ts.map