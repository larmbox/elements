import { computed, ExtractPropTypes } from 'vue';
import { Component, ComponentInstance, Components } from '~/common/types';
import { useContextUtil } from './use-context-util';

export function useBlock(
  component: ComponentInstance<Component<keyof Components, unknown, BlockProps>>
) {
  const blockClass = computed(() =>
    component.props.value.block
      ? useContextUtil(component).css.modifier('block')
      : undefined
  );
  return { blockClass };
}

export const blockProps = {
  block: {
    type: Boolean,
    default: undefined,
  },
};

export type BlockProps = ExtractPropTypes<typeof blockProps>;
