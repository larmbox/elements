import { ComponentInstance, GenericComponent } from '../../common/types';
export declare function useContextUtil<T extends ComponentInstance<GenericComponent>>(component?: T): {
    hasSlot: (name: string) => boolean;
    first: <R>(...args: R[]) => R | undefined;
    css: {
        modifier: <T_1 extends string | Record<string, boolean | undefined> = string>(suffix: T_1, name?: string, usePrefix?: boolean) => T_1;
        element: <T_2 extends string | Record<string, boolean | undefined> = string>(suffix: T_2, name?: string, usePrefix?: boolean) => T_2;
        base: <T_3 extends string | Record<string, boolean | undefined> = string>(suffix?: T_3 | undefined, name?: string, usePrefix?: boolean) => T_3;
    };
};
