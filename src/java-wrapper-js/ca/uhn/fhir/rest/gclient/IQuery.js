"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IQuery = exports.createIQueryProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link IQuery} interface.
 * All required methods in {@link IQueryInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createIQueryProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('ca.uhn.fhir.rest.gclient.IQuery', methods, opts);
}
exports.createIQueryProxy = createIQueryProxy;
/**
 * Class ca.uhn.fhir.rest.gclient.IQuery.
 *
 * This actually imports the java class for further use.
 * The class {@link IQueryClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class IQuery extends (0, java_bridge_1.importClass)('ca.uhn.fhir.rest.gclient.IQuery') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.IQuery = IQuery;
exports.default = IQuery;
//# sourceMappingURL=IQuery.js.map