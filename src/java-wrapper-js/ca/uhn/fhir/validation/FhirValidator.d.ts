import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { IValidatorModule as ca_uhn_fhir_validation_IValidatorModule, IValidatorModuleInterface as ca_uhn_fhir_validation_IValidatorModuleInterface } from "./IValidatorModule";
import { Boolean as java_lang_Boolean } from "./../../../../java/lang/Boolean";
import { IInterceptorBroadcaster as ca_uhn_fhir_interceptor_api_IInterceptorBroadcaster, IInterceptorBroadcasterInterface as ca_uhn_fhir_interceptor_api_IInterceptorBroadcasterInterface } from "./../interceptor/api/IInterceptorBroadcaster";
import { ExecutorService as java_util_concurrent_ExecutorService, ExecutorServiceInterface as java_util_concurrent_ExecutorServiceInterface } from "./../../../../java/util/concurrent/ExecutorService";
import { ValidationResult as ca_uhn_fhir_validation_ValidationResult } from "./ValidationResult";
import { IBaseResource as org_hl7_fhir_instance_model_api_IBaseResource, IBaseResourceInterface as org_hl7_fhir_instance_model_api_IBaseResourceInterface } from "./../../../../org/hl7/fhir/instance/model/api/IBaseResource";
import { ValidationOptions as ca_uhn_fhir_validation_ValidationOptions } from "./ValidationOptions";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
import { FhirContext as ca_uhn_fhir_context_FhirContext } from "./../context/FhirContext";
/**
 * This class just defines types, you should import {@link FhirValidator} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FhirValidatorClass extends JavaClass {
    /**
     * @param var0 original type: 'ca.uhn.fhir.validation.IValidatorModule'
     * @return original return type: 'ca.uhn.fhir.validation.FhirValidator'
     */
    registerValidatorModule(var0: ca_uhn_fhir_validation_IValidatorModule | JavaInterfaceProxy<ca_uhn_fhir_validation_IValidatorModuleInterface> | null): Promise<FhirValidator | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.validation.IValidatorModule'
     * @return original return type: 'ca.uhn.fhir.validation.FhirValidator'
     */
    registerValidatorModuleSync(var0: ca_uhn_fhir_validation_IValidatorModule | JavaInterfaceProxy<ca_uhn_fhir_validation_IValidatorModuleInterface> | null): FhirValidator | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.validation.FhirValidator'
     */
    setValidateAgainstStandardSchema(var0: java_lang_Boolean | boolean): Promise<FhirValidator | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.validation.FhirValidator'
     */
    setValidateAgainstStandardSchemaSync(var0: java_lang_Boolean | boolean): FhirValidator | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.validation.IValidatorModule'
     * @return original return type: 'void'
     */
    unregisterValidatorModule(var0: ca_uhn_fhir_validation_IValidatorModule | JavaInterfaceProxy<ca_uhn_fhir_validation_IValidatorModuleInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.validation.IValidatorModule'
     * @return original return type: 'void'
     */
    unregisterValidatorModuleSync(var0: ca_uhn_fhir_validation_IValidatorModule | JavaInterfaceProxy<ca_uhn_fhir_validation_IValidatorModuleInterface> | null): void;
    /**
     * @return original return type: 'boolean'
     */
    isValidateAgainstStandardSchema(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isValidateAgainstStandardSchemaSync(): boolean;
    /**
     * @param var0 original type: 'ca.uhn.fhir.interceptor.api.IInterceptorBroadcaster'
     * @return original return type: 'void'
     */
    setInterceptorBroadcaster(var0: ca_uhn_fhir_interceptor_api_IInterceptorBroadcaster | JavaInterfaceProxy<ca_uhn_fhir_interceptor_api_IInterceptorBroadcasterInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.interceptor.api.IInterceptorBroadcaster'
     * @return original return type: 'void'
     */
    setInterceptorBroadcasterSync(var0: ca_uhn_fhir_interceptor_api_IInterceptorBroadcaster | JavaInterfaceProxy<ca_uhn_fhir_interceptor_api_IInterceptorBroadcasterInterface> | null): void;
    /**
     * @return original return type: 'boolean'
     */
    isConcurrentBundleValidation(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isConcurrentBundleValidationSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isSkipContainedReferenceValidation(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isSkipContainedReferenceValidationSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.validation.FhirValidator'
     */
    setConcurrentBundleValidation(var0: java_lang_Boolean | boolean): Promise<FhirValidator | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.validation.FhirValidator'
     */
    setConcurrentBundleValidationSync(var0: java_lang_Boolean | boolean): FhirValidator | null;
    /**
     * @param var0 original type: 'java.util.concurrent.ExecutorService'
     * @return original return type: 'ca.uhn.fhir.validation.FhirValidator'
     */
    setExecutorService(var0: java_util_concurrent_ExecutorService | JavaInterfaceProxy<java_util_concurrent_ExecutorServiceInterface> | null): Promise<FhirValidator | null>;
    /**
     * @param var0 original type: 'java.util.concurrent.ExecutorService'
     * @return original return type: 'ca.uhn.fhir.validation.FhirValidator'
     */
    setExecutorServiceSync(var0: java_util_concurrent_ExecutorService | JavaInterfaceProxy<java_util_concurrent_ExecutorServiceInterface> | null): FhirValidator | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.validation.ValidationResult'
     */
    validateWithResult(var0: string | null): Promise<ca_uhn_fhir_validation_ValidationResult | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.validation.ValidationResult'
     */
    validateWithResultSync(var0: string | null): ca_uhn_fhir_validation_ValidationResult | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     * @return original return type: 'ca.uhn.fhir.validation.ValidationResult'
     */
    validateWithResult(var0: org_hl7_fhir_instance_model_api_IBaseResource | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseResourceInterface> | null): Promise<ca_uhn_fhir_validation_ValidationResult | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     * @return original return type: 'ca.uhn.fhir.validation.ValidationResult'
     */
    validateWithResultSync(var0: org_hl7_fhir_instance_model_api_IBaseResource | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseResourceInterface> | null): ca_uhn_fhir_validation_ValidationResult | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'ca.uhn.fhir.validation.ValidationOptions'
     * @return original return type: 'ca.uhn.fhir.validation.ValidationResult'
     */
    validateWithResult(var0: string | null, var1: ca_uhn_fhir_validation_ValidationOptions | null): Promise<ca_uhn_fhir_validation_ValidationResult | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'ca.uhn.fhir.validation.ValidationOptions'
     * @return original return type: 'ca.uhn.fhir.validation.ValidationResult'
     */
    validateWithResultSync(var0: string | null, var1: ca_uhn_fhir_validation_ValidationOptions | null): ca_uhn_fhir_validation_ValidationResult | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     * @param var1 original type: 'ca.uhn.fhir.validation.ValidationOptions'
     * @return original return type: 'ca.uhn.fhir.validation.ValidationResult'
     */
    validateWithResult(var0: org_hl7_fhir_instance_model_api_IBaseResource | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseResourceInterface> | null, var1: ca_uhn_fhir_validation_ValidationOptions | null): Promise<ca_uhn_fhir_validation_ValidationResult | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     * @param var1 original type: 'ca.uhn.fhir.validation.ValidationOptions'
     * @return original return type: 'ca.uhn.fhir.validation.ValidationResult'
     */
    validateWithResultSync(var0: org_hl7_fhir_instance_model_api_IBaseResource | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseResourceInterface> | null, var1: ca_uhn_fhir_validation_ValidationOptions | null): ca_uhn_fhir_validation_ValidationResult | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.validation.FhirValidator'
     */
    setSkipContainedReferenceValidation(var0: java_lang_Boolean | boolean): Promise<FhirValidator | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.validation.FhirValidator'
     */
    setSkipContainedReferenceValidationSync(var0: java_lang_Boolean | boolean): FhirValidator | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.validation.FhirValidator'
     */
    setValidateAgainstStandardSchematron(var0: java_lang_Boolean | boolean): Promise<FhirValidator | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.validation.FhirValidator'
     */
    setValidateAgainstStandardSchematronSync(var0: java_lang_Boolean | boolean): FhirValidator | null;
    /**
     * @return original return type: 'boolean'
     */
    isValidateAgainstStandardSchematron(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isValidateAgainstStandardSchematronSync(): boolean;
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
     * @param var0 original type: 'ca.uhn.fhir.context.FhirContext'
     * @return original return type: 'ca.uhn.fhir.validation.FhirValidator'
     */
    static newInstanceAsync(var0: ca_uhn_fhir_context_FhirContext | null): Promise<FhirValidator>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.FhirContext'
     */
    constructor(var0: ca_uhn_fhir_context_FhirContext | null);
}
declare const FhirValidator_base: typeof FhirValidatorClass;
/**
 * Class ca.uhn.fhir.validation.FhirValidator.
 *
 * This actually imports the java class for further use.
 * The class {@link FhirValidatorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FhirValidator extends FhirValidator_base {
}
export default FhirValidator;
//# sourceMappingURL=FhirValidator.d.ts.map