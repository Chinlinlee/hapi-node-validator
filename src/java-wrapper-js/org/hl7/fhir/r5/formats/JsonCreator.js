"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonCreator = exports.createJsonCreatorProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link JsonCreator} interface.
 * All required methods in {@link JsonCreatorInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createJsonCreatorProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.hl7.fhir.r5.formats.JsonCreator', methods, opts);
}
exports.createJsonCreatorProxy = createJsonCreatorProxy;
/**
 * Class org.hl7.fhir.r5.formats.JsonCreator.
 *
 * This actually imports the java class for further use.
 * The class {@link JsonCreatorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class JsonCreator extends (0, java_bridge_1.importClass)('org.hl7.fhir.r5.formats.JsonCreator') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.JsonCreator = JsonCreator;
exports.default = JsonCreator;
//# sourceMappingURL=JsonCreator.js.map