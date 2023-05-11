import { ExtractPropTypes } from 'vue';
import { RequiredBy } from '../../common/types';
export declare const style: {
    size: string;
    'size-sm': string;
    'size-lg': string;
};
export declare const props: {
    mode: {
        type: StringConstructor;
    };
    role: {
        type: StringConstructor;
    };
    label: {
        type: StringConstructor;
    };
    loading: {
        type: BooleanConstructor;
        default: undefined;
    };
    variant: {
        type: import("vue").PropType<string>;
    };
    size: {
        type: import("vue").PropType<string>;
    };
    id: {
        type: StringConstructor;
    };
};
export type Props = RequiredBy<ExtractPropTypes<typeof props>, 'size' | 'variant' | 'mode'>;
