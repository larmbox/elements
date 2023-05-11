import { ExtractPropTypes, PropType } from 'vue';
import { Component, ComponentInstance, Components, RequiredBy } from '../../common/types';
export declare function useVariant(component: ComponentInstance<Component<keyof Components, unknown, VariantProps>>): {
    variantClass: import("vue").ComputedRef<string>;
};
export declare function useVariantWithOutline(component: ComponentInstance<Component<keyof Components, unknown, VariantWithOutlineProps>>): {
    variantClass: import("vue").ComputedRef<string>;
    outlineClass: import("vue").ComputedRef<"outline" | null>;
};
export declare const variantProps: {
    variant: {
        type: PropType<string>;
    };
};
export declare const variantWithOutlineProps: {
    outline: {
        type: BooleanConstructor;
        default: undefined;
    };
    variant: {
        type: PropType<string>;
    };
};
export type VariantProps = RequiredBy<ExtractPropTypes<typeof variantProps>, 'variant'>;
export type VariantWithOutlineProps = RequiredBy<ExtractPropTypes<typeof variantWithOutlineProps>, 'variant'>;
