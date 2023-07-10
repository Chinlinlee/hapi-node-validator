"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IParam = exports.createIParamProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link IParam} interface.
 * All required methods in {@link IParamInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createIParamProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('ca.uhn.fhir.rest.gclient.IParam', methods, opts);
}
exports.createIParamProxy = createIParamProxy;
/**
 * Class ca.uhn.fhir.rest.gclient.IParam.
 *
 * This actually imports the java class for further use.
 * The class {@link IParamClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class IParam extends (0, java_bridge_1.importClass)('ca.uhn.fhir.rest.gclient.IParam') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.IParam = IParam;
exports.default = IParam;
//# sourceMappingURL=IParam.js.map