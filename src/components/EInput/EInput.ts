import { ExtractPropTypes } from 'vue';
import { RequiredBy } from '~/common/types';
import {
  blockProps,
  componentProps,
  disabledProps,
  inputFieldProps,
  sizeProps,
  variantProps,
} from '~/composables/component';

export const style = {
  'border-radius': 'var(--border-radius)',
  'border-width': 'var(--border-width)',
  'border-color': 'var(--border-color)',
  'border-color--disabled': 'var(--border-color--disabled)',

  'text-color': 'var(--text-color)',
  'text-color--hover': 'var(--text-color--hover)',
  'text-color--focus': 'var(--text-color--focus)',
  'text-color--disabled': 'var(--text-color--disabled)',

  'placeholder-color': 'var(--placeholder-color)',
  'placeholder-color--hover': 'var(--placeholder-color--hover)',
  'placeholder-color--focus': 'var(--placeholder-color--focus)',
  'placeholder-color--disabled': 'var(--placeholder-color--disabled)',

  'background-color': 'var(--background-color)',
  'background-color--hover': 'var(--background-color--hover)',
  'background-color--focus': 'var(--background-color--focus)',
  'background-color--disabled': 'var(--background-color--disabled)',

  'padding-x': 'calc(var(--spacing) * 0.75)',
  'padding-y': 'calc(var(--spacing) * 0.4375)',
  'font-size': 'var(--text-md)',
  'line-height': 'var(--line-height)',

  'padding-x-sm': 'calc(var(--spacing) * 0.5)',
  'padding-y-sm': 'calc(var(--spacing) * 0.28125)',
  'font-size-sm': 'var(--text-sm)',
  'line-height-sm': 'var(--line-height-sm)',

  'padding-x-lg': 'var(--spacing)',
  'padding-y-lg': 'calc(var(--spacing) * 0.59375)',
  'font-size-lg': 'var(--text-lg)',
  'line-height-lg': 'var(--line-height-lg)',
};

export const props = {
  ...componentProps,
  ...inputFieldProps,
  ...disabledProps,
  ...sizeProps,
  ...variantProps,
  ...blockProps,

  type: {
    type: String,
  },
  min: {
    type: Number,
  },
  max: {
    type: Number,
  },
  step: {
    type: Number,
  },
};

export type Props = RequiredBy<
  ExtractPropTypes<typeof props>,
  'type' | 'feedbackType' | 'size' | 'variant'
>;
