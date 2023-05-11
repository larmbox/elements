import { ExtractPropTypes } from 'vue';
import { PartialBy, RequiredBy } from '../../common/types';
export declare const style: {
    'border-radius': string;
    'background-color': string;
    size: string;
    'size-sm': string;
    'size-lg': string;
};
export declare const props: {
    title: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnBackdrop: {
        type: BooleanConstructor;
        default: undefined;
    };
    closeOnRouteChange: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<string>;
    };
    id: {
        type: StringConstructor;
    };
};
export type Props = PartialBy<RequiredBy<ExtractPropTypes<typeof props>, 'size'>, 'closeOnRouteChange' | 'closeable'>;
