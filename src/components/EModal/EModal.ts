import { ExtractPropTypes } from 'vue';
import { PartialBy, RequiredBy } from '~/common/types';
import { componentProps, sizeProps } from '~/composables/component';

export const style = {
  'border-radius': 'var(--border-radius)',
  'background-color': 'var(--body-background-color)',

  size: '34rem',
  'size-sm': '28rem',
  'size-lg': '40rem',
};

export const props = {
  ...componentProps,
  ...sizeProps,

  title: {
    type: String,
  },
  description: {
    type: String,
  },
  closeable: {
    type: Boolean,
    default: true,
  },
  closeOnBackdrop: { type: Boolean, default: undefined },
  closeOnRouteChange: { type: Boolean, default: true },
};

export type Props = PartialBy<
  RequiredBy<ExtractPropTypes<typeof props>, 'size'>,
  'closeOnRouteChange' | 'closeable'
>;
