import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { XhtmlNode as org_hl7_fhir_utilities_xhtml_XhtmlNode } from "./XhtmlNode";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { List as java_util_List } from "./../../../../../java/util/List";
import { IntFunction as java_util_function_IntFunction, IntFunctionInterface as java_util_function_IntFunctionInterface } from "./../../../../../java/util/function/IntFunction";
import { Iterator as java_util_Iterator } from "./../../../../../java/util/Iterator";
import { Collection as java_util_Collection, CollectionInterface as java_util_CollectionInterface } from "./../../../../../java/util/Collection";
import { ListIterator as java_util_ListIterator } from "./../../../../../java/util/ListIterator";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { UnaryOperator as java_util_function_UnaryOperator, UnaryOperatorInterface as java_util_function_UnaryOperatorInterface } from "./../../../../../java/util/function/UnaryOperator";
import { Spliterator as java_util_Spliterator } from "./../../../../../java/util/Spliterator";
import { Comparator as java_util_Comparator, ComparatorInterface as java_util_ComparatorInterface } from "./../../../../../java/util/Comparator";
import { Stream as java_util_stream_Stream } from "./../../../../../java/util/stream/Stream";
import { Predicate as java_util_function_Predicate, PredicateInterface as java_util_function_PredicateInterface } from "./../../../../../java/util/function/Predicate";
import { Consumer as java_util_function_Consumer, ConsumerInterface as java_util_function_ConsumerInterface } from "./../../../../../java/util/function/Consumer";
/**
 * This class just defines types, you should import {@link XhtmlNodeList} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class XhtmlNodeListClass extends JavaClass {
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     * @return original return type: 'boolean'
     */
    add(var0: org_hl7_fhir_utilities_xhtml_XhtmlNode | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     * @return original return type: 'boolean'
     */
    addSync(var0: org_hl7_fhir_utilities_xhtml_XhtmlNode | null): boolean;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    add(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    addSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     * @return original return type: 'void'
     */
    add(var0: java_lang_Integer | number, var1: org_hl7_fhir_utilities_xhtml_XhtmlNode | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     * @return original return type: 'void'
     */
    addSync(var0: java_lang_Integer | number, var1: org_hl7_fhir_utilities_xhtml_XhtmlNode | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    add(var0: java_lang_Integer | number, var1: BasicOrJavaType | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    addSync(var0: java_lang_Integer | number, var1: BasicOrJavaType | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.Object'
     */
    remove(var0: java_lang_Integer | number): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.Object'
     */
    removeSync(var0: java_lang_Integer | number): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    remove(var0: java_lang_Integer | number): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    removeSync(var0: java_lang_Integer | number): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    remove(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    removeSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.Object'
     */
    get(var0: java_lang_Integer | number): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.Object'
     */
    getSync(var0: java_lang_Integer | number): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    get(var0: java_lang_Integer | number): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    getSync(var0: java_lang_Integer | number): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    indexOf(var0: BasicOrJavaType | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    indexOfSync(var0: BasicOrJavaType | null): number;
    /**
     * @return original return type: 'void'
     */
    clear(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    clearSync(): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    lastIndexOf(var0: BasicOrJavaType | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    lastIndexOfSync(var0: BasicOrJavaType | null): number;
    /**
     * @return original return type: 'boolean'
     */
    isEmpty(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isEmptySync(): boolean;
    /**
     * @return original return type: 'int'
     */
    size(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    sizeSync(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.util.List'
     */
    subList(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.util.List'
     */
    subListSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): java_util_List | null;
    /**
     * @return original return type: 'java.lang.Object[]'
     */
    toArray(): Promise<(BasicOrJavaType | null)[] | null>;
    /**
     * @return original return type: 'java.lang.Object[]'
     */
    toArraySync(): (BasicOrJavaType | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object[]'
     */
    toArray(var0: (BasicOrJavaType | null)[] | null): Promise<(BasicOrJavaType | null)[] | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object[]'
     */
    toArraySync(var0: (BasicOrJavaType | null)[] | null): (BasicOrJavaType | null)[] | null;
    /**
     * @param var0 original type: 'java.util.function.IntFunction'
     * @return original return type: 'java.lang.Object[]'
     */
    toArray(var0: java_util_function_IntFunction | JavaInterfaceProxy<java_util_function_IntFunctionInterface> | null): Promise<(BasicOrJavaType | null)[] | null>;
    /**
     * @param var0 original type: 'java.util.function.IntFunction'
     * @return original return type: 'java.lang.Object[]'
     */
    toArraySync(var0: java_util_function_IntFunction | JavaInterfaceProxy<java_util_function_IntFunctionInterface> | null): (BasicOrJavaType | null)[] | null;
    /**
     * @return original return type: 'java.util.Iterator'
     */
    iterator(): Promise<java_util_Iterator | null>;
    /**
     * @return original return type: 'java.util.Iterator'
     */
    iteratorSync(): java_util_Iterator | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    contains(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    containsSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    addAll(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    addAllSync(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): boolean;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    addAll(var0: java_lang_Integer | number, var1: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    addAllSync(var0: java_lang_Integer | number, var1: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): boolean;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    set(var0: java_lang_Integer | number, var1: BasicOrJavaType | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    setSync(var0: java_lang_Integer | number, var1: BasicOrJavaType | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    set(var0: java_lang_Integer | number, var1: org_hl7_fhir_utilities_xhtml_XhtmlNode | null): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    setSync(var0: java_lang_Integer | number, var1: org_hl7_fhir_utilities_xhtml_XhtmlNode | null): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    removeAll(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    removeAllSync(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    retainAll(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    retainAllSync(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): boolean;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.util.ListIterator'
     */
    listIterator(var0: java_lang_Integer | number): Promise<java_util_ListIterator | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.util.ListIterator'
     */
    listIteratorSync(var0: java_lang_Integer | number): java_util_ListIterator | null;
    /**
     * @return original return type: 'java.util.ListIterator'
     */
    listIterator(): Promise<java_util_ListIterator | null>;
    /**
     * @return original return type: 'java.util.ListIterator'
     */
    listIteratorSync(): java_util_ListIterator | null;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    containsAll(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    containsAllSync(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    addTag(var0: string | null): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    addTagSync(var0: string | null): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    addText(var0: string | null): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    addTextSync(var0: string | null): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setInPara(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setInParaSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setInLink(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setInLinkSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'boolean'
     */
    isInLink(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isInLinkSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isInPara(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isInParaSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    i(): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    iSync(): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    b(): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    bSync(): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    h(var0: java_lang_Integer | number): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    hSync(var0: java_lang_Integer | number): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    code(): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    codeSync(): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    code(var0: string | null): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    codeSync(var0: string | null): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    table(var0: string | null): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    tableSync(var0: string | null): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    th(): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    thSync(): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    li(): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    liSync(): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    tr(): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    trSync(): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    pre(var0: string | null): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    preSync(var0: string | null): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    pre(): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    preSync(): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    h2(): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    h2Sync(): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    h1(): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    h1Sync(): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @return original return type: 'void'
     */
    br(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    brSync(): void;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    td(): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    tdSync(): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    td(var0: string | null): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    tdSync(var0: string | null): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @return original return type: 'void'
     */
    hr(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    hrSync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    an(var0: string | null): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    anSync(var0: string | null): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    an(var0: string | null, var1: string | null): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    anSync(var0: string | null, var1: string | null): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    div(): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    divSync(): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    markdown(var0: string | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    markdownSync(var0: string | null, var1: string | null): void;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    h4(): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    h4Sync(): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    ul(): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    ulSync(): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    tx(var0: string | null): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    txSync(var0: string | null): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    tx(var0: java_lang_Integer | number): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    txSync(var0: java_lang_Integer | number): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    ah(var0: string | null): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    ahSync(var0: string | null): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    ah(var0: string | null, var1: string | null): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    ahSync(var0: string | null, var1: string | null): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    h3(): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    h3Sync(): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    para(): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    paraSync(): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    span(var0: string | null, var1: string | null): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    spanSync(var0: string | null, var1: string | null): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    blockquote(): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    blockquoteSync(): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    img(var0: string | null, var1: string | null, var2: string | null): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    imgSync(var0: string | null, var1: string | null, var2: string | null): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    img(var0: string | null, var1: string | null): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    imgSync(var0: string | null, var1: string | null): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    ahOrCode(var0: string | null, var1: string | null): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    ahOrCodeSync(var0: string | null, var1: string | null): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    ahOrCode(var0: string | null): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    ahOrCodeSync(var0: string | null): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    innerHTML(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    innerHTMLSync(var0: string | null): void;
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
     * @param var0 original type: 'java.util.function.UnaryOperator'
     * @return original return type: 'void'
     */
    replaceAll(var0: java_util_function_UnaryOperator | JavaInterfaceProxy<java_util_function_UnaryOperatorInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.UnaryOperator'
     * @return original return type: 'void'
     */
    replaceAllSync(var0: java_util_function_UnaryOperator | JavaInterfaceProxy<java_util_function_UnaryOperatorInterface> | null): void;
    /**
     * @return original return type: 'java.util.Spliterator'
     */
    spliterator(): Promise<java_util_Spliterator | null>;
    /**
     * @return original return type: 'java.util.Spliterator'
     */
    spliteratorSync(): java_util_Spliterator | null;
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'void'
     */
    sort(var0: java_util_Comparator | JavaInterfaceProxy<java_util_ComparatorInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'void'
     */
    sortSync(var0: java_util_Comparator | JavaInterfaceProxy<java_util_ComparatorInterface> | null): void;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    stream(): Promise<java_util_stream_Stream | null>;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    streamSync(): java_util_stream_Stream | null;
    /**
     * @param var0 original type: 'java.util.function.Predicate'
     * @return original return type: 'boolean'
     */
    removeIf(var0: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.function.Predicate'
     * @return original return type: 'boolean'
     */
    removeIfSync(var0: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): boolean;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    parallelStream(): Promise<java_util_stream_Stream | null>;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    parallelStreamSync(): java_util_stream_Stream | null;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    forEach(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    forEachSync(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null): void;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNodeList'
     */
    static newInstanceAsync(): Promise<XhtmlNodeList>;
    constructor();
}
declare const XhtmlNodeList_base: typeof XhtmlNodeListClass;
/**
 * Class org.hl7.fhir.utilities.xhtml.XhtmlNodeList.
 *
 * This actually imports the java class for further use.
 * The class {@link XhtmlNodeListClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class XhtmlNodeList extends XhtmlNodeList_base {
}
export default XhtmlNodeList;
//# sourceMappingURL=XhtmlNodeList.d.ts.map