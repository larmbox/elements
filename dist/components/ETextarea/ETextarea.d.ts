import { ExtractPropTypes, PropType } from 'vue';
import { PartialBy, RequiredBy } from '../../common/types';
export declare const style: {
    'border-radius': string;
    'border-width': string;
    'border-color': string;
    'border-color--disabled': string;
    'text-color': string;
    'text-color--hover': string;
    'text-color--focus': string;
    'text-color--disabled': string;
    'placeholder-color': string;
    'placeholder-color--hover': string;
    'placeholder-color--focus': string;
    'placeholder-color--disabled': string;
    'background-color': string;
    'background-color--hover': string;
    'background-color--focus': string;
    'background-color--disabled': string;
    'padding-x': string;
    'padding-y': string;
    'font-size': string;
    'line-height': string;
    'padding-x-sm': string;
    'padding-y-sm': string;
    'font-size-sm': string;
    'line-height-sm': string;
    'padding-x-lg': string;
    'padding-y-lg': string;
    'font-size-lg': string;
    'line-height-lg': string;
};
export declare const props: {
    rows: {
        type: NumberConstructor;
    };
    cols: {
        type: NumberConstructor;
    };
    resize: {
        type: PropType<"both" | "none" | "horizontal" | "vertical">;
        default: string;
        required: boolean;
    };
    block: {
        type: BooleanConstructor;
        default: undefined;
    };
    variant: {
        type: PropType<string>;
    };
    size: {
        type: PropType<string>;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    placeholder: {
        type: StringConstructor;
    };
    readonly: {
        type: BooleanConstructor;
        default: undefined;
    };
    hint: {
        type: StringConstructor;
    };
    autocomplete: {
        type: BooleanConstructor;
        default: undefined;
    };
    value: {
        type: PropType<string | number>;
        default: undefined;
    };
    modelValue: {
        type: PropType<string | number>;
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
    highlight: {
        type: BooleanConstructor;
        required: boolean;
        default: undefined;
    };
    id: {
        type: StringConstructor;
    };
};
export type Props = PartialBy<RequiredBy<ExtractPropTypes<typeof props>, 'size' | 'variant'>, 'resize'>;
