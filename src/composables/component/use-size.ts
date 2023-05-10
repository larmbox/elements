import { computed, ComputedRef, ExtractPropTypes, PropType } from 'vue';
import { Size } from '~/common/enums';
import {
  Component,
  ComponentInstance,
  Components,
  RequiredBy,
} from '~/common/types';
import { useContextUtil } from './use-context-util';

export function useSize(
  component: ComponentInstance<Component<keyof Components, unknown, SizeProps>>
): { sizeClass: ComputedRef<string> } {
  return {
    sizeClass: computed(() =>
      useContextUtil(component).css.modifier(component.props.value.size)
    ),
  };
}

export const sizeProps = {
  size: {
    type: String as PropType<Size | string>,
  },
};

export type SizeProps = RequiredBy<ExtractPropTypes<typeof sizeProps>, 'size'>;
