import { ExtractPropTypes } from 'vue';
import { RequiredBy } from '~/common/types';
import {
  componentProps,
  sizeProps,
  variantProps,
} from '~/composables/component';

export const style = {
  size: `var(--text)`,
  'size-sm': `var(--text-sm)`,
  'size-lg': `var(--text-lg)`,
};

export const props = {
  ...componentProps,
  ...sizeProps,
  ...variantProps,
  mode: {
    type: String,
  },
  role: {
    type: String,
  },
  label: {
    type: String,
  },
  loading: {
    type: Boolean,
    default: undefined,
  },
};

export type Props = RequiredBy<
  ExtractPropTypes<typeof props>,
  'size' | 'variant' | 'mode'
>;
