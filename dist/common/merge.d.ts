type A = Record<string, any>;
type B = A;
/**
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation.
 *
 * @param target The target object.
 * @param source The source object.
 */
export declare function merge(target: A, source: B): A & B;
export {};
