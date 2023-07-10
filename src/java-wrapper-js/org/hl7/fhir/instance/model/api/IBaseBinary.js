"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBaseBinary = exports.createIBaseBinaryProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link IBaseBinary} interface.
 * All required methods in {@link IBaseBinaryInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createIBaseBinaryProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.hl7.fhir.instance.model.api.IBaseBinary', methods, opts);
}
exports.createIBaseBinaryProxy = createIBaseBinaryProxy;
/**
 * Class org.hl7.fhir.instance.model.api.IBaseBinary.
 *
 * This actually imports the java class for further use.
 * The class {@link IBaseBinaryClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class IBaseBinary extends (0, java_bridge_1.importClass)('org.hl7.fhir.instance.model.api.IBaseBinary') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.IBaseBinary = IBaseBinary;
exports.default = IBaseBinary;
//# sourceMappingURL=IBaseBinary.js.map