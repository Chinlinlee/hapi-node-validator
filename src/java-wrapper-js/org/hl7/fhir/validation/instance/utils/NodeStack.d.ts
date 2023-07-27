import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Element as org_hl7_fhir_r5_elementmodel_Element } from "./../../../r5/elementmodel/Element";
import { Integer as java_lang_Integer } from "./../../../../../../java/lang/Integer";
import { ElementDefinition as org_hl7_fhir_r5_model_ElementDefinition } from "./../../../r5/model/ElementDefinition";
import { Boolean as java_lang_Boolean } from "./../../../../../../java/lang/Boolean";
import { List as java_util_List } from "./../../../../../../java/util/List";
import { Map as java_util_Map } from "./../../../../../../java/util/Map";
import { Long as java_lang_Long } from "./../../../../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../../../../java/lang/Class";
import { IWorkerContext as org_hl7_fhir_r5_context_IWorkerContext, IWorkerContextInterface as org_hl7_fhir_r5_context_IWorkerContextInterface } from "./../../../r5/context/IWorkerContext";
/**
 * This class just defines types, you should import {@link NodeStack} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class NodeStackClass extends JavaClass {
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
    line(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    lineSync(): number;
    /**
     * @return original return type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     */
    getParent(): Promise<NodeStack | null>;
    /**
     * @return original return type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     */
    getParentSync(): NodeStack | null;
    /**
     * @return original return type: 'int'
     */
    depth(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    depthSync(): number;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var1 original type: 'int'
     * @param var2 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var3 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @return original return type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     */
    push(var0: org_hl7_fhir_r5_elementmodel_Element | null, var1: java_lang_Integer | number, var2: org_hl7_fhir_r5_model_ElementDefinition | null, var3: org_hl7_fhir_r5_model_ElementDefinition | null): Promise<NodeStack | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var1 original type: 'int'
     * @param var2 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var3 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @return original return type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     */
    pushSync(var0: org_hl7_fhir_r5_elementmodel_Element | null, var1: java_lang_Integer | number, var2: org_hl7_fhir_r5_model_ElementDefinition | null, var3: org_hl7_fhir_r5_model_ElementDefinition | null): NodeStack | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isPrimitiveType(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isPrimitiveTypeSync(var0: string | null): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    getElement(): Promise<org_hl7_fhir_r5_elementmodel_Element | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    getElementSync(): org_hl7_fhir_r5_elementmodel_Element | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLiteralPath(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLiteralPathSync(): string | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setContained(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setContainedSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'int'
     */
    col(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    colSync(): number;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var1 original type: 'int'
     * @param var2 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var3 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @return original return type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     */
    pushTarget(var0: org_hl7_fhir_r5_elementmodel_Element | null, var1: java_lang_Integer | number, var2: org_hl7_fhir_r5_model_ElementDefinition | null, var3: org_hl7_fhir_r5_model_ElementDefinition | null): Promise<NodeStack | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var1 original type: 'int'
     * @param var2 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var3 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @return original return type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     */
    pushTargetSync(var0: org_hl7_fhir_r5_elementmodel_Element | null, var1: java_lang_Integer | number, var2: org_hl7_fhir_r5_model_ElementDefinition | null, var3: org_hl7_fhir_r5_model_ElementDefinition | null): NodeStack | null;
    /**
     * @return original return type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     */
    resetIds(): Promise<NodeStack | null>;
    /**
     * @return original return type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     */
    resetIdsSync(): NodeStack | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getLogicalPaths(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getLogicalPathsSync(): java_util_List | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getWorkingLang(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getWorkingLangSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    isContained(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isContainedSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    pathComment(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    pathCommentSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setWorkingLang(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setWorkingLangSync(var0: string | null): void;
    /**
     * @return original return type: 'java.util.Map'
     */
    getIds(): Promise<java_util_Map | null>;
    /**
     * @return original return type: 'java.util.Map'
     */
    getIdsSync(): java_util_Map | null;
    /**
     * @return original return type: 'boolean'
     */
    isResetPoint(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isResetPointSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'java.lang.String'
     */
    addToLiteralPath(var0: (string | null)[] | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'java.lang.String'
     */
    addToLiteralPathSync(var0: (string | null)[] | null): string | null;
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
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContext'
     * @param var1 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     */
    static newInstanceAsync(var0: org_hl7_fhir_r5_context_IWorkerContext | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContextInterface> | null, var1: org_hl7_fhir_r5_elementmodel_Element | null, var2: string | null, var3: string | null): Promise<NodeStack>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContext'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     */
    static newInstanceAsync(var0: org_hl7_fhir_r5_context_IWorkerContext | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContextInterface> | null, var1: string | null, var2: org_hl7_fhir_r5_elementmodel_Element | null, var3: string | null): Promise<NodeStack>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContext'
     * @return original return type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     */
    static newInstanceAsync(var0: org_hl7_fhir_r5_context_IWorkerContext | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContextInterface> | null): Promise<NodeStack>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContext'
     * @param var1 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     */
    constructor(var0: org_hl7_fhir_r5_context_IWorkerContext | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContextInterface> | null, var1: org_hl7_fhir_r5_elementmodel_Element | null, var2: string | null, var3: string | null);
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContext'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var3 original type: 'java.lang.String'
     */
    constructor(var0: org_hl7_fhir_r5_context_IWorkerContext | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContextInterface> | null, var1: string | null, var2: org_hl7_fhir_r5_elementmodel_Element | null, var3: string | null);
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContext'
     */
    constructor(var0: org_hl7_fhir_r5_context_IWorkerContext | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContextInterface> | null);
}
declare const NodeStack_base: typeof NodeStackClass;
/**
 * Class org.hl7.fhir.validation.instance.utils.NodeStack.
 *
 * This actually imports the java class for further use.
 * The class {@link NodeStackClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class NodeStack extends NodeStack_base {
}
export default NodeStack;
//# sourceMappingURL=NodeStack.d.ts.map