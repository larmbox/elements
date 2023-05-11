import { Placement } from '@popperjs/core';
import { ExtractPropTypes, PropType } from 'vue';
import { RequiredBy } from '../../common/types';
export declare const style: {
    'max-width': string;
    'arrow-size': string;
    'padding-x': string;
    'padding-y': string;
    'border-radius': string;
    'font-size': string;
    'text-color': string;
    'background-color': string;
};
export declare const props: {
    placement: PropType<Placement>;
    delay: NumberConstructor;
    trigger: PropType<"click" | "hover">;
    offset: PropType<[number, number]>;
    arrow: PropType<{
        padding: number;
    }>;
    disableTouch: {
        type: BooleanConstructor;
        default: undefined;
    };
    interactive: {
        type: BooleanConstructor;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    variant: {
        type: PropType<string>;
    };
    id: {
        type: StringConstructor;
    };
};
export type Props = RequiredBy<ExtractPropTypes<typeof props>, 'variant'>;
