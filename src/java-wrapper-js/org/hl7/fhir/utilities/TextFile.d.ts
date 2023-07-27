/// <reference types="node" />
import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../java/util/List";
import { OutputStream as java_io_OutputStream } from "./../../../../java/io/OutputStream";
import { Boolean as java_lang_Boolean } from "./../../../../java/lang/Boolean";
import { InputStream as java_io_InputStream } from "./../../../../java/io/InputStream";
import { File as java_io_File } from "./../../../../java/io/File";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link TextFile} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TextFileClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    static readAllLines(var0: string | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    static readAllLinesSync(var0: string | null): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.io.OutputStream'
     * @param var2 original type: 'boolean'
     * @return original return type: 'void'
     */
    static stringToStream(var0: string | null, var1: java_io_OutputStream | null, var2: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.io.OutputStream'
     * @param var2 original type: 'boolean'
     * @return original return type: 'void'
     */
    static stringToStreamSync(var0: string | null, var1: java_io_OutputStream | null, var2: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.util.List'
     * @return original return type: 'void'
     */
    static writeAllLines(var0: string | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.util.List'
     * @return original return type: 'void'
     */
    static writeAllLinesSync(var0: string | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'byte[]'
     */
    static fileToBytesNCS(var0: string | null): Promise<Buffer | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'byte[]'
     */
    static fileToBytesNCSSync(var0: string | null): Buffer | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static streamToFile(var0: java_io_InputStream | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static streamToFileSync(var0: java_io_InputStream | null, var1: string | null): void;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'java.lang.String'
     */
    static bytesToString(var0: Buffer | null): Promise<string | null>;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'java.lang.String'
     */
    static bytesToStringSync(var0: Buffer | null): string | null;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'boolean'
     * @return original return type: 'java.lang.String'
     */
    static bytesToString(var0: Buffer | null, var1: java_lang_Boolean | boolean): Promise<string | null>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'boolean'
     * @return original return type: 'java.lang.String'
     */
    static bytesToStringSync(var0: Buffer | null, var1: java_lang_Boolean | boolean): string | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'byte[]'
     */
    static streamToBytes(var0: java_io_InputStream | null): Promise<Buffer | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'byte[]'
     */
    static streamToBytesSync(var0: java_io_InputStream | null): Buffer | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'java.lang.String'
     */
    static streamToString(var0: java_io_InputStream | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'java.lang.String'
     */
    static streamToStringSync(var0: java_io_InputStream | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static stringToFile(var0: string | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static stringToFileSync(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'void'
     */
    static stringToFile(var0: string | null, var1: string | null, var2: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'void'
     */
    static stringToFileSync(var0: string | null, var1: string | null, var2: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    static stringToFile(var0: string | null, var1: java_io_File | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    static stringToFileSync(var0: string | null, var1: java_io_File | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.io.File'
     * @param var2 original type: 'boolean'
     * @return original return type: 'void'
     */
    static stringToFile(var0: string | null, var1: java_io_File | null, var2: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.io.File'
     * @param var2 original type: 'boolean'
     * @return original return type: 'void'
     */
    static stringToFileSync(var0: string | null, var1: java_io_File | null, var2: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'java.lang.String'
     */
    static fileToString(var0: java_io_File | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'java.lang.String'
     */
    static fileToStringSync(var0: java_io_File | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static fileToString(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static fileToStringSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'byte[]'
     */
    static fileToBytes(var0: string | null): Promise<Buffer | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'byte[]'
     */
    static fileToBytesSync(var0: string | null): Buffer | null;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'byte[]'
     */
    static fileToBytes(var0: java_io_File | null): Promise<Buffer | null>;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'byte[]'
     */
    static fileToBytesSync(var0: java_io_File | null): Buffer | null;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    static bytesToFile(var0: Buffer | null, var1: java_io_File | null): Promise<void>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    static bytesToFileSync(var0: Buffer | null, var1: java_io_File | null): void;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static bytesToFile(var0: Buffer | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static bytesToFileSync(var0: Buffer | null, var1: string | null): void;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static appendBytesToFile(var0: Buffer | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static appendBytesToFileSync(var0: Buffer | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'byte[]'
     */
    static stringToBytes(var0: string | null, var1: java_lang_Boolean | boolean): Promise<Buffer | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'byte[]'
     */
    static stringToBytesSync(var0: string | null, var1: java_lang_Boolean | boolean): Buffer | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'byte[]'
     */
    static streamToBytesNoClose(var0: java_io_InputStream | null): Promise<Buffer | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'byte[]'
     */
    static streamToBytesNoCloseSync(var0: java_io_InputStream | null): Buffer | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static streamToFileNoClose(var0: java_io_InputStream | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static streamToFileNoCloseSync(var0: java_io_InputStream | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static stringToFileNoPrefix(var0: string | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    static stringToFileNoPrefixSync(var0: string | null, var1: string | null): void;
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
     * @return original return type: 'org.hl7.fhir.utilities.TextFile'
     */
    static newInstanceAsync(): Promise<TextFile>;
    constructor();
}
declare const TextFile_base: typeof TextFileClass;
/**
 * Class org.hl7.fhir.utilities.TextFile.
 *
 * This actually imports the java class for further use.
 * The class {@link TextFileClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TextFile extends TextFile_base {
}
export default TextFile;
//# sourceMappingURL=TextFile.d.ts.map