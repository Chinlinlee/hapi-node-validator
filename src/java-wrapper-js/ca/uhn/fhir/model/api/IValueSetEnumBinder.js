"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IValueSetEnumBinder = exports.createIValueSetEnumBinderProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link IValueSetEnumBinder} interface.
 * All required methods in {@link IValueSetEnumBinderInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createIValueSetEnumBinderProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('ca.uhn.fhir.model.api.IValueSetEnumBinder', methods, opts);
}
exports.createIValueSetEnumBinderProxy = createIValueSetEnumBinderProxy;
/**
 * Class ca.uhn.fhir.model.api.IValueSetEnumBinder.
 *
 * This actually imports the java class for further use.
 * The class {@link IValueSetEnumBinderClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class IValueSetEnumBinder extends (0, java_bridge_1.importClass)('ca.uhn.fhir.model.api.IValueSetEnumBinder') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.IValueSetEnumBinder = IValueSetEnumBinder;
exports.default = IValueSetEnumBinder;
//# sourceMappingURL=IValueSetEnumBinder.js.map