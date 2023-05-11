import { ExtractPropTypes } from 'vue';
import { RequiredBy } from '../../common/types';
export declare const style: {
    'padding-x': string;
    'padding-y': string;
    'padding-x-sm': string;
    'padding-y-sm': string;
    'padding-x-lg': string;
    'padding-y-lg': string;
    'border-radius': string;
    'border-width': string;
    'font-size': string;
    'font-size-sm': string;
    'font-size-lg': string;
    'line-height': string;
    'line-height-sm': string;
    'line-height-lg': string;
    'font-weight': string;
};
export declare const props: {
    tag: {
        type: StringConstructor;
        inherit: boolean;
    };
    type: {
        type: StringConstructor;
    };
    icon: {
        type: StringConstructor;
    };
    iconLeft: {
        type: StringConstructor;
    };
    iconRight: {
        type: StringConstructor;
    };
    loading: {
        type: BooleanConstructor;
        default: undefined;
    };
    outline: {
        type: BooleanConstructor;
        default: undefined;
    };
    variant: {
        type: import("vue").PropType<string>;
    };
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
    size: {
        type: import("vue").PropType<string>;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    block: {
        type: BooleanConstructor;
        default: undefined;
    };
    id: {
        type: StringConstructor;
    };
};
export type Props = RequiredBy<ExtractPropTypes<typeof props>, 'tag' | 'size' | 'variant'>;
