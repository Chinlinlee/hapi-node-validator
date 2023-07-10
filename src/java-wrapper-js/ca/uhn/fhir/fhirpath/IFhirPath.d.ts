import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { List as java_util_List } from "./../../../../java/util/List";
import { IBase as org_hl7_fhir_instance_model_api_IBase, IBaseInterface as org_hl7_fhir_instance_model_api_IBaseInterface } from "./../../../../org/hl7/fhir/instance/model/api/IBase";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
import { Optional as java_util_Optional } from "./../../../../java/util/Optional";
import { IFhirPathEvaluationContext as ca_uhn_fhir_fhirpath_IFhirPathEvaluationContext, IFhirPathEvaluationContextInterface as ca_uhn_fhir_fhirpath_IFhirPathEvaluationContextInterface } from "./IFhirPathEvaluationContext";
/**
 * This class just defines types, you should import {@link IFhirPath} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IFhirPathClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    parse(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    parseSync(var0: string | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBase'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.Class'
     * @return original return type: 'java.util.List'
     */
    evaluate(var0: org_hl7_fhir_instance_model_api_IBase | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseInterface> | null, var1: string | null, var2: java_lang_Class | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBase'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.Class'
     * @return original return type: 'java.util.List'
     */
    evaluateSync(var0: org_hl7_fhir_instance_model_api_IBase | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseInterface> | null, var1: string | null, var2: java_lang_Class | null): java_util_List | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBase'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.Class'
     * @return original return type: 'java.util.Optional'
     */
    evaluateFirst(var0: org_hl7_fhir_instance_model_api_IBase | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseInterface> | null, var1: string | null, var2: java_lang_Class | null): Promise<java_util_Optional | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBase'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.Class'
     * @return original return type: 'java.util.Optional'
     */
    evaluateFirstSync(var0: org_hl7_fhir_instance_model_api_IBase | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseInterface> | null, var1: string | null, var2: java_lang_Class | null): java_util_Optional | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.fhirpath.IFhirPathEvaluationContext'
     * @return original return type: 'void'
     */
    setEvaluationContext(var0: ca_uhn_fhir_fhirpath_IFhirPathEvaluationContext | JavaInterfaceProxy<ca_uhn_fhir_fhirpath_IFhirPathEvaluationContextInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.fhirpath.IFhirPathEvaluationContext'
     * @return original return type: 'void'
     */
    setEvaluationContextSync(var0: ca_uhn_fhir_fhirpath_IFhirPathEvaluationContext | JavaInterfaceProxy<ca_uhn_fhir_fhirpath_IFhirPathEvaluationContextInterface> | null): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIFhirPathProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IFhirPathInterface {
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    parse(var0: string | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBase'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.Class'
     * @return original return type: 'java.util.List'
     */
    evaluate(var0: org_hl7_fhir_instance_model_api_IBase | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseInterface> | null, var1: string | null, var2: java_lang_Class | null): java_util_List | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBase'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.Class'
     * @return original return type: 'java.util.Optional'
     */
    evaluateFirst(var0: org_hl7_fhir_instance_model_api_IBase | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseInterface> | null, var1: string | null, var2: java_lang_Class | null): java_util_Optional | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.fhirpath.IFhirPathEvaluationContext'
     * @return original return type: 'void'
     */
    setEvaluationContext(var0: ca_uhn_fhir_fhirpath_IFhirPathEvaluationContext | JavaInterfaceProxy<ca_uhn_fhir_fhirpath_IFhirPathEvaluationContextInterface> | null): void;
}
/**
 * Create a proxy for the {@link IFhirPath} interface.
 * All required methods in {@link IFhirPathInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIFhirPathProxy(methods: IFhirPathInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IFhirPathInterface>;
declare const IFhirPath_base: typeof IFhirPathClass;
/**
 * Class ca.uhn.fhir.fhirpath.IFhirPath.
 *
 * This actually imports the java class for further use.
 * The class {@link IFhirPathClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IFhirPath extends IFhirPath_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IFhirPath;
//# sourceMappingURL=IFhirPath.d.ts.map