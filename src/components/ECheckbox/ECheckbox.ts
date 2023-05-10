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
  'line-height': 'var(--line-height)',

  'size-sm': '1.25rem',
  'line-height-sm': 'var(--line-height-sm)',

  'size-lg': '1.75rem',
  'line-height-lg': 'var(--line-height-lg)',

  'border-radius': 'var(--border-radius)',
  'focus-shadow-size': 'var(--focus-shadow-size)',
  'border-width': 'var(--border-width)',
  'border-color': 'var(--border-color)',
};

export const props = {
  ...componentProps,
  ...disabledProps,
  ...blockProps,
  ...inputProps,
  ...sizeProps,
  ...variantProps,
  indeterminate: { type: Boolean, default: undefined },
  checked: { type: Boolean, default: undefined },
};

export type Props = RequiredBy<
  ExtractPropTypes<typeof props>,
  'feedbackType' | 'size' | 'variant'
>;
