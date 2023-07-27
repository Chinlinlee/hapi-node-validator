import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../java/util/List";
import { NpmPackage as org_hl7_fhir_utilities_npm_NpmPackage } from "./../../../hl7/fhir/utilities/npm/NpmPackage";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link IgResponse} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IgResponseClass extends JavaClass {
    /**
     * Original type: 'java.lang.String'
     */
    id: string | null;
    /**
     * Original type: 'java.lang.String'
     */
    version: string | null;
    /**
     * Original type: 'java.util.List'
     */
    profiles: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getId(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getIdSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getVersion(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getVersionSync(): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     * @return original return type: 'org.mitre.inferno.rest.IgResponse'
     */
    static fromPackage(var0: org_hl7_fhir_utilities_npm_NpmPackage | null): Promise<IgResponse | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     * @return original return type: 'org.mitre.inferno.rest.IgResponse'
     */
    static fromPackageSync(var0: org_hl7_fhir_utilities_npm_NpmPackage | null): IgResponse | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getProfiles(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getProfilesSync(): java_util_List | null;
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
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.util.List'
     * @return original return type: 'org.mitre.inferno.rest.IgResponse'
     */
    static newInstanceAsync(var0: string | null, var1: string | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<IgResponse>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.util.List'
     */
    constructor(var0: string | null, var1: string | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null);
}
declare const IgResponse_base: typeof IgResponseClass;
/**
 * Class org.mitre.inferno.rest.IgResponse.
 *
 * This actually imports the java class for further use.
 * The class {@link IgResponseClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IgResponse extends IgResponse_base {
}
export default IgResponse;
//# sourceMappingURL=IgResponse.d.ts.map