<template>
  <div v-if="!label && useSlot" :class="css.element('label', name)">
    <slot />
  </div>
  <label
    v-else-if="label"
    :id="aria"
    :for="$props.for"
    :class="css.element('label', name)"
    v-text="label"
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
  name: 'EFormControlLabel',
  props: {
    useSlot: {
      type: Boolean,
    },
    for: componentProps.id,
    label: inputProps.label,
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
