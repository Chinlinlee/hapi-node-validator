"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = exports.createCommentProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Comment} interface.
 * All required methods in {@link CommentInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createCommentProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.w3c.dom.Comment', methods, opts);
}
exports.createCommentProxy = createCommentProxy;
/**
 * Class org.w3c.dom.Comment.
 *
 * This actually imports the java class for further use.
 * The class {@link CommentClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Comment extends (0, java_bridge_1.importClass)('org.w3c.dom.Comment') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Comment = Comment;
exports.default = Comment;
//# sourceMappingURL=Comment.js.map