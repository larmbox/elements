<template>
  <component
    :is="props.tag"
    v-if="props.type === 'inline'"
    :class="[css.base(), props.className]"
    aria-hidden="true"
    v-bind="bindAttrs()"
    v-text="`${props.prefix}${props.icon || props.i}`"
  />
  <component
    :is="props.tag"
    v-else-if="props.type === 'class'"
    :class="[
      css.base(),
      props.className,
      `${props.prefix}${props.icon || props.i}`,
    ]"
    aria-hidden="true"
    v-bind="bindAttrs()"
  />
  <svg
    v-else
    fill="currentColor"
    :class="[css.base(), props.className]"
    aria-hidden="true"
    :width="props.width"
    :height="props.height"
    v-bind="bindAttrs()"
  >
    <use :href="`${props.href}#${props.icon || props.i}`"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { EIconComponent } from '.';

import { props, style } from './EIcon';

import { ComponentName } from '~/common/enums';
import { useComponent, useContextUtil } from '~/composables/component';
import { _useElements } from '~/composables/use-elements/use-elements';

export default defineComponent({
  name: ComponentName.EIcon,
  props,
  inheritAttrs: false,
  setup(props) {
    const component = useComponent<EIconComponent>(ComponentName.EIcon, props);

    const {
      theming: { registerComponentStyle },
    } = _useElements();

    registerComponentStyle(component.name, style);

    return {
      ...component,
      ...useContextUtil(component),
    };
  },
});
</script>
