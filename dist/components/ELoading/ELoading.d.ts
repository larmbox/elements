import { PropType } from 'vue';
import { ComponentName } from '../../common/enums';
import { ComponentConfiguration } from '../../common/types';
import { ComponentSlots } from '../../composables/useComponent';
declare const configuration: {
    readonly name: ComponentName.ELoading;
    readonly props: {
        readonly role: {
            readonly type: PropType<string>;
            readonly _preset: true;
        };
        readonly label: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly id: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
    };
    readonly emits: {};
    readonly style: {
        readonly 'border-width': "calc(var(--border-width) * 2)";
        readonly 'animation-time': "calc(var(--transition-time) * 8)";
    };
};
type ELoading = ComponentConfiguration<typeof configuration, ComponentSlots>;
declare const ELoading: import("vue").DefineComponent<{
    readonly role: {
        readonly type: PropType<string>;
        readonly _preset: true;
    };
    readonly label: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly role: {
        readonly type: PropType<string>;
        readonly _preset: true;
    };
    readonly label: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}>>, {
    readonly id: string;
    readonly label: string;
}, {}>;
export { ELoading, configuration };
