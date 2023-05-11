import { ComputedRef, ExtractPropTypes, PropType } from 'vue';
import { Component, ComponentInstance, Components, RequiredBy } from '../../common/types';
export declare function useSize(component: ComponentInstance<Component<keyof Components, unknown, SizeProps>>): {
    sizeClass: ComputedRef<string>;
};
export declare const sizeProps: {
    size: {
        type: PropType<string>;
    };
};
export type SizeProps = RequiredBy<ExtractPropTypes<typeof sizeProps>, 'size'>;
