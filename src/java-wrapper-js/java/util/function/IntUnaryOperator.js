"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntUnaryOperator = exports.createIntUnaryOperatorProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link IntUnaryOperator} interface.
 * All required methods in {@link IntUnaryOperatorInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createIntUnaryOperatorProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.function.IntUnaryOperator', methods, opts);
}
exports.createIntUnaryOperatorProxy = createIntUnaryOperatorProxy;
/**
 * Class java.util.function.IntUnaryOperator.
 *
 * This actually imports the java class for further use.
 * The class {@link IntUnaryOperatorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class IntUnaryOperator extends (0, java_bridge_1.importClass)('java.util.function.IntUnaryOperator') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.IntUnaryOperator = IntUnaryOperator;
exports.default = IntUnaryOperator;
//# sourceMappingURL=IntUnaryOperator.js.map