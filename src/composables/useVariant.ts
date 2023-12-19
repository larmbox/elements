import { PropType } from 'vue';
import {
  ComponentConfiguration,
  ComponentInstance,
  ComposableConfiguration,
} from '~/common/types';

export function useVariant(
  _component: ComponentInstance<ComponentConfiguration>,
) {
  return {};
}

export const configuration = {
  props: {
    variant: {
      type: String as PropType<string>,
    },
  },
  emits: {},
} as const;

export type VariantSlots = Record<string, never>;
export type VariantConfiguration = ComposableConfiguration<
  typeof configuration,
  VariantSlots
>;
