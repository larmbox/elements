import { Prop } from 'vue';

type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N;

export type RequiredKeys<T> = {
  [K in keyof T]-?: object extends Pick<T, K> ? never : K;
}[keyof T];

export type InferPropType<T> = [T] extends [null]
  ? any
  : [T] extends [
      {
        type: null | true;
      },
    ]
  ? any
  : [T] extends [
      | ObjectConstructor
      | {
          type: ObjectConstructor;
        },
    ]
  ? Record<string, any>
  : [T] extends [
      | BooleanConstructor
      | {
          type: BooleanConstructor;
        },
    ]
  ? boolean
  : [T] extends [
      | DateConstructor
      | {
          type: DateConstructor;
        },
    ]
  ? Date
  : [T] extends [
      | (infer U)[]
      | {
          type: (infer U)[];
        },
    ]
  ? U extends DateConstructor
    ? Date | InferPropType<U>
    : InferPropType<U>
  : [T] extends [Prop<infer V, infer D>]
  ? unknown extends V
    ? IfAny<V, V, D>
    : V
  : T;
