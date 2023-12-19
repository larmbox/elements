import { PropType } from 'vue';
import { ComponentName } from '../../common/enums';
import { ComponentConfiguration } from '../../common/types';
import { ComponentSlots } from '../../composables/useComponent';
declare const configuration: {
    readonly name: ComponentName.EFormDescription;
    readonly props: {
        readonly text: {
            readonly type: PropType<string>;
        };
        readonly useSlot: {
            readonly type: PropType<boolean>;
        };
        readonly aria: {
            readonly type: PropType<string>;
        };
        readonly id: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
    };
    readonly emits: {};
    readonly style: {};
};
type EFormDescription = ComponentConfiguration<typeof configuration, {
    default: {
        properties: Record<string, never>;
    };
} & ComponentSlots>;
declare const EFormDescription: import("vue").DefineComponent<{
    readonly text: {
        readonly type: PropType<string>;
    };
    readonly useSlot: {
        readonly type: PropType<boolean>;
    };
    readonly aria: {
        readonly type: PropType<string>;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly text: {
        readonly type: PropType<string>;
    };
    readonly useSlot: {
        readonly type: PropType<boolean>;
    };
    readonly aria: {
        readonly type: PropType<string>;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}>>, {
    readonly id: string;
}, {}>;
export { EFormDescription, configuration };
