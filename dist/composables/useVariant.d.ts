import { PropType } from 'vue';
import { ComponentConfiguration, ComponentInstance, ComposableConfiguration } from '../common/types';
export declare function useVariant(_component: ComponentInstance<ComponentConfiguration>): {};
export declare const configuration: {
    readonly props: {
        readonly variant: {
            readonly type: PropType<string>;
        };
    };
    readonly emits: {};
};
export type VariantSlots = Record<string, never>;
export type VariantConfiguration = ComposableConfiguration<typeof configuration, VariantSlots>;
