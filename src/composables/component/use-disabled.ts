import { ExtractPropTypes } from 'vue';

export function useDisabled(): Record<never, never> {
  return {};
}

export const disabledProps = {
  disabled: {
    type: Boolean,
    default: undefined,
  },
};

export type DisabledProps = ExtractPropTypes<typeof disabledProps>;
