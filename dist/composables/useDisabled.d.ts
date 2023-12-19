import { PropType } from 'vue';
import { ComponentConfiguration, ComponentInstance, ComposableConfiguration } from '../common/types';
export declare function useDisabled(_component: ComponentInstance<ComponentConfiguration>): {};
export declare const configuration: {
    readonly props: {
        readonly disabled: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
    };
    readonly emits: {};
};
export type DisabledSlots = Record<string, never>;
export type DisabledConfiguration = ComposableConfiguration<typeof configuration, DisabledSlots>;
