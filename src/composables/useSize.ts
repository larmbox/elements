import { PropType } from 'vue';
import {
  ComponentConfiguration,
  ComponentInstance,
  ComposableConfiguration,
} from '~/common/types';

export function useSize(_component: ComponentInstance<ComponentConfiguration>) {
  return {};
}

export const configuration = {
  props: {
    size: {
      type: String as PropType<string>,
      _preset: true,
    },
  },
  emits: {},
} as const;

export type SizeSlots = Record<string, never>;
export type SizeConfiguration = ComposableConfiguration<
  typeof configuration,
  SizeSlots
>;
