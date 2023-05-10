<template>
  <div v-if="!description && useSlot" :class="css.element('description', name)">
    <slot />
  </div>
  <span
    v-else-if="description"
    :id="aria"
    :class="css.element('description', name)"
    v-text="description"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ComponentName } from '~/common/enums';
import {
  componentProps,
  inputProps,
  useContextUtil,
} from '~/composables/component';
import { getComponentMeta } from '~/composables/component/use-component';

export default defineComponent({
  name: 'EFormControlDescription',
  props: {
    useSlot: {
      type: Boolean,
    },
    id: componentProps.id,
    description: inputProps.description,
    aria: {
      type: String,
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
