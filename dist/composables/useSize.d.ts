import { PropType } from 'vue';
import { ComponentConfiguration, ComponentInstance, ComposableConfiguration } from '../common/types';
export declare function useSize(_component: ComponentInstance<ComponentConfiguration>): {};
export declare const configuration: {
    readonly props: {
        readonly size: {
            readonly type: PropType<string>;
            readonly _preset: true;
        };
    };
    readonly emits: {};
};
export type SizeSlots = Record<string, never>;
export type SizeConfiguration = ComposableConfiguration<typeof configuration, SizeSlots>;
