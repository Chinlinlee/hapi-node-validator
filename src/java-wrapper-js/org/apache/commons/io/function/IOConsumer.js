"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOConsumer = exports.createIOConsumerProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link IOConsumer} interface.
 * All required methods in {@link IOConsumerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createIOConsumerProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.apache.commons.io.function.IOConsumer', methods, opts);
}
exports.createIOConsumerProxy = createIOConsumerProxy;
/**
 * Class org.apache.commons.io.function.IOConsumer.
 *
 * This actually imports the java class for further use.
 * The class {@link IOConsumerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class IOConsumer extends (0, java_bridge_1.importClass)('org.apache.commons.io.function.IOConsumer') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.IOConsumer = IOConsumer;
exports.default = IOConsumer;
//# sourceMappingURL=IOConsumer.js.map