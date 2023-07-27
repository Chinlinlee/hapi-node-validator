"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sink = exports.createSinkProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Sink} interface.
 * All required methods in {@link SinkInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createSinkProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('okio.Sink', methods, opts);
}
exports.createSinkProxy = createSinkProxy;
/**
 * Class okio.Sink.
 *
 * This actually imports the java class for further use.
 * The class {@link SinkClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Sink extends (0, java_bridge_1.importClass)('okio.Sink') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Sink = Sink;
exports.default = Sink;
//# sourceMappingURL=Sink.js.map