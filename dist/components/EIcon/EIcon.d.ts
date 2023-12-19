import { PropType } from 'vue';
import { ComponentName } from '../../common/enums';
import { ComponentConfiguration } from '../../common/types';
import { ComponentSlots } from '../../composables/useComponent';
declare const configuration: {
    readonly name: ComponentName.EIcon;
    readonly props: {
        readonly className: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly prefix: {
            readonly type: PropType<string>;
            readonly _preset: true;
        };
        readonly type: {
            readonly type: PropType<"inline" | "svg" | "class" | "sprite">;
            readonly _preset: true;
        };
        readonly tag: {
            readonly type: PropType<keyof HTMLElementTagNameMap>;
            readonly _preset: true;
            readonly _verbose: false;
        };
        readonly icon: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly sprite: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly width: {
            readonly type: PropType<string>;
            readonly _preset: true;
        };
        readonly height: {
            readonly type: PropType<string>;
            readonly _preset: true;
        };
        readonly id: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
    };
    readonly emits: {};
    readonly style: {};
};
type EIcon = ComponentConfiguration<typeof configuration, ComponentSlots>;
declare const EIcon: import("vue").DefineComponent<{
    readonly className: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly prefix: {
        readonly type: PropType<string>;
        readonly _preset: true;
    };
    readonly type: {
        readonly type: PropType<"inline" | "svg" | "class" | "sprite">;
        readonly _preset: true;
    };
    readonly tag: {
        readonly type: PropType<keyof HTMLElementTagNameMap>;
        readonly _preset: true;
        readonly _verbose: false;
    };
    readonly icon: {
        readonly type: PropType<string>;
        readonly required: true;
    };
    readonly sprite: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly width: {
        readonly type: PropType<string>;
        readonly _preset: true;
    };
    readonly height: {
        readonly type: PropType<string>;
        readonly _preset: true;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly className: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly prefix: {
        readonly type: PropType<string>;
        readonly _preset: true;
    };
    readonly type: {
        readonly type: PropType<"inline" | "svg" | "class" | "sprite">;
        readonly _preset: true;
    };
    readonly tag: {
        readonly type: PropType<keyof HTMLElementTagNameMap>;
        readonly _preset: true;
        readonly _verbose: false;
    };
    readonly icon: {
        readonly type: PropType<string>;
        readonly required: true;
    };
    readonly sprite: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly width: {
        readonly type: PropType<string>;
        readonly _preset: true;
    };
    readonly height: {
        readonly type: PropType<string>;
        readonly _preset: true;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}>>, {
    readonly id: string;
    readonly className: string;
    readonly sprite: string;
}, {}>;
export { EIcon, configuration };
