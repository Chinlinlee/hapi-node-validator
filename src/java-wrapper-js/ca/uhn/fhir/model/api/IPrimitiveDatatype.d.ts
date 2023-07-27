import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { IPrimitiveType as org_hl7_fhir_instance_model_api_IPrimitiveType } from "./../../../../../org/hl7/fhir/instance/model/api/IPrimitiveType";
import { List as java_util_List } from "./../../../../../java/util/List";
/**
 * This class just defines types, you should import {@link IPrimitiveDatatype} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IPrimitiveDatatypeClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.Object'
     */
    getValue(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getValueSync(): BasicOrJavaType | null;
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
     * @return original return type: 'java.lang.String'
     */
    getValueAsString(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getValueAsStringSync(): string | null;
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
     * @return original return type: 'boolean'
     */
    isEmpty(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isEmptySync(): boolean;
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
     * @return original return type: 'boolean'
     */
    hasFormatComment(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasFormatCommentSync(): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPre(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPreSync(): java_util_List | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPost(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPostSync(): java_util_List | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirTypeSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValue(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueSync(): boolean;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIPrimitiveDatatypeProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IPrimitiveDatatypeInterface {
    /**
     * @return original return type: 'java.lang.Object'
     */
    getValue(): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IPrimitiveType'
     */
    setValue(var0: BasicOrJavaType | null): org_hl7_fhir_instance_model_api_IPrimitiveType | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getValueAsString(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setValueAsString(var0: string | null): void;
    /**
     * @return original return type: 'boolean'
     */
    isEmpty(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getUserData(var0: string | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    setUserData(var0: string | null, var1: BasicOrJavaType | null): void;
    /**
     * @return original return type: 'boolean'
     */
    hasFormatComment(): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPre(): java_util_List | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPost(): java_util_List | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirType?(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValue(): boolean;
}
/**
 * Create a proxy for the {@link IPrimitiveDatatype} interface.
 * All required methods in {@link IPrimitiveDatatypeInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIPrimitiveDatatypeProxy(methods: IPrimitiveDatatypeInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IPrimitiveDatatypeInterface>;
declare const IPrimitiveDatatype_base: typeof IPrimitiveDatatypeClass;
/**
 * Class ca.uhn.fhir.model.api.IPrimitiveDatatype.
 *
 * This actually imports the java class for further use.
 * The class {@link IPrimitiveDatatypeClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IPrimitiveDatatype extends IPrimitiveDatatype_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IPrimitiveDatatype;
//# sourceMappingURL=IPrimitiveDatatype.d.ts.map