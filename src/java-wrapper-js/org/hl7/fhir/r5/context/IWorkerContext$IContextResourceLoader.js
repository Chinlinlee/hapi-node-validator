"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IWorkerContext$IContextResourceLoader = exports.createIWorkerContext$IContextResourceLoaderProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link IWorkerContext$IContextResourceLoader} interface.
 * All required methods in {@link IWorkerContext$IContextResourceLoaderInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createIWorkerContext$IContextResourceLoaderProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.hl7.fhir.r5.context.IWorkerContext$IContextResourceLoader', methods, opts);
}
exports.createIWorkerContext$IContextResourceLoaderProxy = createIWorkerContext$IContextResourceLoaderProxy;
/**
 * Class org.hl7.fhir.r5.context.IWorkerContext$IContextResourceLoader.
 *
 * This actually imports the java class for further use.
 * The class {@link IWorkerContext$IContextResourceLoaderClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class IWorkerContext$IContextResourceLoader extends (0, java_bridge_1.importClass)('org.hl7.fhir.r5.context.IWorkerContext$IContextResourceLoader') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.IWorkerContext$IContextResourceLoader = IWorkerContext$IContextResourceLoader;
exports.default = IWorkerContext$IContextResourceLoader;
//# sourceMappingURL=IWorkerContext$IContextResourceLoader.js.map