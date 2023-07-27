"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderingContext$ITypeParser = exports.createRenderingContext$ITypeParserProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link RenderingContext$ITypeParser} interface.
 * All required methods in {@link RenderingContext$ITypeParserInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createRenderingContext$ITypeParserProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.hl7.fhir.r5.renderers.utils.RenderingContext$ITypeParser', methods, opts);
}
exports.createRenderingContext$ITypeParserProxy = createRenderingContext$ITypeParserProxy;
/**
 * Class org.hl7.fhir.r5.renderers.utils.RenderingContext$ITypeParser.
 *
 * This actually imports the java class for further use.
 * The class {@link RenderingContext$ITypeParserClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class RenderingContext$ITypeParser extends (0, java_bridge_1.importClass)('org.hl7.fhir.r5.renderers.utils.RenderingContext$ITypeParser') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.RenderingContext$ITypeParser = RenderingContext$ITypeParser;
exports.default = RenderingContext$ITypeParser;
//# sourceMappingURL=RenderingContext$ITypeParser.js.map