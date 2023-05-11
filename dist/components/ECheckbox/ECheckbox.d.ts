import { ExtractPropTypes } from 'vue';
import { RequiredBy } from '../../common/types';
export declare const style: {
    size: string;
    'line-height': string;
    'size-sm': string;
    'line-height-sm': string;
    'size-lg': string;
    'line-height-lg': string;
    'border-radius': string;
    'focus-shadow-size': string;
    'border-width': string;
    'border-color': string;
};
export declare const props: {
    indeterminate: {
        type: BooleanConstructor;
        default: undefined;
    };
    checked: {
        type: BooleanConstructor;
        default: undefined;
    };
    variant: {
        type: import("vue").PropType<string>;
    };
    size: {
        type: import("vue").PropType<string>;
    };
    label: {
        type: StringConstructor;
    };
    autofocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    description: {
        type: StringConstructor;
    };
    name: {
        type: StringConstructor;
    };
    feedback: {
        type: StringConstructor;
    };
    feedbackType: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: import("vue").PropType<string | number | boolean>;
        default: undefined;
    };
    modelValue: {
        type: import("vue").PropType<string | number | boolean>;
    };
    highlight: {
        type: BooleanConstructor;
        required: boolean;
        default: undefined;
    };
    block: {
        type: BooleanConstructor;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    id: {
        type: StringConstructor;
    };
};
export type Props = RequiredBy<ExtractPropTypes<typeof props>, 'feedbackType' | 'size' | 'variant'>;
