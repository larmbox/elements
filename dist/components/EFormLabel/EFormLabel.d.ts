import { PropType } from 'vue';
import { ComponentName } from '../../common/enums';
import { ComponentConfiguration } from '../../common/types';
import { ComponentSlots } from '../../composables/useComponent';
declare const configuration: {
    readonly name: ComponentName.EFormLabel;
    readonly props: {
        /**
         * The label text to display.
         */
        readonly text: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly for: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly useSlot: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly aria: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly required: {
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
type EFormLabel = ComponentConfiguration<typeof configuration, {
    default: {
        properties: Record<string, never>;
    };
} & ComponentSlots>;
declare const EFormLabel: import("vue").DefineComponent<{
    /**
     * The label text to display.
     */
    readonly text: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly for: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly useSlot: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly aria: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly required: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The label text to display.
     */
    readonly text: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly for: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly useSlot: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly aria: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly required: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}>>, {
    readonly required: boolean;
    readonly id: string;
    readonly text: string;
    readonly for: string;
    readonly useSlot: boolean;
    readonly aria: string;
}, {}>;
export { EFormLabel, configuration };
