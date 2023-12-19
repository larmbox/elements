import { PropType } from 'vue';
import { ComponentName } from '../../common/enums';
import { Booleanish, ComponentConfiguration } from '../../common/types';
import { BlockSlots } from '../../composables/useBlock';
import { ComponentSlots } from '../../composables/useComponent';
import { DisabledSlots } from '../../composables/useDisabled';
import { InputSlots } from '../../composables/useInput';
import { VariantSlots } from '../../composables/useVariant';
declare const configuration: {
    readonly name: ComponentName.ERadio;
    readonly props: {
        readonly variant: {
            readonly _preset: true;
            readonly type: PropType<string>;
        };
        readonly checked: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly value: {
            readonly type: PropType<Booleanish>;
            readonly default: undefined;
        };
        readonly modelValue: {
            readonly type: PropType<Booleanish>;
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
        readonly size: "1.5rem";
        readonly 'line-height': "var(--line-height)";
        readonly 'focus-shadow-size': "var(--focus-shadow-size)";
        readonly 'border-radius': "50%";
        readonly 'border-width': "var(--border-width)";
        readonly 'border-color': "var(--border-color)";
        readonly 'border-color--disabled': "var(--border-color--disabled)";
        readonly 'background-color': "var(--background-color)";
        readonly 'background-color--disabled': "var(--background-color--disabled)";
    };
};
type ERadio = ComponentConfiguration<typeof configuration, BlockSlots & ComponentSlots & DisabledSlots & InputSlots & VariantSlots>;
declare const ERadio: import("vue").DefineComponent<{
    readonly variant: {
        readonly _preset: true;
        readonly type: PropType<string>;
    };
    readonly checked: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly value: {
        readonly type: PropType<Booleanish>;
        readonly default: undefined;
    };
    readonly modelValue: {
        readonly type: PropType<Booleanish>;
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
    readonly checked: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly value: {
        readonly type: PropType<Booleanish>;
        readonly default: undefined;
    };
    readonly modelValue: {
        readonly type: PropType<Booleanish>;
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
    readonly required: boolean;
    readonly block: boolean;
    readonly feedback: string;
    readonly id: string;
    readonly name: string;
    readonly value: Booleanish;
    readonly label: string;
    readonly ariaInvalid: boolean;
    readonly ariaRequired: boolean;
    readonly autofocus: boolean;
    readonly disabled: boolean;
    readonly description: string;
    readonly checked: boolean;
    readonly modelValue: Booleanish;
    readonly ariaLabelledby: string;
    readonly ariaDescribedby: string;
    readonly ariaErrormessage: string;
    readonly highlight: boolean;
}, {}>;
export { ERadio, configuration };
