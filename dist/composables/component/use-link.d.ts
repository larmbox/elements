import { ExtractPropTypes } from 'vue';
export declare function useLink(): Record<never, never>;
export declare const linkProps: {
    activeClass: {
        type: StringConstructor;
    };
    exactActiveClass: {
        type: StringConstructor;
    };
    append: {
        type: BooleanConstructor;
        default: undefined;
    };
    exact: {
        type: BooleanConstructor;
        default: undefined;
    };
    replace: {
        type: BooleanConstructor;
        default: undefined;
    };
    to: {
        type: (ObjectConstructor | StringConstructor)[];
    };
    prefetch: {
        type: BooleanConstructor;
        default: undefined;
    };
    noPrefetch: {
        type: BooleanConstructor;
        default: undefined;
    };
    href: {
        type: StringConstructor;
    };
    target: {
        type: StringConstructor;
    };
    rel: {
        type: StringConstructor;
    };
};
export type LinkProps = ExtractPropTypes<typeof linkProps>;
