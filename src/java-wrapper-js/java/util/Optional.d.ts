import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Function as java_util_function_Function, FunctionInterface as java_util_function_FunctionInterface } from "./function/Function";
import { Stream as java_util_stream_Stream } from "./stream/Stream";
import { Predicate as java_util_function_Predicate, PredicateInterface as java_util_function_PredicateInterface } from "./function/Predicate";
import { Supplier as java_util_function_Supplier, SupplierInterface as java_util_function_SupplierInterface } from "./function/Supplier";
import { Consumer as java_util_function_Consumer, ConsumerInterface as java_util_function_ConsumerInterface } from "./function/Consumer";
import { Runnable as java_lang_Runnable, RunnableInterface as java_lang_RunnableInterface } from "./../lang/Runnable";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Class as java_lang_Class } from "./../lang/Class";
/**
 * This class just defines types, you should import {@link Optional} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class OptionalClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.Object'
     */
    get(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getSync(): BasicOrJavaType | null;
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
     * @return original return type: 'boolean'
     */
    isEmpty(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isEmptySync(): boolean;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.Optional'
     */
    map(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): Promise<Optional | null>;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.Optional'
     */
    mapSync(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): Optional | null;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    stream(): Promise<java_util_stream_Stream | null>;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    streamSync(): java_util_stream_Stream | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.util.Optional'
     */
    static of(var0: BasicOrJavaType | null): Promise<Optional | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.util.Optional'
     */
    static ofSync(var0: BasicOrJavaType | null): Optional | null;
    /**
     * @param var0 original type: 'java.util.function.Predicate'
     * @return original return type: 'java.util.Optional'
     */
    filter(var0: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): Promise<Optional | null>;
    /**
     * @param var0 original type: 'java.util.function.Predicate'
     * @return original return type: 'java.util.Optional'
     */
    filterSync(var0: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): Optional | null;
    /**
     * @return original return type: 'java.util.Optional'
     */
    static empty(): Promise<Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    static emptySync(): Optional | null;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.Optional'
     */
    flatMap(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): Promise<Optional | null>;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.Optional'
     */
    flatMapSync(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): Optional | null;
    /**
     * @return original return type: 'boolean'
     */
    isPresent(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isPresentSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    orElse(var0: BasicOrJavaType | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    orElseSync(var0: BasicOrJavaType | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.util.function.Supplier'
     * @return original return type: 'java.lang.Object'
     */
    orElseThrow(var0: java_util_function_Supplier | JavaInterfaceProxy<java_util_function_SupplierInterface> | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.util.function.Supplier'
     * @return original return type: 'java.lang.Object'
     */
    orElseThrowSync(var0: java_util_function_Supplier | JavaInterfaceProxy<java_util_function_SupplierInterface> | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'java.lang.Object'
     */
    orElseThrow(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    orElseThrowSync(): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.util.Optional'
     */
    static ofNullable(var0: BasicOrJavaType | null): Promise<Optional | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.util.Optional'
     */
    static ofNullableSync(var0: BasicOrJavaType | null): Optional | null;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    ifPresent(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    ifPresentSync(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null): void;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @param var1 original type: 'java.lang.Runnable'
     * @return original return type: 'void'
     */
    ifPresentOrElse(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null, var1: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @param var1 original type: 'java.lang.Runnable'
     * @return original return type: 'void'
     */
    ifPresentOrElseSync(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null, var1: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null): void;
    /**
     * @param var0 original type: 'java.util.function.Supplier'
     * @return original return type: 'java.util.Optional'
     */
    or(var0: java_util_function_Supplier | JavaInterfaceProxy<java_util_function_SupplierInterface> | null): Promise<Optional | null>;
    /**
     * @param var0 original type: 'java.util.function.Supplier'
     * @return original return type: 'java.util.Optional'
     */
    orSync(var0: java_util_function_Supplier | JavaInterfaceProxy<java_util_function_SupplierInterface> | null): Optional | null;
    /**
     * @param var0 original type: 'java.util.function.Supplier'
     * @return original return type: 'java.lang.Object'
     */
    orElseGet(var0: java_util_function_Supplier | JavaInterfaceProxy<java_util_function_SupplierInterface> | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.util.function.Supplier'
     * @return original return type: 'java.lang.Object'
     */
    orElseGetSync(var0: java_util_function_Supplier | JavaInterfaceProxy<java_util_function_SupplierInterface> | null): BasicOrJavaType | null;
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
declare const Optional_base: typeof OptionalClass;
/**
 * Class java.util.Optional.
 *
 * This actually imports the java class for further use.
 * The class {@link OptionalClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Optional extends Optional_base {
}
export default Optional;
//# sourceMappingURL=Optional.d.ts.map