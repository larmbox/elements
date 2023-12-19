import { PropType } from 'vue';
import {
  ComponentConfiguration,
  ComponentInstance,
  ComposableConfiguration,
} from '~/common/types';

export function useDisabled(
  _component: ComponentInstance<ComponentConfiguration>,
) {
  return {};
}

export const configuration = {
  props: {
    disabled: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
  },
  emits: {},
} as const;

export type DisabledSlots = Record<string, never>;
export type DisabledConfiguration = ComposableConfiguration<
  typeof configuration,
  DisabledSlots
>;
