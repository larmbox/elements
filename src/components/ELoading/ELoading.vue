<template>
  <div
    :id="id"
    :class="[css.base(), css.modifier(props.mode), sizeClass, variantClass]"
    aria-busy="true"
    v-bind="{ ...bindProps({ include: ['role'] }), ...bindAttrs() }"
  >
    <div>
      <div v-if="isDots" role="presentation" />
      <div v-if="isDots" role="presentation" />
      <div v-if="isDots" role="presentation" />
    </div>
    <span v-if="props.label" :class="screenReaderClass" v-text="props.label" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { ELoadingComponent } from '.';

import { props, style } from './ELoading';

import { ComponentName } from '~/common/enums';
import {
  useAria,
  useComponent,
  useSize,
  useVariant,
} from '~/composables/component';
import { useContextUtil } from '~/composables/component/use-context-util';
import { _useElements } from '~/composables/use-elements/use-elements';

export default defineComponent({
  name: ComponentName.ELoading,
  props,
  inheritAttrs: false,
  setup(props) {
    const component = useComponent<ELoadingComponent>(
      ComponentName.ELoading,
      props
    );

    const {
      theming: { registerComponentStyle },
    } = _useElements();

    registerComponentStyle(component.name, style);

    const { screenReaderClass } = useAria();
    const { sizeClass } = useSize(component);
    const { variantClass } = useVariant(component);

    const isDots = computed(() => component.props.value.mode === 'dots');

    return {
      ...component,
      ...useContextUtil(component),

      screenReaderClass,
      sizeClass,
      variantClass,

      isDots,
    };
  },
});
</script>
