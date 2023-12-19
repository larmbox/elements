import { Padding, Placement } from '@floating-ui/vue';
import { PropType, Ref } from 'vue';
import { ComponentName } from '../../common/enums';
import { ComponentConfiguration } from '../../common/types';
import { ComponentSlots } from '../../composables/useComponent';
import { DisabledSlots } from '../../composables/useDisabled';
declare const configuration: {
    readonly name: ComponentName.ETooltip;
    readonly props: {
        readonly placement: {
            readonly type: PropType<Placement>;
            readonly _preset: true;
        };
        readonly delay: {
            readonly type: PropType<number | {
                show: number;
                hide: number;
            }>;
            readonly default: undefined;
            readonly _preset: true;
        };
        readonly flip: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
            readonly _preset: true;
        };
        readonly triggers: {
            readonly type: PropType<("focus" | "hover")[]>;
            readonly default: undefined;
            readonly _preset: true;
            readonly _verbose: false;
        };
        readonly padding: {
            readonly type: PropType<Padding>;
            readonly default: undefined;
            readonly _preset: true;
        };
        readonly offset: {
            readonly type: PropType<number>;
            readonly _preset: true;
        };
        readonly arrow: {
            readonly type: PropType<false | {
                size: number;
            }>;
            readonly default: undefined;
            readonly _preset: true;
            readonly _verbose: true;
        };
        readonly text: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        /**
         * Binding is a copy of props, but reactive. Used by directive.
         * Do not use this directly.
         *
         * TODO: Exclude this from emitted declarations.
         */
        readonly binding: {
            readonly type: PropType<Ref<any>>;
            readonly default: undefined;
            readonly _verbose: false;
        };
        readonly disabled: {
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
        readonly 'max-width': "24rem";
        readonly 'padding-x': "calc(var(--spacing) * 0.75)";
        readonly 'padding-y': "calc(var(--spacing) * 0.4375)";
        readonly 'border-radius': "var(--border-radius)";
        readonly 'font-size': "var(--font-size-md)";
        readonly 'text-color': "var(--text-color)";
        readonly 'background-color': "var(--background-color)";
        readonly 'box-shadow': "var(--box-shadow)";
        readonly 'z-index': 15;
    };
};
type ETooltip = ComponentConfiguration<typeof configuration, {
    reference: {
        properties: {
            id: string;
        };
    };
    content: {
        properties: Record<string, never>;
    };
} & ComponentSlots & DisabledSlots>;
declare const ETooltip: import("vue").DefineComponent<{
    readonly placement: {
        readonly type: PropType<Placement>;
        readonly _preset: true;
    };
    readonly delay: {
        readonly type: PropType<number | {
            show: number;
            hide: number;
        }>;
        readonly default: undefined;
        readonly _preset: true;
    };
    readonly flip: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
        readonly _preset: true;
    };
    readonly triggers: {
        readonly type: PropType<("focus" | "hover")[]>;
        readonly default: undefined;
        readonly _preset: true;
        readonly _verbose: false;
    };
    readonly padding: {
        readonly type: PropType<Padding>;
        readonly default: undefined;
        readonly _preset: true;
    };
    readonly offset: {
        readonly type: PropType<number>;
        readonly _preset: true;
    };
    readonly arrow: {
        readonly type: PropType<false | {
            size: number;
        }>;
        readonly default: undefined;
        readonly _preset: true;
        readonly _verbose: true;
    };
    readonly text: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    /**
     * Binding is a copy of props, but reactive. Used by directive.
     * Do not use this directly.
     *
     * TODO: Exclude this from emitted declarations.
     */
    readonly binding: {
        readonly type: PropType<Ref<any>>;
        readonly default: undefined;
        readonly _verbose: false;
    };
    readonly disabled: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly placement: {
        readonly type: PropType<Placement>;
        readonly _preset: true;
    };
    readonly delay: {
        readonly type: PropType<number | {
            show: number;
            hide: number;
        }>;
        readonly default: undefined;
        readonly _preset: true;
    };
    readonly flip: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
        readonly _preset: true;
    };
    readonly triggers: {
        readonly type: PropType<("focus" | "hover")[]>;
        readonly default: undefined;
        readonly _preset: true;
        readonly _verbose: false;
    };
    readonly padding: {
        readonly type: PropType<Padding>;
        readonly default: undefined;
        readonly _preset: true;
    };
    readonly offset: {
        readonly type: PropType<number>;
        readonly _preset: true;
    };
    readonly arrow: {
        readonly type: PropType<false | {
            size: number;
        }>;
        readonly default: undefined;
        readonly _preset: true;
        readonly _verbose: true;
    };
    readonly text: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    /**
     * Binding is a copy of props, but reactive. Used by directive.
     * Do not use this directly.
     *
     * TODO: Exclude this from emitted declarations.
     */
    readonly binding: {
        readonly type: PropType<Ref<any>>;
        readonly default: undefined;
        readonly _verbose: false;
    };
    readonly disabled: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}>>, {
    readonly id: string;
    readonly padding: Padding;
    readonly text: string;
    readonly disabled: boolean;
    readonly flip: boolean;
    readonly delay: number | {
        show: number;
        hide: number;
    };
    readonly triggers: ("focus" | "hover")[];
    readonly arrow: false | {
        size: number;
    };
    readonly binding: Ref<any>;
}, {}>;
export { ETooltip, configuration };
