"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IHistory = exports.createIHistoryProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link IHistory} interface.
 * All required methods in {@link IHistoryInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createIHistoryProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('ca.uhn.fhir.rest.gclient.IHistory', methods, opts);
}
exports.createIHistoryProxy = createIHistoryProxy;
/**
 * Class ca.uhn.fhir.rest.gclient.IHistory.
 *
 * This actually imports the java class for further use.
 * The class {@link IHistoryClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class IHistory extends (0, java_bridge_1.importClass)('ca.uhn.fhir.rest.gclient.IHistory') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.IHistory = IHistory;
exports.default = IHistory;
//# sourceMappingURL=IHistory.js.map