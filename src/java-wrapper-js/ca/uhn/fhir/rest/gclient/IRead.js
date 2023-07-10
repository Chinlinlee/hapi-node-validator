"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRead = exports.createIReadProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link IRead} interface.
 * All required methods in {@link IReadInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createIReadProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('ca.uhn.fhir.rest.gclient.IRead', methods, opts);
}
exports.createIReadProxy = createIReadProxy;
/**
 * Class ca.uhn.fhir.rest.gclient.IRead.
 *
 * This actually imports the java class for further use.
 * The class {@link IReadClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class IRead extends (0, java_bridge_1.importClass)('ca.uhn.fhir.rest.gclient.IRead') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.IRead = IRead;
exports.default = IRead;
//# sourceMappingURL=IRead.js.map