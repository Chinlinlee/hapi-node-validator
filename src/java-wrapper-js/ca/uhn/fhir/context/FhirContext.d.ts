import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { IFhirVersion as ca_uhn_fhir_model_api_IFhirVersion } from "./../model/api/IFhirVersion";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
import { IBaseResource as org_hl7_fhir_instance_model_api_IBaseResource, IBaseResourceInterface as org_hl7_fhir_instance_model_api_IBaseResourceInterface } from "./../../../../org/hl7/fhir/instance/model/api/IBaseResource";
import { IPrimitiveType as org_hl7_fhir_instance_model_api_IPrimitiveType } from "./../../../../org/hl7/fhir/instance/model/api/IPrimitiveType";
import { Boolean as java_lang_Boolean } from "./../../../../java/lang/Boolean";
import { IParserErrorHandler as ca_uhn_fhir_parser_IParserErrorHandler, IParserErrorHandlerInterface as ca_uhn_fhir_parser_IParserErrorHandlerInterface } from "./../parser/IParserErrorHandler";
import { IFhirValidatorFactory as ca_uhn_fhir_context_IFhirValidatorFactory, IFhirValidatorFactoryInterface as ca_uhn_fhir_context_IFhirValidatorFactoryInterface } from "./IFhirValidatorFactory";
import { Collection as java_util_Collection, CollectionInterface as java_util_CollectionInterface } from "./../../../../java/util/Collection";
import { IGenericClient as ca_uhn_fhir_rest_client_api_IGenericClient } from "./../rest/client/api/IGenericClient";
import { RuntimeChildUndeclaredExtensionDefinition as ca_uhn_fhir_context_RuntimeChildUndeclaredExtensionDefinition } from "./RuntimeChildUndeclaredExtensionDefinition";
import { IValidationSupport as ca_uhn_fhir_context_support_IValidationSupport, IValidationSupportInterface as ca_uhn_fhir_context_support_IValidationSupportInterface } from "./support/IValidationSupport";
import { IRestfulClientFactory as ca_uhn_fhir_rest_client_api_IRestfulClientFactory, IRestfulClientFactoryInterface as ca_uhn_fhir_rest_client_api_IRestfulClientFactoryInterface } from "./../rest/client/api/IRestfulClientFactory";
import { HapiLocalizer as ca_uhn_fhir_i18n_HapiLocalizer } from "./../i18n/HapiLocalizer";
import { FhirVersionEnum as ca_uhn_fhir_context_FhirVersionEnum } from "./FhirVersionEnum";
import { IFhirPath as ca_uhn_fhir_fhirpath_IFhirPath } from "./../fhirpath/IFhirPath";
import { IVersionSpecificBundleFactory as ca_uhn_fhir_rest_api_IVersionSpecificBundleFactory } from "./../rest/api/IVersionSpecificBundleFactory";
import { IParser as ca_uhn_fhir_parser_IParser } from "./../parser/IParser";
import { ParserOptions as ca_uhn_fhir_context_ParserOptions } from "./ParserOptions";
import { Set as java_util_Set } from "./../../../../java/util/Set";
import { FhirTerser as ca_uhn_fhir_util_FhirTerser } from "./../util/FhirTerser";
import { FhirValidator as ca_uhn_fhir_validation_FhirValidator } from "./../validation/FhirValidator";
import { ViewGenerator as ca_uhn_fhir_model_view_ViewGenerator } from "./../model/view/ViewGenerator";
import { IRestfulClient as ca_uhn_fhir_rest_client_api_IRestfulClient } from "./../rest/client/api/IRestfulClient";
import { INarrativeGenerator as ca_uhn_fhir_narrative_INarrativeGenerator, INarrativeGeneratorInterface as ca_uhn_fhir_narrative_INarrativeGeneratorInterface } from "./../narrative/INarrativeGenerator";
import { RuntimeResourceDefinition as ca_uhn_fhir_context_RuntimeResourceDefinition } from "./RuntimeResourceDefinition";
import { PerformanceOptionsEnum as ca_uhn_fhir_context_PerformanceOptionsEnum } from "./PerformanceOptionsEnum";
import { BaseRuntimeElementDefinition as ca_uhn_fhir_context_BaseRuntimeElementDefinition } from "./BaseRuntimeElementDefinition";
import { AddProfileTagEnum as ca_uhn_fhir_context_api_AddProfileTagEnum } from "./api/AddProfileTagEnum";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
/**
 * This class just defines types, you should import {@link FhirContext} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FhirContextClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'ca.uhn.fhir.model.api.IFhirVersion'
     */
    getVersion(): Promise<ca_uhn_fhir_model_api_IFhirVersion | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.model.api.IFhirVersion'
     */
    getVersionSync(): ca_uhn_fhir_model_api_IFhirVersion | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getResourceType(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getResourceTypeSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.String'
     */
    getResourceType(var0: java_lang_Class | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.String'
     */
    getResourceTypeSync(var0: java_lang_Class | null): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     * @return original return type: 'java.lang.String'
     */
    getResourceType(var0: org_hl7_fhir_instance_model_api_IBaseResource | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseResourceInterface> | null): Promise<string | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     * @return original return type: 'java.lang.String'
     */
    getResourceTypeSync(var0: org_hl7_fhir_instance_model_api_IBaseResource | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseResourceInterface> | null): string | null;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IPrimitiveType'
     */
    getPrimitiveBoolean(var0: java_lang_Boolean | boolean | null): Promise<org_hl7_fhir_instance_model_api_IPrimitiveType | null>;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IPrimitiveType'
     */
    getPrimitiveBooleanSync(var0: java_lang_Boolean | boolean | null): org_hl7_fhir_instance_model_api_IPrimitiveType | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.parser.IParserErrorHandler'
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    setParserErrorHandler(var0: ca_uhn_fhir_parser_IParserErrorHandler | JavaInterfaceProxy<ca_uhn_fhir_parser_IParserErrorHandlerInterface> | null): Promise<FhirContext | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.parser.IParserErrorHandler'
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    setParserErrorHandlerSync(var0: ca_uhn_fhir_parser_IParserErrorHandler | JavaInterfaceProxy<ca_uhn_fhir_parser_IParserErrorHandlerInterface> | null): FhirContext | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Class'
     * @return original return type: 'void'
     */
    setDefaultTypeForProfile(var0: string | null, var1: java_lang_Class | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Class'
     * @return original return type: 'void'
     */
    setDefaultTypeForProfileSync(var0: string | null, var1: java_lang_Class | null): void;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.IFhirValidatorFactory'
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    setFhirValidatorFactory(var0: ca_uhn_fhir_context_IFhirValidatorFactory | JavaInterfaceProxy<ca_uhn_fhir_context_IFhirValidatorFactoryInterface> | null): Promise<FhirContext | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.IFhirValidatorFactory'
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    setFhirValidatorFactorySync(var0: ca_uhn_fhir_context_IFhirValidatorFactory | JavaInterfaceProxy<ca_uhn_fhir_context_IFhirValidatorFactoryInterface> | null): FhirContext | null;
    /**
     * @return original return type: 'boolean'
     */
    isFormatJsonSupported(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isFormatJsonSupportedSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isFormatNDJsonSupported(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isFormatNDJsonSupportedSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasDefaultTypeForProfile(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDefaultTypeForProfileSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isFormatXmlSupported(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isFormatXmlSupportedSync(): boolean;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forDstu2_1(): Promise<FhirContext | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forDstu2_1Sync(): FhirContext | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forR4B(): Promise<FhirContext | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forR4BSync(): FhirContext | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forDstu2Hl7Org(): Promise<FhirContext | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forDstu2Hl7OrgSync(): FhirContext | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forDstu3(): Promise<FhirContext | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forDstu3Sync(): FhirContext | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forR5(): Promise<FhirContext | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forR5Sync(): FhirContext | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forR4(): Promise<FhirContext | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forR4Sync(): FhirContext | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forDstu2(): Promise<FhirContext | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forDstu2Sync(): FhirContext | null;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'void'
     */
    registerCustomTypes(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'void'
     */
    registerCustomTypesSync(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.client.api.IGenericClient'
     */
    newRestfulGenericClient(var0: string | null): Promise<ca_uhn_fhir_rest_client_api_IGenericClient | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.client.api.IGenericClient'
     */
    newRestfulGenericClientSync(var0: string | null): ca_uhn_fhir_rest_client_api_IGenericClient | null;
    /**
     * @return original return type: 'boolean'
     */
    isFormatRdfSupported(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isFormatRdfSupportedSync(): boolean;
    /**
     * @return original return type: 'ca.uhn.fhir.context.RuntimeChildUndeclaredExtensionDefinition'
     */
    getRuntimeChildUndeclaredExtensionDefinition(): Promise<ca_uhn_fhir_context_RuntimeChildUndeclaredExtensionDefinition | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.RuntimeChildUndeclaredExtensionDefinition'
     */
    getRuntimeChildUndeclaredExtensionDefinitionSync(): ca_uhn_fhir_context_RuntimeChildUndeclaredExtensionDefinition | null;
    /**
     * @return original return type: 'java.util.Collection'
     */
    getResourceDefinitionsWithExplicitId(): Promise<java_util_Collection | null>;
    /**
     * @return original return type: 'java.util.Collection'
     */
    getResourceDefinitionsWithExplicitIdSync(): java_util_Collection | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.support.IValidationSupport'
     * @return original return type: 'void'
     */
    setValidationSupport(var0: ca_uhn_fhir_context_support_IValidationSupport | JavaInterfaceProxy<ca_uhn_fhir_context_support_IValidationSupportInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.support.IValidationSupport'
     * @return original return type: 'void'
     */
    setValidationSupportSync(var0: ca_uhn_fhir_context_support_IValidationSupport | JavaInterfaceProxy<ca_uhn_fhir_context_support_IValidationSupportInterface> | null): void;
    /**
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport'
     */
    getValidationSupport(): Promise<ca_uhn_fhir_context_support_IValidationSupport | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport'
     */
    getValidationSupportSync(): ca_uhn_fhir_context_support_IValidationSupport | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.client.api.IRestfulClientFactory'
     * @return original return type: 'void'
     */
    setRestfulClientFactory(var0: ca_uhn_fhir_rest_client_api_IRestfulClientFactory | JavaInterfaceProxy<ca_uhn_fhir_rest_client_api_IRestfulClientFactoryInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.client.api.IRestfulClientFactory'
     * @return original return type: 'void'
     */
    setRestfulClientFactorySync(var0: ca_uhn_fhir_rest_client_api_IRestfulClientFactory | JavaInterfaceProxy<ca_uhn_fhir_rest_client_api_IRestfulClientFactoryInterface> | null): void;
    /**
     * @return original return type: 'ca.uhn.fhir.i18n.HapiLocalizer'
     */
    getLocalizer(): Promise<ca_uhn_fhir_i18n_HapiLocalizer | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.i18n.HapiLocalizer'
     */
    getLocalizerSync(): ca_uhn_fhir_i18n_HapiLocalizer | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.FhirVersionEnum'
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forCached(var0: ca_uhn_fhir_context_FhirVersionEnum | null): Promise<FhirContext | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.FhirVersionEnum'
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forCachedSync(var0: ca_uhn_fhir_context_FhirVersionEnum | null): FhirContext | null;
    /**
     * @return original return type: 'ca.uhn.fhir.fhirpath.IFhirPath'
     */
    newFhirPath(): Promise<ca_uhn_fhir_fhirpath_IFhirPath | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.fhirpath.IFhirPath'
     */
    newFhirPathSync(): ca_uhn_fhir_fhirpath_IFhirPath | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.api.IVersionSpecificBundleFactory'
     */
    newBundleFactory(): Promise<ca_uhn_fhir_rest_api_IVersionSpecificBundleFactory | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.api.IVersionSpecificBundleFactory'
     */
    newBundleFactorySync(): ca_uhn_fhir_rest_api_IVersionSpecificBundleFactory | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forR4BCached(): Promise<FhirContext | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forR4BCachedSync(): FhirContext | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forR5Cached(): Promise<FhirContext | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forR5CachedSync(): FhirContext | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forDstu2Cached(): Promise<FhirContext | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forDstu2CachedSync(): FhirContext | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forR4Cached(): Promise<FhirContext | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forR4CachedSync(): FhirContext | null;
    /**
     * @return original return type: 'ca.uhn.fhir.parser.IParser'
     */
    newXmlParser(): Promise<ca_uhn_fhir_parser_IParser | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.parser.IParser'
     */
    newXmlParserSync(): ca_uhn_fhir_parser_IParser | null;
    /**
     * @return original return type: 'ca.uhn.fhir.parser.IParser'
     */
    newJsonParser(): Promise<ca_uhn_fhir_parser_IParser | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.parser.IParser'
     */
    newJsonParserSync(): ca_uhn_fhir_parser_IParser | null;
    /**
     * @return original return type: 'ca.uhn.fhir.parser.IParser'
     */
    newNDJsonParser(): Promise<ca_uhn_fhir_parser_IParser | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.parser.IParser'
     */
    newNDJsonParserSync(): ca_uhn_fhir_parser_IParser | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forDstu3Cached(): Promise<FhirContext | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forDstu3CachedSync(): FhirContext | null;
    /**
     * @return original return type: 'ca.uhn.fhir.parser.IParser'
     */
    newRDFParser(): Promise<ca_uhn_fhir_parser_IParser | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.parser.IParser'
     */
    newRDFParserSync(): ca_uhn_fhir_parser_IParser | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.ParserOptions'
     * @return original return type: 'void'
     */
    setParserOptions(var0: ca_uhn_fhir_context_ParserOptions | null): Promise<void>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.ParserOptions'
     * @return original return type: 'void'
     */
    setParserOptionsSync(var0: ca_uhn_fhir_context_ParserOptions | null): void;
    /**
     * @param var0 original type: 'ca.uhn.fhir.i18n.HapiLocalizer'
     * @return original return type: 'void'
     */
    setLocalizer(var0: ca_uhn_fhir_i18n_HapiLocalizer | null): Promise<void>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.i18n.HapiLocalizer'
     * @return original return type: 'void'
     */
    setLocalizerSync(var0: ca_uhn_fhir_i18n_HapiLocalizer | null): void;
    /**
     * @return original return type: 'ca.uhn.fhir.context.ParserOptions'
     */
    getParserOptions(): Promise<ca_uhn_fhir_context_ParserOptions | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.ParserOptions'
     */
    getParserOptionsSync(): ca_uhn_fhir_context_ParserOptions | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    getResourceTypes(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    getResourceTypesSync(): java_util_Set | null;
    /**
     * @return original return type: 'ca.uhn.fhir.fhirpath.IFhirPath'
     */
    newFluentPath(): Promise<ca_uhn_fhir_fhirpath_IFhirPath | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.fhirpath.IFhirPath'
     */
    newFluentPathSync(): ca_uhn_fhir_fhirpath_IFhirPath | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'void'
     */
    registerCustomType(var0: java_lang_Class | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'void'
     */
    registerCustomTypeSync(var0: java_lang_Class | null): void;
    /**
     * @return original return type: 'ca.uhn.fhir.util.FhirTerser'
     */
    newTerser(): Promise<ca_uhn_fhir_util_FhirTerser | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.util.FhirTerser'
     */
    newTerserSync(): ca_uhn_fhir_util_FhirTerser | null;
    /**
     * @return original return type: 'ca.uhn.fhir.validation.FhirValidator'
     */
    newValidator(): Promise<ca_uhn_fhir_validation_FhirValidator | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.validation.FhirValidator'
     */
    newValidatorSync(): ca_uhn_fhir_validation_FhirValidator | null;
    /**
     * @return original return type: 'ca.uhn.fhir.model.view.ViewGenerator'
     */
    newViewGenerator(): Promise<ca_uhn_fhir_model_view_ViewGenerator | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.model.view.ViewGenerator'
     */
    newViewGeneratorSync(): ca_uhn_fhir_model_view_ViewGenerator | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.client.api.IRestfulClient'
     */
    newRestfulClient(var0: java_lang_Class | null, var1: string | null): Promise<ca_uhn_fhir_rest_client_api_IRestfulClient | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.client.api.IRestfulClient'
     */
    newRestfulClientSync(var0: java_lang_Class | null, var1: string | null): ca_uhn_fhir_rest_client_api_IRestfulClient | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Class'
     */
    getDefaultTypeForProfile(var0: string | null): Promise<java_lang_Class | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Class'
     */
    getDefaultTypeForProfileSync(var0: string | null): java_lang_Class | null;
    /**
     * @return original return type: 'ca.uhn.fhir.narrative.INarrativeGenerator'
     */
    getNarrativeGenerator(): Promise<ca_uhn_fhir_narrative_INarrativeGenerator | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.narrative.INarrativeGenerator'
     */
    getNarrativeGeneratorSync(): ca_uhn_fhir_narrative_INarrativeGenerator | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.narrative.INarrativeGenerator'
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    setNarrativeGenerator(var0: ca_uhn_fhir_narrative_INarrativeGenerator | JavaInterfaceProxy<ca_uhn_fhir_narrative_INarrativeGeneratorInterface> | null): Promise<FhirContext | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.narrative.INarrativeGenerator'
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    setNarrativeGeneratorSync(var0: ca_uhn_fhir_narrative_INarrativeGenerator | JavaInterfaceProxy<ca_uhn_fhir_narrative_INarrativeGeneratorInterface> | null): FhirContext | null;
    /**
     * @return original return type: 'java.util.Collection'
     */
    getElementDefinitions(): Promise<java_util_Collection | null>;
    /**
     * @return original return type: 'java.util.Collection'
     */
    getElementDefinitionsSync(): java_util_Collection | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    getPerformanceOptions(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    getPerformanceOptionsSync(): java_util_Set | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.RuntimeResourceDefinition'
     */
    getResourceDefinitionById(var0: string | null): Promise<ca_uhn_fhir_context_RuntimeResourceDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.RuntimeResourceDefinition'
     */
    getResourceDefinitionByIdSync(var0: string | null): ca_uhn_fhir_context_RuntimeResourceDefinition | null;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'void'
     */
    setPerformanceOptions(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'void'
     */
    setPerformanceOptionsSync(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): void;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.PerformanceOptionsEnum[]'
     * @return original return type: 'void'
     */
    setPerformanceOptions(var0: (ca_uhn_fhir_context_PerformanceOptionsEnum | null)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.PerformanceOptionsEnum[]'
     * @return original return type: 'void'
     */
    setPerformanceOptionsSync(var0: (ca_uhn_fhir_context_PerformanceOptionsEnum | null)[] | null): void;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.FhirVersionEnum'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.RuntimeResourceDefinition'
     */
    getResourceDefinition(var0: ca_uhn_fhir_context_FhirVersionEnum | null, var1: string | null): Promise<ca_uhn_fhir_context_RuntimeResourceDefinition | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.FhirVersionEnum'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.RuntimeResourceDefinition'
     */
    getResourceDefinitionSync(var0: ca_uhn_fhir_context_FhirVersionEnum | null, var1: string | null): ca_uhn_fhir_context_RuntimeResourceDefinition | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.context.RuntimeResourceDefinition'
     */
    getResourceDefinition(var0: java_lang_Class | null): Promise<ca_uhn_fhir_context_RuntimeResourceDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.context.RuntimeResourceDefinition'
     */
    getResourceDefinitionSync(var0: java_lang_Class | null): ca_uhn_fhir_context_RuntimeResourceDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     * @return original return type: 'ca.uhn.fhir.context.RuntimeResourceDefinition'
     */
    getResourceDefinition(var0: org_hl7_fhir_instance_model_api_IBaseResource | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseResourceInterface> | null): Promise<ca_uhn_fhir_context_RuntimeResourceDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     * @return original return type: 'ca.uhn.fhir.context.RuntimeResourceDefinition'
     */
    getResourceDefinitionSync(var0: org_hl7_fhir_instance_model_api_IBaseResource | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseResourceInterface> | null): ca_uhn_fhir_context_RuntimeResourceDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.RuntimeResourceDefinition'
     */
    getResourceDefinition(var0: string | null): Promise<ca_uhn_fhir_context_RuntimeResourceDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.RuntimeResourceDefinition'
     */
    getResourceDefinitionSync(var0: string | null): ca_uhn_fhir_context_RuntimeResourceDefinition | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.client.api.IRestfulClientFactory'
     */
    getRestfulClientFactory(): Promise<ca_uhn_fhir_rest_client_api_IRestfulClientFactory | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.client.api.IRestfulClientFactory'
     */
    getRestfulClientFactorySync(): ca_uhn_fhir_rest_client_api_IRestfulClientFactory | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeElementDefinition'
     */
    getElementDefinition(var0: java_lang_Class | null): Promise<ca_uhn_fhir_context_BaseRuntimeElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeElementDefinition'
     */
    getElementDefinitionSync(var0: java_lang_Class | null): ca_uhn_fhir_context_BaseRuntimeElementDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeElementDefinition'
     */
    getElementDefinition(var0: string | null): Promise<ca_uhn_fhir_context_BaseRuntimeElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeElementDefinition'
     */
    getElementDefinitionSync(var0: string | null): ca_uhn_fhir_context_BaseRuntimeElementDefinition | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forDstu2Hl7OrgCached(): Promise<FhirContext | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static forDstu2Hl7OrgCachedSync(): FhirContext | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.api.AddProfileTagEnum'
     */
    getAddProfileTagWhenEncoding(): Promise<ca_uhn_fhir_context_api_AddProfileTagEnum | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.api.AddProfileTagEnum'
     */
    getAddProfileTagWhenEncodingSync(): ca_uhn_fhir_context_api_AddProfileTagEnum | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.api.AddProfileTagEnum'
     * @return original return type: 'void'
     */
    setAddProfileTagWhenEncoding(var0: ca_uhn_fhir_context_api_AddProfileTagEnum | null): Promise<void>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.api.AddProfileTagEnum'
     * @return original return type: 'void'
     */
    setAddProfileTagWhenEncodingSync(var0: ca_uhn_fhir_context_api_AddProfileTagEnum | null): void;
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
     * @param var0 original type: 'ca.uhn.fhir.context.FhirVersionEnum'
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static newInstanceAsync(var0: ca_uhn_fhir_context_FhirVersionEnum | null): Promise<FhirContext>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static newInstanceAsync(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<FhirContext>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static newInstanceAsync(): Promise<FhirContext>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static newInstanceAsync(var0: java_lang_Class | null): Promise<FhirContext>;
    /**
     * @param var0 original type: 'java.lang.Class[]'
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    static newInstanceAsync(var0: (java_lang_Class | null)[] | null): Promise<FhirContext>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.FhirVersionEnum'
     */
    constructor(var0: ca_uhn_fhir_context_FhirVersionEnum | null);
    /**
     * @param var0 original type: 'java.util.Collection'
     */
    constructor(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null);
    constructor();
    /**
     * @param var0 original type: 'java.lang.Class'
     */
    constructor(var0: java_lang_Class | null);
    /**
     * @param var0 original type: 'java.lang.Class[]'
     */
    constructor(var0: (java_lang_Class | null)[] | null);
}
declare const FhirContext_base: typeof FhirContextClass;
/**
 * Class ca.uhn.fhir.context.FhirContext.
 *
 * This actually imports the java class for further use.
 * The class {@link FhirContextClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FhirContext extends FhirContext_base {
}
export default FhirContext;
//# sourceMappingURL=FhirContext.d.ts.map