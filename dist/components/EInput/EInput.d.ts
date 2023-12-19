import { PropType } from 'vue';
import { ComponentName } from '../../common/enums';
import { ComponentConfiguration } from '../../common/types';
import { BlockSlots } from '../../composables/useBlock';
import { ComponentSlots } from '../../composables/useComponent';
import { DisabledSlots } from '../../composables/useDisabled';
import { InputFieldSlots } from '../../composables/useInput';
import { VariantSlots } from '../../composables/useVariant';
declare const configuration: {
    readonly name: ComponentName.EInput;
    readonly props: {
        readonly variant: {
            readonly _preset: true;
            readonly type: PropType<string>;
        };
        readonly type: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly min: {
            readonly type: PropType<string | number>;
            readonly default: undefined;
        };
        readonly max: {
            readonly type: PropType<string | number>;
            readonly default: undefined;
        };
        readonly step: {
            readonly type: PropType<string | number>;
            readonly default: undefined;
        };
        readonly value: {
            readonly type: PropType<string | number | boolean | null>;
            readonly default: undefined;
        };
        readonly modelValue: {
            readonly type: PropType<string | number | boolean | null>;
            readonly default: undefined;
        };
        readonly placeholder: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly readonly: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
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
        readonly disabled: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly id: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly block: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
    };
    readonly emits: {
        readonly 'update:modelValue': (value: unknown) => boolean;
        readonly input: (event: Event) => boolean;
    };
    readonly style: {
        readonly 'padding-x': "calc(var(--spacing) * 0.75)";
        readonly 'padding-y': "calc(var(--spacing) * 0.25)";
        readonly 'font-size': "var(--font-size-md)";
        readonly 'line-height': "var(--line-height)";
        readonly 'focus-shadow-size': "var(--focus-shadow-size)";
        readonly 'border-radius': "var(--border-radius)";
        readonly 'border-width': "var(--border-width)";
        readonly 'border-color': "var(--border-color)";
        readonly 'border-color--disabled': "var(--border-color--disabled)";
        readonly 'text-color': "var(--text-color)";
        readonly 'text-color--disabled': "var(--text-color--disabled)";
        readonly 'placeholder-color': "var(--placeholder-color)";
        readonly 'placeholder-color--disabled': "var(--placeholder-color--disabled)";
        readonly 'background-color': "var(--background-color)";
        readonly 'background-color--disabled': "var(--background-color--disabled)";
    };
};
type EInput = ComponentConfiguration<typeof configuration, BlockSlots & ComponentSlots & DisabledSlots & InputFieldSlots & VariantSlots>;
declare const EInput: import("vue").DefineComponent<{
    readonly variant: {
        readonly _preset: true;
        readonly type: PropType<string>;
    };
    readonly type: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly min: {
        readonly type: PropType<string | number>;
        readonly default: undefined;
    };
    readonly max: {
        readonly type: PropType<string | number>;
        readonly default: undefined;
    };
    readonly step: {
        readonly type: PropType<string | number>;
        readonly default: undefined;
    };
    readonly value: {
        readonly type: PropType<string | number | boolean | null>;
        readonly default: undefined;
    };
    readonly modelValue: {
        readonly type: PropType<string | number | boolean | null>;
        readonly default: undefined;
    };
    readonly placeholder: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly readonly: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
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
    readonly disabled: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly block: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    readonly 'update:modelValue': (value: unknown) => boolean;
    readonly input: (event: Event) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly variant: {
        readonly _preset: true;
        readonly type: PropType<string>;
    };
    readonly type: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly min: {
        readonly type: PropType<string | number>;
        readonly default: undefined;
    };
    readonly max: {
        readonly type: PropType<string | number>;
        readonly default: undefined;
    };
    readonly step: {
        readonly type: PropType<string | number>;
        readonly default: undefined;
    };
    readonly value: {
        readonly type: PropType<string | number | boolean | null>;
        readonly default: undefined;
    };
    readonly modelValue: {
        readonly type: PropType<string | number | boolean | null>;
        readonly default: undefined;
    };
    readonly placeholder: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly readonly: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
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
    readonly disabled: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly block: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
}>> & {
    onInput?: ((event: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: unknown) => any) | undefined;
}, {
    readonly max: string | number;
    readonly required: boolean;
    readonly type: string;
    readonly block: boolean;
    readonly feedback: string;
    readonly id: string;
    readonly name: string;
    readonly min: string | number;
    readonly value: string | number | boolean | null;
    readonly label: string;
    readonly autocomplete: string;
    readonly ariaInvalid: boolean;
    readonly ariaRequired: boolean;
    readonly autofocus: boolean;
    readonly disabled: boolean;
    readonly readonly: boolean;
    readonly description: string;
    readonly step: string | number;
    readonly placeholder: string;
    readonly modelValue: string | number | boolean | null;
    readonly ariaLabelledby: string;
    readonly ariaDescribedby: string;
    readonly ariaErrormessage: string;
    readonly highlight: boolean;
    readonly hint: string;
}, {}>;
export { EInput, configuration };
