import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { NpmPackage as org_hl7_fhir_utilities_npm_NpmPackage } from "./NpmPackage";
import { JsonObject as org_hl7_fhir_utilities_json_model_JsonObject } from "./../json/model/JsonObject";
/**
 * This class just defines types, you should import {@link NpmPackage$PackageResourceInformation} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class NpmPackage$PackageResourceInformationClass extends JavaClass {
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
     * @return original return type: 'java.lang.String'
     */
    getStatedType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getStatedTypeSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSupplements(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSupplementsSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getFilename(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getFilenameSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getUrl(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getUrlSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getResourceType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getResourceTypeSync(): string | null;
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
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage$PackageResourceInformation'
     */
    static newInstanceAsync(var0: org_hl7_fhir_utilities_npm_NpmPackage | null, var1: string | null, var2: org_hl7_fhir_utilities_json_model_JsonObject | null): Promise<NpmPackage$PackageResourceInformation>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    constructor(var0: org_hl7_fhir_utilities_npm_NpmPackage | null, var1: string | null, var2: org_hl7_fhir_utilities_json_model_JsonObject | null);
}
declare const NpmPackage$PackageResourceInformation_base: typeof NpmPackage$PackageResourceInformationClass;
/**
 * Class org.hl7.fhir.utilities.npm.NpmPackage$PackageResourceInformation.
 *
 * This actually imports the java class for further use.
 * The class {@link NpmPackage$PackageResourceInformationClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class NpmPackage$PackageResourceInformation extends NpmPackage$PackageResourceInformation_base {
}
export default NpmPackage$PackageResourceInformation;
//# sourceMappingURL=NpmPackage$PackageResourceInformation.d.ts.map