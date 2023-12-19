import { ExtractPropTypes, PropType } from 'vue';
import { ComponentName } from '../common/enums';
import { ComponentConfiguration as _ComponentConfiguration, ComponentInstance, ComposableConfiguration } from '../common/types';
/**
 * Returns the current component instance and merged props.
 */
export declare function useComponent<T extends _ComponentConfiguration>(configuration: Omit<T, 'slots'>, props: ExtractPropTypes<T['props']>): ComponentInstance<T>;
/**
 * Returns component global configuration.
 *
 * @param name
 */
export declare function getGlobalConfiguration<T extends _ComponentConfiguration>(name: ComponentName): T;
export declare const configuration: {
    readonly props: {
        readonly id: {
            readonly type: PropType<string>;
            readonly default: undefined;
        };
    };
    readonly emits: {};
};
export type ComponentSlots = Record<string, never>;
export type ComponentConfiguration = ComposableConfiguration<typeof configuration, ComponentSlots>;
