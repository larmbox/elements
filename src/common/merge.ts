// eslint-disable-next-line @typescript-eslint/no-explicit-any
type A = Record<string, any>;
type B = A;

/**
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation.
 *
 * @param target The target object.
 * @param source The source object.
 */
export function merge(target: A, source: B): A & B {
  const isDeep = (prop: string) =>
    isObject(source[prop]) && target[prop] && isObject(target[prop]);
  const replaced = Object.getOwnPropertyNames(source)
    .map((prop) => ({
      [prop]: isDeep(prop) ? merge(target[prop], source[prop]) : source[prop],
    }))
    .reduce((a, b) => ({ ...a, ...b }), {});

  return {
    ...target,
    ...replaced,
  } as A & B;
}

/**
 * Returns true if item is an object.
 *
 * @param item The item to check.
 */
function isObject(item: unknown) {
  return typeof item === 'object' && !Array.isArray(item);
}
