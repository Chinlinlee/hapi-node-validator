import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { ClassLoader as java_lang_ClassLoader } from "./../lang/ClassLoader";
import { CodeSource as java_security_CodeSource } from "./CodeSource";
import { Permission as java_security_Permission } from "./Permission";
import { PermissionCollection as java_security_PermissionCollection } from "./PermissionCollection";
import { Principal as java_security_Principal, PrincipalInterface as java_security_PrincipalInterface } from "./Principal";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Class as java_lang_Class } from "./../lang/Class";
/**
 * This class just defines types, you should import {@link ProtectionDomain} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ProtectionDomainClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'java.lang.ClassLoader'
     */
    getClassLoader(): Promise<java_lang_ClassLoader | null>;
    /**
     * @return original return type: 'java.lang.ClassLoader'
     */
    getClassLoaderSync(): java_lang_ClassLoader | null;
    /**
     * @return original return type: 'java.security.CodeSource'
     */
    getCodeSource(): Promise<java_security_CodeSource | null>;
    /**
     * @return original return type: 'java.security.CodeSource'
     */
    getCodeSourceSync(): java_security_CodeSource | null;
    /**
     * @param var0 original type: 'java.security.Permission'
     * @return original return type: 'boolean'
     */
    implies(var0: java_security_Permission | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.security.Permission'
     * @return original return type: 'boolean'
     */
    impliesSync(var0: java_security_Permission | null): boolean;
    /**
     * @return original return type: 'java.security.PermissionCollection'
     */
    getPermissions(): Promise<java_security_PermissionCollection | null>;
    /**
     * @return original return type: 'java.security.PermissionCollection'
     */
    getPermissionsSync(): java_security_PermissionCollection | null;
    /**
     * @return original return type: 'java.security.Principal[]'
     */
    getPrincipals(): Promise<(java_security_Principal | null)[] | null>;
    /**
     * @return original return type: 'java.security.Principal[]'
     */
    getPrincipalsSync(): (java_security_Principal | null)[] | null;
    /**
     * @return original return type: 'boolean'
     */
    staticPermissionsOnly(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    staticPermissionsOnlySync(): boolean;
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
     * @param var0 original type: 'java.security.CodeSource'
     * @param var1 original type: 'java.security.PermissionCollection'
     * @return original return type: 'java.security.ProtectionDomain'
     */
    static newInstanceAsync(var0: java_security_CodeSource | null, var1: java_security_PermissionCollection | null): Promise<ProtectionDomain>;
    /**
     * @param var0 original type: 'java.security.CodeSource'
     * @param var1 original type: 'java.security.PermissionCollection'
     * @param var2 original type: 'java.lang.ClassLoader'
     * @param var3 original type: 'java.security.Principal[]'
     * @return original return type: 'java.security.ProtectionDomain'
     */
    static newInstanceAsync(var0: java_security_CodeSource | null, var1: java_security_PermissionCollection | null, var2: java_lang_ClassLoader | null, var3: (java_security_Principal | JavaInterfaceProxy<java_security_PrincipalInterface> | null)[] | null): Promise<ProtectionDomain>;
    /**
     * @param var0 original type: 'java.security.CodeSource'
     * @param var1 original type: 'java.security.PermissionCollection'
     */
    constructor(var0: java_security_CodeSource | null, var1: java_security_PermissionCollection | null);
    /**
     * @param var0 original type: 'java.security.CodeSource'
     * @param var1 original type: 'java.security.PermissionCollection'
     * @param var2 original type: 'java.lang.ClassLoader'
     * @param var3 original type: 'java.security.Principal[]'
     */
    constructor(var0: java_security_CodeSource | null, var1: java_security_PermissionCollection | null, var2: java_lang_ClassLoader | null, var3: (java_security_Principal | JavaInterfaceProxy<java_security_PrincipalInterface> | null)[] | null);
}
declare const ProtectionDomain_base: typeof ProtectionDomainClass;
/**
 * Class java.security.ProtectionDomain.
 *
 * This actually imports the java class for further use.
 * The class {@link ProtectionDomainClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ProtectionDomain extends ProtectionDomain_base {
}
export default ProtectionDomain;
//# sourceMappingURL=ProtectionDomain.d.ts.map