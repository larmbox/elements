import { ExtractPropTypes } from 'vue';
import { componentProps } from '~/composables/component';

export const style = {};

export const props = {
  ...componentProps,
  className: {
    type: String,
  },
  prefix: {
    type: String,
  },
  type: {
    type: String,
  },
  tag: {
    type: String,
  },
  i: {
    type: String,
  },
  icon: {
    type: String,
  },
};

export type Props = ExtractPropTypes<typeof props>;
