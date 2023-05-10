<template>
  <div :class="[css.base('', name), css.modifier({ field, margin }, name)]">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ComponentName } from '~/common/enums';
import { useContextUtil } from '~/composables/component';
import { getComponentMeta } from '~/composables/component/use-component';

export default defineComponent({
  name: ComponentName.EFormControl,
  props: {
    field: {
      type: Boolean,
      default: false,
    },
    margin: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      name: getComponentMeta(ComponentName.EFormControl).name,
      ...useContextUtil(),
    };
  },
});
</script>
