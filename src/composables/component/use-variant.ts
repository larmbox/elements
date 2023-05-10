import { computed, ExtractPropTypes, PropType } from 'vue';
import { Variant } from '~/common/enums';
import {
  Component,
  ComponentInstance,
  Components,
  RequiredBy,
} from '~/common/types';
import { useContextUtil } from './use-context-util';

export function useVariant(
  component: ComponentInstance<
    Component<keyof Components, unknown, VariantProps>
  >
) {
  const variantClass = computed(() =>
    useContextUtil(component).css.modifier(component.props.value.variant)
  );

  return {
    variantClass,
  };
}

export function useVariantWithOutline(
  component: ComponentInstance<
    Component<keyof Components, unknown, VariantWithOutlineProps>
  >
) {
  const outlineClass = computed(() =>
    component.props.value.outline
      ? useContextUtil(component).css.modifier('outline')
      : null
  );

  return { outlineClass, ...useVariant(component) };
}

export const variantProps = {
  variant: {
    type: String as PropType<Variant | string>,
  },
};

export const variantWithOutlineProps = {
  ...variantProps,
  outline: {
    type: Boolean,
    default: undefined,
  },
};

export type VariantProps = RequiredBy<
  ExtractPropTypes<typeof variantProps>,
  'variant'
>;
export type VariantWithOutlineProps = RequiredBy<
  ExtractPropTypes<typeof variantWithOutlineProps>,
  'variant'
>;
