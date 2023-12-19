import { PropType } from 'vue';
import { ComponentName } from '../../common/enums';
import { ComponentConfiguration } from '../../common/types';
import { BlockSlots } from '../../composables/useBlock';
import { ComponentSlots } from '../../composables/useComponent';
import { DisabledSlots } from '../../composables/useDisabled';
import { LinkSlots } from '../../composables/useLink';
import { VariantSlots } from '../../composables/useVariant';
declare const configuration: {
    readonly name: ComponentName.EButton;
    readonly props: {
        readonly variant: {
            readonly _preset: true;
            readonly type: PropType<string>;
        };
        readonly tag: {
            readonly type: PropType<keyof HTMLElementTagNameMap>;
            readonly _preset: true;
            readonly _verbose: false;
        };
        readonly type: {
            readonly type: PropType<"button" | "reset" | "submit">;
        };
        readonly icon: {
            readonly type: PropType<string>;
        };
        readonly iconLeft: {
            readonly type: PropType<string>;
        };
        readonly iconRight: {
            readonly type: PropType<string>;
        };
        readonly loading: {
            readonly type: PropType<boolean>;
        };
        readonly activeClass: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly exactActiveClass: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly append: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly exact: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly replace: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly to: {
            readonly type: PropType<string | Record<string, unknown>>;
            readonly default: undefined;
        };
        readonly prefetch: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly noPrefetch: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly href: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly target: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly rel: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly disabled: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly block: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly id: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
    };
    readonly emits: {};
    readonly style: {
        readonly 'padding-x': "calc(var(--spacing) * 0.75)";
        readonly 'padding-y': "calc(var(--spacing) * 0.25)";
        readonly 'border-width': "var(--border-width)";
        readonly 'border-radius': "var(--border-radius)";
        readonly 'font-size': "var(--font-size-md)";
        readonly 'font-weight': "var(--font-weight-normal)";
        readonly 'line-height': "var(--line-height)";
    };
};
type EButton = ComponentConfiguration<typeof configuration, {
    default: {
        properties: Record<string, never>;
    };
} & BlockSlots & ComponentSlots & DisabledSlots & LinkSlots & VariantSlots>;
declare const EButton: import("vue").DefineComponent<{
    readonly variant: {
        readonly _preset: true;
        readonly type: PropType<string>;
    };
    readonly tag: {
        readonly type: PropType<keyof HTMLElementTagNameMap>;
        readonly _preset: true;
        readonly _verbose: false;
    };
    readonly type: {
        readonly type: PropType<"button" | "reset" | "submit">;
    };
    readonly icon: {
        readonly type: PropType<string>;
    };
    readonly iconLeft: {
        readonly type: PropType<string>;
    };
    readonly iconRight: {
        readonly type: PropType<string>;
    };
    readonly loading: {
        readonly type: PropType<boolean>;
    };
    readonly activeClass: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly exactActiveClass: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly append: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly exact: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly replace: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly to: {
        readonly type: PropType<string | Record<string, unknown>>;
        readonly default: undefined;
    };
    readonly prefetch: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly noPrefetch: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly href: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly target: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly rel: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly disabled: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly block: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly variant: {
        readonly _preset: true;
        readonly type: PropType<string>;
    };
    readonly tag: {
        readonly type: PropType<keyof HTMLElementTagNameMap>;
        readonly _preset: true;
        readonly _verbose: false;
    };
    readonly type: {
        readonly type: PropType<"button" | "reset" | "submit">;
    };
    readonly icon: {
        readonly type: PropType<string>;
    };
    readonly iconLeft: {
        readonly type: PropType<string>;
    };
    readonly iconRight: {
        readonly type: PropType<string>;
    };
    readonly loading: {
        readonly type: PropType<boolean>;
    };
    readonly activeClass: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly exactActiveClass: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly append: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly exact: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly replace: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly to: {
        readonly type: PropType<string | Record<string, unknown>>;
        readonly default: undefined;
    };
    readonly prefetch: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly noPrefetch: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly href: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly target: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly rel: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly disabled: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly block: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}>>, {
    readonly replace: boolean;
    readonly exact: boolean;
    readonly block: boolean;
    readonly id: string;
    readonly rel: string;
    readonly target: string;
    readonly append: boolean;
    readonly disabled: boolean;
    readonly href: string;
    readonly to: string | Record<string, unknown>;
    readonly activeClass: string;
    readonly exactActiveClass: string;
    readonly prefetch: boolean;
    readonly noPrefetch: boolean;
}, {}>;
export { EButton, configuration };
