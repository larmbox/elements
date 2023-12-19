import { PropType } from 'vue';
import { ComponentName } from '../../common/enums';
import { ComponentConfiguration } from '../../common/types';
import { ComponentSlots } from '../../composables/useComponent';
declare const configuration: {
    readonly name: ComponentName.EFormInput;
    readonly props: {
        readonly feedback: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly highlight: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly id: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
    };
    readonly emits: {};
    readonly style: {};
};
type EFormInput = ComponentConfiguration<typeof configuration, {
    default: {
        properties: Record<string, never>;
    };
} & ComponentSlots>;
declare const EFormInput: import("vue").DefineComponent<{
    readonly feedback: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly highlight: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly feedback: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly highlight: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}>>, {
    readonly feedback: boolean;
    readonly id: string;
    readonly highlight: boolean;
}, {}>;
export { EFormInput, configuration };
