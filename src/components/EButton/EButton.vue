<template>
  <component
    :is="props.tag"
    :id="id"
    :class="[
      css.base(),
      blockClass,
      outlineClass,
      sizeClass,
      variantClass,
      css.modifier({
        block: props.block,
        loading: props.loading,
        'icon-left': !!props.iconLeft,
        'icon-right': !!props.iconRight,
      }),
    ]"
    :active-class="
      props.tag.toLowerCase().includes('link') ? props.activeClass : undefined
    "
    v-bind="{
      ...bindProps({
        exclude: [
          'size',
          'tag',
          'variant',
          'icon',
          'iconLeft',
          'iconRight',
          'outline',
          'loading',
        ],
      }),
      ...bindAttrs(),
    }"
  >
    <ELoading v-if="props.loading" :size="props.size" variant="inherit" />
    <div :class="css.element('content')">
      <EIcon v-if="props.icon" :icon="props.icon" />
      <EIcon v-if="props.iconLeft" :icon="props.iconLeft" />
      <slot v-if="hasSlot('default')" :class="css.element(`${name}-slot`)" />
      <EIcon v-if="props.iconRight" :icon="props.iconRight" />
    </div>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { EButtonComponent } from '..';

import EIcon from '~/components/EIcon';
import ELoading from '~/components/ELoading';

import { props, style } from './EButton';

import { ComponentName } from '~/common/enums';
import {
  useBlock,
  useComponent,
  useContextUtil,
  useSize,
  useVariantWithOutline,
} from '~/composables/component';
import { _useElements } from '~/composables/use-elements/use-elements';

export default defineComponent({
  name: ComponentName.EButton,
  props,
  // emits: ['click'], // By defining 'click' in emits, the native click listener is inherited automatically on the root element.
  components: { EIcon, ELoading },
  inheritAttrs: false,
  setup(props) {
    const component = useComponent<EButtonComponent>(
      ComponentName.EButton,
      props
    );

    const {
      theming: { registerComponentStyle },
    } = _useElements();

    registerComponentStyle(component.name, style);

    const { blockClass } = useBlock(component);
    const { sizeClass } = useSize(component);
    const { variantClass, outlineClass } = useVariantWithOutline(component);

    return {
      ...component,
      ...useContextUtil(component),
      blockClass,
      outlineClass,
      sizeClass,
      variantClass,
    };
  },
});
</script>
