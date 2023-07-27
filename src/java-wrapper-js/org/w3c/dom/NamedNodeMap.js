"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamedNodeMap = exports.createNamedNodeMapProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link NamedNodeMap} interface.
 * All required methods in {@link NamedNodeMapInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createNamedNodeMapProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.w3c.dom.NamedNodeMap', methods, opts);
}
exports.createNamedNodeMapProxy = createNamedNodeMapProxy;
/**
 * Class org.w3c.dom.NamedNodeMap.
 *
 * This actually imports the java class for further use.
 * The class {@link NamedNodeMapClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class NamedNodeMap extends (0, java_bridge_1.importClass)('org.w3c.dom.NamedNodeMap') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.NamedNodeMap = NamedNodeMap;
exports.default = NamedNodeMap;
//# sourceMappingURL=NamedNodeMap.js.map