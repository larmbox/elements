import { ComputedRef, ExtractPropTypes, PropType } from 'vue';
import { ComponentName } from '../../common/enums';
import { Component, ComponentInstance } from '../../common/types';
export declare function useInput(component: ComponentInstance<Component<ComponentName, unknown, InputProps | InputFieldProps>>): {
    feedbackClass: ComputedRef<string | undefined>;
    highlightClass: ComputedRef<'highlight' | undefined>;
    hasLabels: ComputedRef<boolean>;
    ariaLabelledby: string;
    ariaDescribedby: string;
};
export declare const inputProps: {
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
        type: PropType<string | number | boolean>;
        default: undefined;
    };
    modelValue: {
        type: PropType<string | number | boolean>;
    };
    highlight: {
        type: BooleanConstructor;
        required: boolean;
        default: undefined;
    };
};
export declare const inputFieldProps: {
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
};
export type InputProps = ExtractPropTypes<typeof inputProps>;
export type InputFieldProps = ExtractPropTypes<typeof inputFieldProps>;
