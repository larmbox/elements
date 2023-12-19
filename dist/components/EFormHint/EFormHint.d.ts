import { PropType } from 'vue';
import { ComponentName } from '../../common/enums';
import { ComponentConfiguration } from '../../common/types';
import { ComponentSlots } from '../../composables/useComponent';
declare const configuration: {
    readonly name: ComponentName.EFormHint;
    readonly props: {
        readonly text: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly aria: {
            readonly type: PropType<string>;
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
type EFormHint = ComponentConfiguration<typeof configuration, {
    default: {
        properties: Record<string, never>;
    };
} & ComponentSlots>;
declare const EFormHint: import("vue").DefineComponent<{
    readonly text: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly aria: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly text: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly aria: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}>>, {
    readonly id: string;
    readonly text: string;
    readonly aria: string;
}, {}>;
export { EFormHint, configuration };
