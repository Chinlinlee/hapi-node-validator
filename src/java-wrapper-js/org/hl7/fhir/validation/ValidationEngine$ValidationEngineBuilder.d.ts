import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { FhirPublication as org_hl7_fhir_utilities_FhirPublication } from "./../utilities/FhirPublication";
import { ValidationEngine as org_hl7_fhir_validation_ValidationEngine } from "./ValidationEngine";
import { Boolean as java_lang_Boolean } from "./../../../../java/lang/Boolean";
import { TimeTracker as org_hl7_fhir_utilities_TimeTracker } from "./../utilities/TimeTracker";
import { IWorkerContext$ILoggingService as org_hl7_fhir_r5_context_IWorkerContext$ILoggingService, IWorkerContext$ILoggingServiceInterface as org_hl7_fhir_r5_context_IWorkerContext$ILoggingServiceInterface } from "./../r5/context/IWorkerContext$ILoggingService";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link ValidationEngine$ValidationEngineBuilder} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ValidationEngine$ValidationEngineBuilderClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.utilities.FhirPublication'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    withTxServer(var0: string | null, var1: string | null, var2: org_hl7_fhir_utilities_FhirPublication | null): Promise<ValidationEngine$ValidationEngineBuilder | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.utilities.FhirPublication'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    withTxServerSync(var0: string | null, var1: string | null, var2: org_hl7_fhir_utilities_FhirPublication | null): ValidationEngine$ValidationEngineBuilder | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    fromSource(var0: string | null): Promise<org_hl7_fhir_validation_ValidationEngine | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    fromSourceSync(var0: string | null): org_hl7_fhir_validation_ValidationEngine | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    withVersion(var0: string | null): Promise<ValidationEngine$ValidationEngineBuilder | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    withVersionSync(var0: string | null): ValidationEngine$ValidationEngineBuilder | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    withTerminologyCachePath(var0: string | null): Promise<ValidationEngine$ValidationEngineBuilder | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    withTerminologyCachePathSync(var0: string | null): ValidationEngine$ValidationEngineBuilder | null;
    /**
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    withNoTerminologyServer(): Promise<ValidationEngine$ValidationEngineBuilder | null>;
    /**
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    withNoTerminologyServerSync(): ValidationEngine$ValidationEngineBuilder | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    withCanRunWithoutTerminologyServer(var0: java_lang_Boolean | boolean): Promise<ValidationEngine$ValidationEngineBuilder | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    withCanRunWithoutTerminologyServerSync(var0: java_lang_Boolean | boolean): ValidationEngine$ValidationEngineBuilder | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.TimeTracker'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    withTimeTracker(var0: org_hl7_fhir_utilities_TimeTracker | null): Promise<ValidationEngine$ValidationEngineBuilder | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.TimeTracker'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    withTimeTrackerSync(var0: org_hl7_fhir_utilities_TimeTracker | null): ValidationEngine$ValidationEngineBuilder | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    withTHO(var0: java_lang_Boolean | boolean): Promise<ValidationEngine$ValidationEngineBuilder | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    withTHOSync(var0: java_lang_Boolean | boolean): ValidationEngine$ValidationEngineBuilder | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContext$ILoggingService'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    withLoggingService(var0: org_hl7_fhir_r5_context_IWorkerContext$ILoggingService | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$ILoggingServiceInterface> | null): Promise<ValidationEngine$ValidationEngineBuilder | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContext$ILoggingService'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    withLoggingServiceSync(var0: org_hl7_fhir_r5_context_IWorkerContext$ILoggingService | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$ILoggingServiceInterface> | null): ValidationEngine$ValidationEngineBuilder | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    withUserAgent(var0: string | null): Promise<ValidationEngine$ValidationEngineBuilder | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    withUserAgentSync(var0: string | null): ValidationEngine$ValidationEngineBuilder | null;
    /**
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    fromNothing(): Promise<org_hl7_fhir_validation_ValidationEngine | null>;
    /**
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    fromNothingSync(): org_hl7_fhir_validation_ValidationEngine | null;
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
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    static newInstanceAsync(): Promise<ValidationEngine$ValidationEngineBuilder>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.String'
     * @param var5 original type: 'org.hl7.fhir.utilities.FhirPublication'
     * @param var6 original type: 'org.hl7.fhir.utilities.TimeTracker'
     * @param var7 original type: 'boolean'
     * @param var8 original type: 'org.hl7.fhir.r5.context.IWorkerContext$ILoggingService'
     * @param var9 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder'
     */
    static newInstanceAsync(var0: string | null, var1: string | null, var2: string | null, var3: string | null, var4: string | null, var5: org_hl7_fhir_utilities_FhirPublication | null, var6: org_hl7_fhir_utilities_TimeTracker | null, var7: java_lang_Boolean | boolean, var8: org_hl7_fhir_r5_context_IWorkerContext$ILoggingService | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$ILoggingServiceInterface> | null, var9: java_lang_Boolean | boolean): Promise<ValidationEngine$ValidationEngineBuilder>;
    constructor();
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.String'
     * @param var5 original type: 'org.hl7.fhir.utilities.FhirPublication'
     * @param var6 original type: 'org.hl7.fhir.utilities.TimeTracker'
     * @param var7 original type: 'boolean'
     * @param var8 original type: 'org.hl7.fhir.r5.context.IWorkerContext$ILoggingService'
     * @param var9 original type: 'boolean'
     */
    constructor(var0: string | null, var1: string | null, var2: string | null, var3: string | null, var4: string | null, var5: org_hl7_fhir_utilities_FhirPublication | null, var6: org_hl7_fhir_utilities_TimeTracker | null, var7: java_lang_Boolean | boolean, var8: org_hl7_fhir_r5_context_IWorkerContext$ILoggingService | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$ILoggingServiceInterface> | null, var9: java_lang_Boolean | boolean);
}
declare const ValidationEngine$ValidationEngineBuilder_base: typeof ValidationEngine$ValidationEngineBuilderClass;
/**
 * Class org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder.
 *
 * This actually imports the java class for further use.
 * The class {@link ValidationEngine$ValidationEngineBuilderClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ValidationEngine$ValidationEngineBuilder extends ValidationEngine$ValidationEngineBuilder_base {
}
export default ValidationEngine$ValidationEngineBuilder;
//# sourceMappingURL=ValidationEngine$ValidationEngineBuilder.d.ts.map