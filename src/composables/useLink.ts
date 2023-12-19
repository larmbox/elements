import { PropType } from 'vue';
import {
  ComponentConfiguration,
  ComponentInstance,
  ComposableConfiguration,
} from '~/common/types';

export function useLink(_component: ComponentInstance<ComponentConfiguration>) {
  return {};
}

export const configuration = {
  props: {
    activeClass: {
      type: String as PropType<string>,
      default: undefined,
    },
    exactActiveClass: {
      type: String as PropType<string>,
      default: undefined,
    },
    append: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
    exact: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
    replace: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
    to: {
      type: Object as PropType<string | Record<string, unknown>>,
      default: undefined,
    },
    prefetch: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
    noPrefetch: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
    href: {
      type: String as PropType<string>,
      default: undefined,
    },
    target: {
      type: String as PropType<string>,
      default: undefined,
    },
    rel: {
      type: String as PropType<string>,
      default: undefined,
    },
  },
  emits: {},
} as const;

export type LinkSlots = Record<string, never>;
export type LinkConfiguration = ComposableConfiguration<
  typeof configuration,
  LinkSlots
>;
