import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { DocumentType as org_w3c_dom_DocumentType, DocumentTypeInterface as org_w3c_dom_DocumentTypeInterface } from "./DocumentType";
import { Document as org_w3c_dom_Document } from "./Document";
/**
 * This class just defines types, you should import {@link DOMImplementation} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DOMImplementationClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getFeature(var0: string | null, var1: string | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getFeatureSync(var0: string | null, var1: string | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.w3c.dom.DocumentType'
     */
    createDocumentType(var0: string | null, var1: string | null, var2: string | null): Promise<org_w3c_dom_DocumentType | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.w3c.dom.DocumentType'
     */
    createDocumentTypeSync(var0: string | null, var1: string | null, var2: string | null): org_w3c_dom_DocumentType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.w3c.dom.DocumentType'
     * @return original return type: 'org.w3c.dom.Document'
     */
    createDocument(var0: string | null, var1: string | null, var2: org_w3c_dom_DocumentType | JavaInterfaceProxy<org_w3c_dom_DocumentTypeInterface> | null): Promise<org_w3c_dom_Document | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.w3c.dom.DocumentType'
     * @return original return type: 'org.w3c.dom.Document'
     */
    createDocumentSync(var0: string | null, var1: string | null, var2: org_w3c_dom_DocumentType | JavaInterfaceProxy<org_w3c_dom_DocumentTypeInterface> | null): org_w3c_dom_Document | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasFeature(var0: string | null, var1: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasFeatureSync(var0: string | null, var1: string | null): boolean;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createDOMImplementationProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface DOMImplementationInterface {
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getFeature(var0: string | null, var1: string | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.w3c.dom.DocumentType'
     */
    createDocumentType(var0: string | null, var1: string | null, var2: string | null): org_w3c_dom_DocumentType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.w3c.dom.DocumentType'
     * @return original return type: 'org.w3c.dom.Document'
     */
    createDocument(var0: string | null, var1: string | null, var2: org_w3c_dom_DocumentType | JavaInterfaceProxy<org_w3c_dom_DocumentTypeInterface> | null): org_w3c_dom_Document | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasFeature(var0: string | null, var1: string | null): boolean;
}
/**
 * Create a proxy for the {@link DOMImplementation} interface.
 * All required methods in {@link DOMImplementationInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createDOMImplementationProxy(methods: DOMImplementationInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<DOMImplementationInterface>;
declare const DOMImplementation_base: typeof DOMImplementationClass;
/**
 * Class org.w3c.dom.DOMImplementation.
 *
 * This actually imports the java class for further use.
 * The class {@link DOMImplementationClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DOMImplementation extends DOMImplementation_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default DOMImplementation;
//# sourceMappingURL=DOMImplementation.d.ts.map