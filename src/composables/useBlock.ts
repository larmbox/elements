import { PropType } from 'vue';
import {
  ComponentConfiguration,
  ComponentInstance,
  ComposableConfiguration,
} from '~/common/types';

export function useBlock(
  _component: ComponentInstance<ComponentConfiguration>,
) {
  return {};
}
export const configuration = {
  props: {
    block: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
  },
  emits: {},
} as const;

export type BlockSlots = Record<string, never>;
export type BlockConfiguration = ComposableConfiguration<
  typeof configuration,
  BlockSlots
>;
