import { ExtractPropTypes } from 'vue';
export declare function useDisabled(): Record<never, never>;
export declare const disabledProps: {
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
};
export type DisabledProps = ExtractPropTypes<typeof disabledProps>;
