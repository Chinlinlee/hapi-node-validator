import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Timeout$Companion as okio_Timeout$Companion } from "./Timeout$Companion";
import { Long as java_lang_Long } from "./../java/lang/Long";
import { TimeUnit as java_util_concurrent_TimeUnit } from "./../java/util/concurrent/TimeUnit";
import { Function0 as kotlin_jvm_functions_Function0, Function0Interface as kotlin_jvm_functions_Function0Interface } from "./../kotlin/jvm/functions/Function0";
import { Integer as java_lang_Integer } from "./../java/lang/Integer";
import { Class as java_lang_Class } from "./../java/lang/Class";
/**
 * This class just defines types, you should import {@link Timeout} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TimeoutClass extends JavaClass {
    /**
     * Original type: 'okio.Timeout'
     */
    static readonly NONE: TimeoutClass | null;
    /**
     * Original type: 'okio.Timeout$Companion'
     */
    static readonly Companion: okio_Timeout$Companion | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.concurrent.TimeUnit'
     * @return original return type: 'okio.Timeout'
     */
    timeout(var0: java_lang_Long | bigint | number, var1: java_util_concurrent_TimeUnit | null): Promise<Timeout | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.concurrent.TimeUnit'
     * @return original return type: 'okio.Timeout'
     */
    timeoutSync(var0: java_lang_Long | bigint | number, var1: java_util_concurrent_TimeUnit | null): Timeout | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.concurrent.TimeUnit'
     * @return original return type: 'okio.Timeout'
     */
    deadline(var0: java_lang_Long | bigint | number, var1: java_util_concurrent_TimeUnit | null): Promise<Timeout | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.concurrent.TimeUnit'
     * @return original return type: 'okio.Timeout'
     */
    deadlineSync(var0: java_lang_Long | bigint | number, var1: java_util_concurrent_TimeUnit | null): Timeout | null;
    /**
     * @return original return type: 'okio.Timeout'
     */
    clearTimeout(): Promise<Timeout | null>;
    /**
     * @return original return type: 'okio.Timeout'
     */
    clearTimeoutSync(): Timeout | null;
    /**
     * @return original return type: 'long'
     */
    deadlineNanoTime(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    deadlineNanoTimeSync(): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'okio.Timeout'
     */
    deadlineNanoTime(var0: java_lang_Long | bigint | number): Promise<Timeout | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'okio.Timeout'
     */
    deadlineNanoTimeSync(var0: java_lang_Long | bigint | number): Timeout | null;
    /**
     * @return original return type: 'boolean'
     */
    hasDeadline(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDeadlineSync(): boolean;
    /**
     * @return original return type: 'long'
     */
    timeoutNanos(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    timeoutNanosSync(): number;
    /**
     * @return original return type: 'void'
     */
    throwIfReached(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    throwIfReachedSync(): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    waitUntilNotified(var0: BasicOrJavaType | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    waitUntilNotifiedSync(var0: BasicOrJavaType | null): void;
    /**
     * @param var0 original type: 'okio.Timeout'
     * @param var1 original type: 'kotlin.jvm.functions.Function0'
     * @return original return type: 'void'
     */
    intersectWith(var0: TimeoutClass | null, var1: kotlin_jvm_functions_Function0 | JavaInterfaceProxy<kotlin_jvm_functions_Function0Interface> | null): Promise<void>;
    /**
     * @param var0 original type: 'okio.Timeout'
     * @param var1 original type: 'kotlin.jvm.functions.Function0'
     * @return original return type: 'void'
     */
    intersectWithSync(var0: TimeoutClass | null, var1: kotlin_jvm_functions_Function0 | JavaInterfaceProxy<kotlin_jvm_functions_Function0Interface> | null): void;
    /**
     * @return original return type: 'okio.Timeout'
     */
    clearDeadline(): Promise<Timeout | null>;
    /**
     * @return original return type: 'okio.Timeout'
     */
    clearDeadlineSync(): Timeout | null;
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
     * @return original return type: 'okio.Timeout'
     */
    static newInstanceAsync(): Promise<Timeout>;
    constructor();
}
declare const Timeout_base: typeof TimeoutClass;
/**
 * Class okio.Timeout.
 *
 * This actually imports the java class for further use.
 * The class {@link TimeoutClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Timeout extends Timeout_base {
}
export default Timeout;
//# sourceMappingURL=Timeout.d.ts.map