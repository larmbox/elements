import { Placement } from '@popperjs/core';
import { ExtractPropTypes, PropType } from 'vue';
import { RequiredBy } from '~/common/types';
import {
  componentProps,
  disabledProps,
  variantProps,
} from '~/composables/component';

export const style = {
  'max-width': '24rem',
  'arrow-size': '8px',

  'padding-x': 'calc(var(--spacing) * 0.75)',
  'padding-y': 'calc(var(--spacing) * 0.4375)',

  'border-radius': 'var(--border-radius)',

  'font-size': 'var(--text-md)',

  'text-color': 'var(--text-color)',
  'background-color': 'var(--background-color)',
};

export const props = {
  ...componentProps,
  ...variantProps,
  ...disabledProps,

  placement: String as PropType<Placement>,
  delay: Number,
  trigger: String as PropType<'click' | 'hover'>,
  offset: Array as unknown as PropType<[number, number]>,
  arrow: Object as PropType<{ padding: number }>,
  disableTouch: { type: Boolean, default: undefined },
  interactive: { type: Boolean, default: undefined },
};

export type Props = RequiredBy<ExtractPropTypes<typeof props>, 'variant'>;
