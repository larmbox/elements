import { PropType } from 'vue';
import { ComponentName } from '../../common/enums';
import { ComponentConfiguration } from '../../common/types';
import { ComponentSlots } from '../../composables/useComponent';
import { SizeSlots } from '../../composables/useSize';
declare const configuration: {
    readonly name: ComponentName.EModal;
    readonly props: {
        readonly size: {
            readonly _preset: true;
            readonly type: PropType<string>;
        };
        readonly title: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly description: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
        readonly closeable: {
            readonly type: PropType<("outside" | "escape" | "route")[]>;
            readonly default: undefined;
            readonly _preset: true;
            readonly _verbose: true;
        };
        readonly closeButton: {
            readonly type: PropType<false | {
                title?: string | undefined;
                ariaLabel?: string | undefined;
                icon: string;
            }>;
            readonly default: undefined;
            readonly _preset: true;
            readonly _verbose: true;
        };
        readonly transitionDuration: {
            readonly type: PropType<number>;
            readonly _preset: true;
        };
        readonly rejectCloseClass: {
            readonly type: PropType<string | null>;
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
        readonly id: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
    };
    readonly emits: {
        readonly close: () => boolean;
        readonly open: () => boolean;
        readonly 'reject-close': () => boolean;
        readonly show: () => boolean;
        readonly hide: () => boolean;
    };
    readonly style: {
        readonly 'border-radius': "var(--border-radius)";
        readonly 'background-color': "var(--background-color)";
        readonly 'body-color': "var(--body-color)";
        readonly size: "34rem";
        readonly 'size-sm': "28rem";
        readonly 'size-lg': "40rem";
        readonly 'z-index': 10;
        readonly 'line-height': "var(--line-height)";
        readonly 'reject-close': "reject-close";
        readonly 'transition-time': "var(--transition-time)";
        readonly 'title-font-size': "calc(var(--font-size) * 1.5)";
        readonly 'description-text-color': "var(--text-color--light)";
        readonly 'description-font-size': "var(--font-size-sm)";
    };
};
type EModal = ComponentConfiguration<typeof configuration, {
    title: {
        properties: {
            data: unknown;
            close: () => void;
        };
    };
    description: {
        properties: {
            data: unknown;
            close: () => void;
        };
    };
    'header-extension': {
        properties: {
            data: unknown;
            close: () => void;
        };
    };
    default: {
        properties: {
            data: unknown;
            close: () => void;
        };
    };
    body: {
        properties: {
            data: unknown;
            close: () => void;
        };
    };
    'body-raw': {
        properties: {
            data: unknown;
            close: () => void;
        };
    };
    footer: {
        properties: {
            data: unknown;
            close: () => void;
        };
    };
    'footer-left': {
        properties: {
            data: unknown;
            close: () => void;
        };
    };
    'footer-right': {
        properties: {
            data: unknown;
            close: () => void;
        };
    };
} & ComponentSlots & SizeSlots>;
declare const EModal: import("vue").DefineComponent<{
    readonly size: {
        readonly _preset: true;
        readonly type: PropType<string>;
    };
    readonly title: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly description: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly closeable: {
        readonly type: PropType<("outside" | "escape" | "route")[]>;
        readonly default: undefined;
        readonly _preset: true;
        readonly _verbose: true;
    };
    readonly closeButton: {
        readonly type: PropType<false | {
            title?: string | undefined;
            ariaLabel?: string | undefined;
            icon: string;
        }>;
        readonly default: undefined;
        readonly _preset: true;
        readonly _verbose: true;
    };
    readonly transitionDuration: {
        readonly type: PropType<number>;
        readonly _preset: true;
    };
    readonly rejectCloseClass: {
        readonly type: PropType<string | null>;
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
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    readonly close: () => boolean;
    readonly open: () => boolean;
    readonly 'reject-close': () => boolean;
    readonly show: () => boolean;
    readonly hide: () => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly size: {
        readonly _preset: true;
        readonly type: PropType<string>;
    };
    readonly title: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly description: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
    readonly closeable: {
        readonly type: PropType<("outside" | "escape" | "route")[]>;
        readonly default: undefined;
        readonly _preset: true;
        readonly _verbose: true;
    };
    readonly closeButton: {
        readonly type: PropType<false | {
            title?: string | undefined;
            ariaLabel?: string | undefined;
            icon: string;
        }>;
        readonly default: undefined;
        readonly _preset: true;
        readonly _verbose: true;
    };
    readonly transitionDuration: {
        readonly type: PropType<number>;
        readonly _preset: true;
    };
    readonly rejectCloseClass: {
        readonly type: PropType<string | null>;
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
    readonly id: {
        readonly type: PropType<string>;
        readonly default: undefined;
    };
}>> & {
    onHide?: (() => any) | undefined;
    onShow?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
    "onReject-close"?: (() => any) | undefined;
}, {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly ariaLabelledby: string;
    readonly ariaDescribedby: string;
    readonly closeable: ("outside" | "escape" | "route")[];
    readonly closeButton: false | {
        title?: string | undefined;
        ariaLabel?: string | undefined;
        icon: string;
    };
    readonly rejectCloseClass: string | null;
}, {}>;
export { EModal, configuration };
