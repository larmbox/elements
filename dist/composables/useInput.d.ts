import { PropType } from 'vue';
import { ComponentConfiguration, ComponentInstance, ComposableConfiguration } from '../common/types';
export declare function useInput(component: ComponentInstance<ComponentConfiguration>): {
    hasContext: import("vue").ComputedRef<boolean>;
    ariaLabelledby: import("vue").ComputedRef<any>;
    ariaDescribedby: import("vue").ComputedRef<any>;
    ariaErrormessage: import("vue").ComputedRef<any>;
    ariaRequired: import("vue").ComputedRef<any>;
    ariaInvalid: import("vue").ComputedRef<any>;
};
export declare const configuration: {
    readonly props: {
        readonly label: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly autofocus: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly description: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly name: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly required: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly ariaInvalid: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly ariaRequired: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly ariaLabelledby: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly ariaDescribedby: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly ariaErrormessage: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly feedback: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly highlight: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
    };
    readonly emits: {
        readonly 'update:modelValue': (value: unknown) => boolean;
        readonly input: (event: Event) => boolean;
    };
};
export declare const field: {
    readonly props: {
        readonly hint: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly autocomplete: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly label: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly autofocus: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly description: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly name: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly required: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly ariaInvalid: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly ariaRequired: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly ariaLabelledby: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly ariaDescribedby: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly ariaErrormessage: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly feedback: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly highlight: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
    };
    readonly emits: {
        readonly 'update:modelValue': (value: unknown) => boolean;
        readonly input: (event: Event) => boolean;
    };
};
export type InputSlots = {
    label: {
        properties: {
            id: string;
        };
    };
    description: {
        properties: Record<string, never>;
    };
    feedback: {
        properties: Record<string, never>;
    };
};
export type InputFieldSlots = InputSlots & {
    hint: {
        properties: {
            id: string;
        };
    };
};
export type InputConfiguration = ComposableConfiguration<typeof configuration, InputSlots>;
export type InputFieldConfiguration = ComposableConfiguration<typeof field, InputFieldSlots>;
