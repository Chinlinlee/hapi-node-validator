import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Date as java_util_Date } from "./../../../../../java/util/Date";
import { TemporalPrecisionEnum as ca_uhn_fhir_model_api_TemporalPrecisionEnum } from "./../api/TemporalPrecisionEnum";
import { BasePrimitive as ca_uhn_fhir_model_api_BasePrimitive } from "./../api/BasePrimitive";
import { IPrimitiveType as org_hl7_fhir_instance_model_api_IPrimitiveType } from "./../../../../../org/hl7/fhir/instance/model/api/IPrimitiveType";
import { TimeZone as java_util_TimeZone } from "./../../../../../java/util/TimeZone";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { GregorianCalendar as java_util_GregorianCalendar } from "./../../../../../java/util/GregorianCalendar";
import { ObjectOutput as java_io_ObjectOutput, ObjectOutputInterface as java_io_ObjectOutputInterface } from "./../../../../../java/io/ObjectOutput";
import { ObjectInput as java_io_ObjectInput, ObjectInputInterface as java_io_ObjectInputInterface } from "./../../../../../java/io/ObjectInput";
import { IdDt as ca_uhn_fhir_model_primitive_IdDt } from "./IdDt";
import { List as java_util_List } from "./../../../../../java/util/List";
import { ExtensionDt as ca_uhn_fhir_model_api_ExtensionDt } from "./../api/ExtensionDt";
import { IBaseDatatype as org_hl7_fhir_instance_model_api_IBaseDatatype, IBaseDatatypeInterface as org_hl7_fhir_instance_model_api_IBaseDatatypeInterface } from "./../../../../../org/hl7/fhir/instance/model/api/IBaseDatatype";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link BaseDateTimeDt} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BaseDateTimeDtClass extends JavaClass {
    /**
     * Original type: 'java.lang.String'
     */
    static readonly NOW_DATE_CONSTANT: string | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly TODAY_DATE_CONSTANT: string | null;
    /**
     * @param var0 original type: 'java.util.Date'
     * @param var1 original type: 'ca.uhn.fhir.model.api.TemporalPrecisionEnum'
     * @return original return type: 'void'
     */
    setValue(var0: java_util_Date | null, var1: ca_uhn_fhir_model_api_TemporalPrecisionEnum | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.Date'
     * @param var1 original type: 'ca.uhn.fhir.model.api.TemporalPrecisionEnum'
     * @return original return type: 'void'
     */
    setValueSync(var0: java_util_Date | null, var1: ca_uhn_fhir_model_api_TemporalPrecisionEnum | null): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'ca.uhn.fhir.model.api.BasePrimitive'
     */
    setValue(var0: BasicOrJavaType | null): Promise<ca_uhn_fhir_model_api_BasePrimitive | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'ca.uhn.fhir.model.api.BasePrimitive'
     */
    setValueSync(var0: BasicOrJavaType | null): ca_uhn_fhir_model_api_BasePrimitive | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IPrimitiveType'
     */
    setValue(var0: BasicOrJavaType | null): Promise<org_hl7_fhir_instance_model_api_IPrimitiveType | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IPrimitiveType'
     */
    setValueSync(var0: BasicOrJavaType | null): org_hl7_fhir_instance_model_api_IPrimitiveType | null;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setValue(var0: java_util_Date | null): Promise<BaseDateTimeDt | null>;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setValueSync(var0: java_util_Date | null): BaseDateTimeDt | null;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getYear(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getYearSync(): number | null;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getHour(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getHourSync(): number | null;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getMinute(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getMinuteSync(): number | null;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getSecond(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getSecondSync(): number | null;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getMonth(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getMonthSync(): number | null;
    /**
     * @return original return type: 'ca.uhn.fhir.model.api.TemporalPrecisionEnum'
     */
    getPrecision(): Promise<ca_uhn_fhir_model_api_TemporalPrecisionEnum | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.model.api.TemporalPrecisionEnum'
     */
    getPrecisionSync(): ca_uhn_fhir_model_api_TemporalPrecisionEnum | null;
    /**
     * @param var0 original type: 'java.util.TimeZone'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setTimeZone(var0: java_util_TimeZone | null): Promise<BaseDateTimeDt | null>;
    /**
     * @param var0 original type: 'java.util.TimeZone'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setTimeZoneSync(var0: java_util_TimeZone | null): BaseDateTimeDt | null;
    /**
     * @return original return type: 'java.util.TimeZone'
     */
    getTimeZone(): Promise<java_util_TimeZone | null>;
    /**
     * @return original return type: 'java.util.TimeZone'
     */
    getTimeZoneSync(): java_util_TimeZone | null;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getMillis(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getMillisSync(): number | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setMillis(var0: java_lang_Integer | number): Promise<BaseDateTimeDt | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setMillisSync(var0: java_lang_Integer | number): BaseDateTimeDt | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setMonth(var0: java_lang_Integer | number): Promise<BaseDateTimeDt | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setMonthSync(var0: java_lang_Integer | number): BaseDateTimeDt | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setYear(var0: java_lang_Integer | number): Promise<BaseDateTimeDt | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setYearSync(var0: java_lang_Integer | number): BaseDateTimeDt | null;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getDay(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getDaySync(): number | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setValueAsString(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setValueAsStringSync(var0: string | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setMinute(var0: java_lang_Integer | number): Promise<BaseDateTimeDt | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setMinuteSync(var0: java_lang_Integer | number): BaseDateTimeDt | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setHour(var0: java_lang_Integer | number): Promise<BaseDateTimeDt | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setHourSync(var0: java_lang_Integer | number): BaseDateTimeDt | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setTimeZoneZulu(var0: java_lang_Boolean | boolean): Promise<BaseDateTimeDt | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setTimeZoneZuluSync(var0: java_lang_Boolean | boolean): BaseDateTimeDt | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.model.api.TemporalPrecisionEnum'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setPrecision(var0: ca_uhn_fhir_model_api_TemporalPrecisionEnum | null): Promise<BaseDateTimeDt | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.model.api.TemporalPrecisionEnum'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setPrecisionSync(var0: ca_uhn_fhir_model_api_TemporalPrecisionEnum | null): BaseDateTimeDt | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toHumanDisplay(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toHumanDisplaySync(): string | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setNanos(var0: java_lang_Long | bigint | number): Promise<BaseDateTimeDt | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setNanosSync(var0: java_lang_Long | bigint | number): BaseDateTimeDt | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setSecond(var0: java_lang_Integer | number): Promise<BaseDateTimeDt | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setSecondSync(var0: java_lang_Integer | number): BaseDateTimeDt | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setDay(var0: java_lang_Integer | number): Promise<BaseDateTimeDt | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.model.primitive.BaseDateTimeDt'
     */
    setDaySync(var0: java_lang_Integer | number): BaseDateTimeDt | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toHumanDisplayLocalTimezone(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toHumanDisplayLocalTimezoneSync(): string | null;
    /**
     * @return original return type: 'java.lang.Long'
     */
    getNanos(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Long'
     */
    getNanosSync(): number | null;
    /**
     * @return original return type: 'java.util.GregorianCalendar'
     */
    getValueAsCalendar(): Promise<java_util_GregorianCalendar | null>;
    /**
     * @return original return type: 'java.util.GregorianCalendar'
     */
    getValueAsCalendarSync(): java_util_GregorianCalendar | null;
    /**
     * @return original return type: 'boolean'
     */
    isTimeZoneZulu(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isTimeZoneZuluSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isToday(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isTodaySync(): boolean;
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
     * @return original return type: 'java.lang.Object'
     */
    getValue(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getValueSync(): BasicOrJavaType | null;
    /**
     * @return original return type: 'boolean'
     */
    isEmpty(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isEmptySync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValue(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueSync(): boolean;
    /**
     * @param var0 original type: 'java.io.ObjectOutput'
     * @return original return type: 'void'
     */
    writeExternal(var0: java_io_ObjectOutput | JavaInterfaceProxy<java_io_ObjectOutputInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.ObjectOutput'
     * @return original return type: 'void'
     */
    writeExternalSync(var0: java_io_ObjectOutput | JavaInterfaceProxy<java_io_ObjectOutputInterface> | null): void;
    /**
     * @param var0 original type: 'java.io.ObjectInput'
     * @return original return type: 'void'
     */
    readExternal(var0: java_io_ObjectInput | JavaInterfaceProxy<java_io_ObjectInputInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.ObjectInput'
     * @return original return type: 'void'
     */
    readExternalSync(var0: java_io_ObjectInput | JavaInterfaceProxy<java_io_ObjectInputInterface> | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getValueAsString(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getValueAsStringSync(): string | null;
    /**
     * @return original return type: 'ca.uhn.fhir.model.primitive.IdDt'
     */
    getId(): Promise<ca_uhn_fhir_model_primitive_IdDt | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.model.primitive.IdDt'
     */
    getIdSync(): ca_uhn_fhir_model_primitive_IdDt | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getElementSpecificId(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getElementSpecificIdSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setElementSpecificId(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setElementSpecificIdSync(var0: string | null): void;
    /**
     * @param var0 original type: 'ca.uhn.fhir.model.primitive.IdDt'
     * @return original return type: 'void'
     */
    setId(var0: ca_uhn_fhir_model_primitive_IdDt | null): Promise<void>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.model.primitive.IdDt'
     * @return original return type: 'void'
     */
    setIdSync(var0: ca_uhn_fhir_model_primitive_IdDt | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setId(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setIdSync(var0: string | null): void;
    /**
     * @return original return type: 'java.util.List'
     */
    getUndeclaredExtensions(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getUndeclaredExtensionsSync(): java_util_List | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getUndeclaredModifierExtensions(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getUndeclaredModifierExtensionsSync(): java_util_List | null;
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.model.api.ExtensionDt'
     */
    addUndeclaredExtension(var0: java_lang_Boolean | boolean, var1: string | null): Promise<ca_uhn_fhir_model_api_ExtensionDt | null>;
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.model.api.ExtensionDt'
     */
    addUndeclaredExtensionSync(var0: java_lang_Boolean | boolean, var1: string | null): ca_uhn_fhir_model_api_ExtensionDt | null;
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.instance.model.api.IBaseDatatype'
     * @return original return type: 'ca.uhn.fhir.model.api.ExtensionDt'
     */
    addUndeclaredExtension(var0: java_lang_Boolean | boolean, var1: string | null, var2: org_hl7_fhir_instance_model_api_IBaseDatatype | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseDatatypeInterface> | null): Promise<ca_uhn_fhir_model_api_ExtensionDt | null>;
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.instance.model.api.IBaseDatatype'
     * @return original return type: 'ca.uhn.fhir.model.api.ExtensionDt'
     */
    addUndeclaredExtensionSync(var0: java_lang_Boolean | boolean, var1: string | null, var2: org_hl7_fhir_instance_model_api_IBaseDatatype | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseDatatypeInterface> | null): ca_uhn_fhir_model_api_ExtensionDt | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.model.api.ExtensionDt'
     * @return original return type: 'void'
     */
    addUndeclaredExtension(var0: ca_uhn_fhir_model_api_ExtensionDt | null): Promise<void>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.model.api.ExtensionDt'
     * @return original return type: 'void'
     */
    addUndeclaredExtensionSync(var0: ca_uhn_fhir_model_api_ExtensionDt | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    getUndeclaredExtensionsByUrl(var0: string | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    getUndeclaredExtensionsByUrlSync(var0: string | null): java_util_List | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getAllUndeclaredExtensions(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getAllUndeclaredExtensionsSync(): java_util_List | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPre(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPreSync(): java_util_List | null;
    /**
     * @return original return type: 'boolean'
     */
    hasFormatComment(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasFormatCommentSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getUserData(var0: string | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getUserDataSync(var0: string | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    setUserData(var0: string | null, var1: BasicOrJavaType | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    setUserDataSync(var0: string | null, var1: BasicOrJavaType | null): void;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPost(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPostSync(): java_util_List | null;
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
     * @return original return type: 'java.lang.String'
     */
    fhirType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirTypeSync(): string | null;
}
declare const BaseDateTimeDt_base: typeof BaseDateTimeDtClass;
/**
 * Class ca.uhn.fhir.model.primitive.BaseDateTimeDt.
 *
 * This actually imports the java class for further use.
 * The class {@link BaseDateTimeDtClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BaseDateTimeDt extends BaseDateTimeDt_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default BaseDateTimeDt;
//# sourceMappingURL=BaseDateTimeDt.d.ts.map