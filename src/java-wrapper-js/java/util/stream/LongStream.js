"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongStream = exports.createLongStreamProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link LongStream} interface.
 * All required methods in {@link LongStreamInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createLongStreamProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.stream.LongStream', methods, opts);
}
exports.createLongStreamProxy = createLongStreamProxy;
/**
 * Class java.util.stream.LongStream.
 *
 * This actually imports the java class for further use.
 * The class {@link LongStreamClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class LongStream extends (0, java_bridge_1.importClass)('java.util.stream.LongStream') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.LongStream = LongStream;
exports.default = LongStream;
//# sourceMappingURL=LongStream.js.map