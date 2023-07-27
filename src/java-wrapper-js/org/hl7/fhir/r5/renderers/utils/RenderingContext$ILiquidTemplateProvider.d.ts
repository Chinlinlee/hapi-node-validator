import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { RenderingContext as org_hl7_fhir_r5_renderers_utils_RenderingContext } from "./RenderingContext";
import { DomainResource as org_hl7_fhir_r5_model_DomainResource } from "./../../model/DomainResource";
/**
 * This class just defines types, you should import {@link RenderingContext$ILiquidTemplateProvider} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class RenderingContext$ILiquidTemplateProviderClass extends JavaClass {
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.renderers.utils.RenderingContext'
     * @param var1 original type: 'org.hl7.fhir.r5.model.DomainResource'
     * @return original return type: 'java.lang.String'
     */
    findTemplate(var0: org_hl7_fhir_r5_renderers_utils_RenderingContext | null, var1: org_hl7_fhir_r5_model_DomainResource | null): Promise<string | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.renderers.utils.RenderingContext'
     * @param var1 original type: 'org.hl7.fhir.r5.model.DomainResource'
     * @return original return type: 'java.lang.String'
     */
    findTemplateSync(var0: org_hl7_fhir_r5_renderers_utils_RenderingContext | null, var1: org_hl7_fhir_r5_model_DomainResource | null): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.renderers.utils.RenderingContext'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    findTemplate(var0: org_hl7_fhir_r5_renderers_utils_RenderingContext | null, var1: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.renderers.utils.RenderingContext'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    findTemplateSync(var0: org_hl7_fhir_r5_renderers_utils_RenderingContext | null, var1: string | null): string | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createRenderingContext$ILiquidTemplateProviderProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface RenderingContext$ILiquidTemplateProviderInterface {
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.renderers.utils.RenderingContext'
     * @param var1 original type: 'org.hl7.fhir.r5.model.DomainResource'
     * @return original return type: 'java.lang.String'
     */
    findTemplate(var0: org_hl7_fhir_r5_renderers_utils_RenderingContext | null, var1: org_hl7_fhir_r5_model_DomainResource | null): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.renderers.utils.RenderingContext'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    findTemplate(var0: org_hl7_fhir_r5_renderers_utils_RenderingContext | null, var1: string | null): string | null;
}
/**
 * Create a proxy for the {@link RenderingContext$ILiquidTemplateProvider} interface.
 * All required methods in {@link RenderingContext$ILiquidTemplateProviderInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createRenderingContext$ILiquidTemplateProviderProxy(methods: RenderingContext$ILiquidTemplateProviderInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<RenderingContext$ILiquidTemplateProviderInterface>;
declare const RenderingContext$ILiquidTemplateProvider_base: typeof RenderingContext$ILiquidTemplateProviderClass;
/**
 * Class org.hl7.fhir.r5.renderers.utils.RenderingContext$ILiquidTemplateProvider.
 *
 * This actually imports the java class for further use.
 * The class {@link RenderingContext$ILiquidTemplateProviderClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class RenderingContext$ILiquidTemplateProvider extends RenderingContext$ILiquidTemplateProvider_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default RenderingContext$ILiquidTemplateProvider;
//# sourceMappingURL=RenderingContext$ILiquidTemplateProvider.d.ts.map