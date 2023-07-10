"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPrimitiveType = exports.createIPrimitiveTypeProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link IPrimitiveType} interface.
 * All required methods in {@link IPrimitiveTypeInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createIPrimitiveTypeProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.hl7.fhir.instance.model.api.IPrimitiveType', methods, opts);
}
exports.createIPrimitiveTypeProxy = createIPrimitiveTypeProxy;
/**
 * Class org.hl7.fhir.instance.model.api.IPrimitiveType.
 *
 * This actually imports the java class for further use.
 * The class {@link IPrimitiveTypeClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class IPrimitiveType extends (0, java_bridge_1.importClass)('org.hl7.fhir.instance.model.api.IPrimitiveType') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.IPrimitiveType = IPrimitiveType;
exports.default = IPrimitiveType;
//# sourceMappingURL=IPrimitiveType.js.map