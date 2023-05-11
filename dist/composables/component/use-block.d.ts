import { ExtractPropTypes } from 'vue';
import { Component, ComponentInstance, Components } from '../../common/types';
export declare function useBlock(component: ComponentInstance<Component<keyof Components, unknown, BlockProps>>): {
    blockClass: import("vue").ComputedRef<"block" | undefined>;
};
export declare const blockProps: {
    block: {
        type: BooleanConstructor;
        default: undefined;
    };
};
export type BlockProps = ExtractPropTypes<typeof blockProps>;
