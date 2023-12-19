import { PropType } from 'vue';
import { ComponentName } from '../../common/enums';
import { ComponentConfiguration } from '../../common/types';
import { ComponentSlots } from '../../composables/useComponent';
declare const configuration: {
    readonly name: ComponentName.EThemeProvider;
    readonly props: {
        readonly theme: {
            readonly type: PropType<{
                name: string;
                variables: Record<string, string>;
            }>;
            readonly required: true;
            readonly _verbose: true;
        };
        readonly global: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly destroyDelay: {
            readonly type: PropType<number>;
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
type EThemeProvider = ComponentConfiguration<typeof configuration, {
    default: {
        properties: {
            id: string;
        };
    };
} & ComponentSlots>;
declare const EThemeProvider: import("vue").DefineComponent<{
    readonly theme: {
        readonly type: PropType<{
            name: string;
            variables: Record<string, string>;
        }>;
        readonly required: true;
        readonly _verbose: true;
    };
    readonly global: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly destroyDelay: {
        readonly type: PropType<number>;
        readonly default: undefined;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly theme: {
        readonly type: PropType<{
            name: string;
            variables: Record<string, string>;
        }>;
        readonly required: true;
        readonly _verbose: true;
    };
    readonly global: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly destroyDelay: {
        readonly type: PropType<number>;
        readonly default: undefined;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}>>, {
    readonly id: string;
    readonly global: boolean;
    readonly destroyDelay: number;
}, {}>;
export { EThemeProvider, configuration };
