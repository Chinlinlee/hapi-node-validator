import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Duration as java_time_Duration } from "./../../time/Duration";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Enum as java_lang_Enum } from "./../../lang/Enum";
import { Class as java_lang_Class } from "./../../lang/Class";
import { ChronoUnit as java_time_temporal_ChronoUnit } from "./../../time/temporal/ChronoUnit";
import { Thread as java_lang_Thread } from "./../../lang/Thread";
import { Optional as java_util_Optional } from "./../Optional";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
/**
 * This class just defines types, you should import {@link TimeUnit} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TimeUnitClass extends JavaClass {
    /**
     * Original type: 'java.util.concurrent.TimeUnit'
     */
    static readonly NANOSECONDS: TimeUnitClass | null;
    /**
     * Original type: 'java.util.concurrent.TimeUnit'
     */
    static readonly MICROSECONDS: TimeUnitClass | null;
    /**
     * Original type: 'java.util.concurrent.TimeUnit'
     */
    static readonly MILLISECONDS: TimeUnitClass | null;
    /**
     * Original type: 'java.util.concurrent.TimeUnit'
     */
    static readonly SECONDS: TimeUnitClass | null;
    /**
     * Original type: 'java.util.concurrent.TimeUnit'
     */
    static readonly MINUTES: TimeUnitClass | null;
    /**
     * Original type: 'java.util.concurrent.TimeUnit'
     */
    static readonly HOURS: TimeUnitClass | null;
    /**
     * Original type: 'java.util.concurrent.TimeUnit'
     */
    static readonly DAYS: TimeUnitClass | null;
    /**
     * @return original return type: 'java.util.concurrent.TimeUnit[]'
     */
    static values(): Promise<(TimeUnit | null)[] | null>;
    /**
     * @return original return type: 'java.util.concurrent.TimeUnit[]'
     */
    static valuesSync(): (TimeUnit | null)[] | null;
    /**
     * @param var0 original type: 'java.time.Duration'
     * @return original return type: 'long'
     */
    convert(var0: java_time_Duration | null): Promise<number>;
    /**
     * @param var0 original type: 'java.time.Duration'
     * @return original return type: 'long'
     */
    convertSync(var0: java_time_Duration | null): number;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.concurrent.TimeUnit'
     * @return original return type: 'long'
     */
    convert(var0: java_lang_Long | bigint | number, var1: TimeUnitClass | null): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.concurrent.TimeUnit'
     * @return original return type: 'long'
     */
    convertSync(var0: java_lang_Long | bigint | number, var1: TimeUnitClass | null): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.concurrent.TimeUnit'
     */
    static valueOf(var0: string | null): Promise<TimeUnit | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.concurrent.TimeUnit'
     */
    static valueOfSync(var0: string | null): TimeUnit | null;
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
     * @param var0 original type: 'java.time.temporal.ChronoUnit'
     * @return original return type: 'java.util.concurrent.TimeUnit'
     */
    static of(var0: java_time_temporal_ChronoUnit | null): Promise<TimeUnit | null>;
    /**
     * @param var0 original type: 'java.time.temporal.ChronoUnit'
     * @return original return type: 'java.util.concurrent.TimeUnit'
     */
    static ofSync(var0: java_time_temporal_ChronoUnit | null): TimeUnit | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    sleep(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    sleepSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    toMillis(var0: java_lang_Long | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    toMillisSync(var0: java_lang_Long | bigint | number): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    toNanos(var0: java_lang_Long | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    toNanosSync(var0: java_lang_Long | bigint | number): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    toMicros(var0: java_lang_Long | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    toMicrosSync(var0: java_lang_Long | bigint | number): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    toSeconds(var0: java_lang_Long | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    toSecondsSync(var0: java_lang_Long | bigint | number): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    toMinutes(var0: java_lang_Long | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    toMinutesSync(var0: java_lang_Long | bigint | number): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    toHours(var0: java_lang_Long | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    toHoursSync(var0: java_lang_Long | bigint | number): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    toDays(var0: java_lang_Long | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    toDaysSync(var0: java_lang_Long | bigint | number): number;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'long'
     * @return original return type: 'void'
     */
    timedWait(var0: BasicOrJavaType | null, var1: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'long'
     * @return original return type: 'void'
     */
    timedWaitSync(var0: BasicOrJavaType | null, var1: java_lang_Long | bigint | number): void;
    /**
     * @param var0 original type: 'java.lang.Thread'
     * @param var1 original type: 'long'
     * @return original return type: 'void'
     */
    timedJoin(var0: java_lang_Thread | null, var1: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Thread'
     * @param var1 original type: 'long'
     * @return original return type: 'void'
     */
    timedJoinSync(var0: java_lang_Thread | null, var1: java_lang_Long | bigint | number): void;
    /**
     * @return original return type: 'java.time.temporal.ChronoUnit'
     */
    toChronoUnit(): Promise<java_time_temporal_ChronoUnit | null>;
    /**
     * @return original return type: 'java.time.temporal.ChronoUnit'
     */
    toChronoUnitSync(): java_time_temporal_ChronoUnit | null;
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
declare const TimeUnit_base: typeof TimeUnitClass;
/**
 * Class java.util.concurrent.TimeUnit.
 *
 * This actually imports the java class for further use.
 * The class {@link TimeUnitClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TimeUnit extends TimeUnit_base {
}
export default TimeUnit;
//# sourceMappingURL=TimeUnit.d.ts.map