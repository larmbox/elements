import { PropType } from 'vue';
import { ComponentConfiguration, ComponentInstance, ComposableConfiguration } from '../common/types';
export declare function useBlock(_component: ComponentInstance<ComponentConfiguration>): {};
export declare const configuration: {
    readonly props: {
        readonly block: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
    };
    readonly emits: {};
};
export type BlockSlots = Record<string, never>;
export type BlockConfiguration = ComposableConfiguration<typeof configuration, BlockSlots>;
