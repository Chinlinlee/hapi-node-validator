import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Annotation as java_lang_annotation_Annotation } from "./../annotation/Annotation";
import { Class as java_lang_Class } from "./../Class";
import { Type as java_lang_reflect_Type } from "./Type";
import { AnnotatedType as java_lang_reflect_AnnotatedType } from "./AnnotatedType";
import { Method as java_lang_reflect_Method } from "./Method";
import { Long as java_lang_Long } from "./../Long";
import { Integer as java_lang_Integer } from "./../Integer";
/**
 * This class just defines types, you should import {@link RecordComponent} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class RecordComponentClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    getName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNameSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    getAnnotation(var0: java_lang_Class | null): Promise<java_lang_annotation_Annotation | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    getAnnotationSync(var0: java_lang_Class | null): java_lang_annotation_Annotation | null;
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getAnnotations(): Promise<(java_lang_annotation_Annotation | null)[] | null>;
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getAnnotationsSync(): (java_lang_annotation_Annotation | null)[] | null;
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getDeclaredAnnotations(): Promise<(java_lang_annotation_Annotation | null)[] | null>;
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getDeclaredAnnotationsSync(): (java_lang_annotation_Annotation | null)[] | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getGenericSignature(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getGenericSignatureSync(): string | null;
    /**
     * @return original return type: 'java.lang.reflect.Type'
     */
    getGenericType(): Promise<java_lang_reflect_Type | null>;
    /**
     * @return original return type: 'java.lang.reflect.Type'
     */
    getGenericTypeSync(): java_lang_reflect_Type | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getType(): Promise<java_lang_Class | null>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getTypeSync(): java_lang_Class | null;
    /**
     * @return original return type: 'java.lang.reflect.AnnotatedType'
     */
    getAnnotatedType(): Promise<java_lang_reflect_AnnotatedType | null>;
    /**
     * @return original return type: 'java.lang.reflect.AnnotatedType'
     */
    getAnnotatedTypeSync(): java_lang_reflect_AnnotatedType | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getDeclaringRecord(): Promise<java_lang_Class | null>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getDeclaringRecordSync(): java_lang_Class | null;
    /**
     * @return original return type: 'java.lang.reflect.Method'
     */
    getAccessor(): Promise<java_lang_reflect_Method | null>;
    /**
     * @return original return type: 'java.lang.reflect.Method'
     */
    getAccessorSync(): java_lang_reflect_Method | null;
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
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'boolean'
     */
    isAnnotationPresent(var0: java_lang_Class | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'boolean'
     */
    isAnnotationPresentSync(var0: java_lang_Class | null): boolean;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getAnnotationsByType(var0: java_lang_Class | null): Promise<(java_lang_annotation_Annotation | null)[] | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getAnnotationsByTypeSync(var0: java_lang_Class | null): (java_lang_annotation_Annotation | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    getDeclaredAnnotation(var0: java_lang_Class | null): Promise<java_lang_annotation_Annotation | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    getDeclaredAnnotationSync(var0: java_lang_Class | null): java_lang_annotation_Annotation | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getDeclaredAnnotationsByType(var0: java_lang_Class | null): Promise<(java_lang_annotation_Annotation | null)[] | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getDeclaredAnnotationsByTypeSync(var0: java_lang_Class | null): (java_lang_annotation_Annotation | null)[] | null;
}
declare const RecordComponent_base: typeof RecordComponentClass;
/**
 * Class java.lang.reflect.RecordComponent.
 *
 * This actually imports the java class for further use.
 * The class {@link RecordComponentClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class RecordComponent extends RecordComponent_base {
}
export default RecordComponent;
//# sourceMappingURL=RecordComponent.d.ts.map