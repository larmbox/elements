type A = Record<string, any>;
type B = A;
export declare const deepMerge: (target: A, source: B) => A & B;
export declare const camelToKebabCase: (str: string) => string;
export {};
