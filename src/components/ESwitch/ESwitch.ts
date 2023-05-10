import { ExtractPropTypes } from 'vue';
import { RequiredBy } from '~/common/types';
import {
  blockProps,
  componentProps,
  disabledProps,
  inputProps,
  sizeProps,
  variantProps,
} from '~/composables/component';

export const style = {
  size: '1.5rem',
  'size-sm': '1.25rem',
  'size-lg': '1.75rem',

  'border-radius': 'calc(var(--border-radius) * 16)',
  'focus-shadow-size': 'var(--focus-shadow-size)',
  'border-width': 'var(--border-width)',
  'border-color': 'var(--border-color)',

  'background-color': 'var(--background-color)',
  'background-color--hover': 'var(--background-color--hover)',
  'background-color--focus': 'var(--background-color--focus)',
  'background-color--disabled': 'var(--background-color--disabled)',
};

export const props = {
  ...componentProps,
  ...inputProps,
  ...disabledProps,
  ...sizeProps,
  ...blockProps,
  ...variantProps,

  checked: {
    type: Boolean,
    default: undefined,
  },
};

export type Props = RequiredBy<
  ExtractPropTypes<typeof props>,
  'size' | 'variant'
>;
