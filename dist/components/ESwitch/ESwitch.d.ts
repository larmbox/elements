import { ExtractPropTypes } from 'vue';
import { RequiredBy } from '../../common/types';
export declare const style: {
    size: string;
    'size-sm': string;
    'size-lg': string;
    'border-radius': string;
    'focus-shadow-size': string;
    'border-width': string;
    'border-color': string;
    'background-color': string;
    'background-color--hover': string;
    'background-color--focus': string;
    'background-color--disabled': string;
};
export declare const props: {
    checked: {
        type: BooleanConstructor;
        default: undefined;
    };
    variant: {
        type: import("vue").PropType<string>;
    };
    block: {
        type: BooleanConstructor;
        default: undefined;
    };
    size: {
        type: import("vue").PropType<string>;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
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
    id: {
        type: StringConstructor;
    };
};
export type Props = RequiredBy<ExtractPropTypes<typeof props>, 'size' | 'variant'>;
