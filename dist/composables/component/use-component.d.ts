import { ComputedRef, ExtractPropTypes } from 'vue';
import { ComponentInstance, GenericComponent, GenericProps } from '../../common/types';
export declare const componentProps: {
    id: {
        type: StringConstructor;
    };
};
export type ComponentProps = ExtractPropTypes<typeof componentProps>;
export interface Binds<T extends GenericComponent> {
    props?: (keyof T['props'])[];
    events?: string[];
}
export declare function useComponent<T extends GenericComponent>(name: T['name'], props: Partial<T['props']>): ComponentInstance<T>;
/**
 * Returns the current component instance and merged props.
 */
export declare function getComponentInstance<T extends GenericComponent>(name: T['name'], props: T['props']): ComponentInstance<T>;
/**
 * Returns component global configuration.
 *
 * @param name
 */
export declare function getComponentMeta<T extends GenericComponent>(name: T['name']): T & {
    props: ComputedRef<GenericProps>;
};
