import { PropType } from 'vue';
import { ComponentConfiguration, ComponentInstance, ComposableConfiguration } from '../common/types';
export declare function useLink(_component: ComponentInstance<ComponentConfiguration>): {};
export declare const configuration: {
    readonly props: {
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
    };
    readonly emits: {};
};
export type LinkSlots = Record<string, never>;
export type LinkConfiguration = ComposableConfiguration<typeof configuration, LinkSlots>;
