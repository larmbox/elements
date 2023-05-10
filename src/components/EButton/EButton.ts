import { ExtractPropTypes } from 'vue';
import { RequiredBy } from '~/common/types';
import {
  blockProps,
  componentProps,
  disabledProps,
  linkProps,
  sizeProps,
  variantWithOutlineProps,
} from '~/composables/component';

export const style = {
  'padding-x': 'calc(var(--spacing) * 0.75)',
  'padding-y': 'calc(var(--spacing) * 0.4375)',
  'padding-x-sm': 'calc(var(--spacing) * 0.5)',
  'padding-y-sm': 'calc(var(--spacing) * 0.28125)',
  'padding-x-lg': 'var(--spacing)',
  'padding-y-lg': 'calc(var(--spacing) * 0.59375)',

  'border-radius': 'var(--border-radius)',
  'border-width': 'var(--border-width)',

  'font-size': 'var(--text-md)',
  'font-size-sm': 'var(--text-sm)',
  'font-size-lg': 'var(--text-lg)',

  'line-height': 'var(--line-height)',
  'line-height-sm': 'var(--line-height-sm)',
  'line-height-lg': 'var(--line-height-lg)',

  'font-weight': 'var(--font-weight-normal)',
};

export const props = {
  ...componentProps,
  ...blockProps,
  ...disabledProps,
  ...sizeProps,
  ...linkProps,
  ...variantWithOutlineProps,

  tag: {
    type: String,
    inherit: true,
  },
  type: {
    type: String,
  },
  icon: {
    type: String,
  },
  iconLeft: {
    type: String,
  },
  iconRight: {
    type: String,
  },
  loading: {
    type: Boolean,
    default: undefined,
  },
};

export type Props = RequiredBy<
  ExtractPropTypes<typeof props>,
  'tag' | 'size' | 'variant'
>;
