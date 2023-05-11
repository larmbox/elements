import { ExtractPropTypes, PropType } from 'vue';
interface Theme {
    name: string;
    variables: Record<string, string>;
}
export declare const props: {
    theme: {
        type: PropType<Theme>;
    };
    global: {
        type: BooleanConstructor;
        default: undefined;
    };
    destroyDelay: {
        type: NumberConstructor;
    };
};
export type Props = ExtractPropTypes<typeof props>;
export {};
