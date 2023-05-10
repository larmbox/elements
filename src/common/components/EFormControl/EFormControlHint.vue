<template>
  <div v-if="!hint && useSlot" :class="css.element('hint', name)">
    <slot />
  </div>
  <span
    v-else-if="hint"
    :id="aria"
    :class="css.element('hint', name)"
    v-text="hint"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ComponentName } from '~/common/enums';
import { inputFieldProps, useContextUtil } from '~/composables/component';
import { getComponentMeta } from '~/composables/component/use-component';

export default defineComponent({
  name: 'EFormControlHint',
  props: {
    useSlot: {
      type: Boolean,
    },
    hint: inputFieldProps.hint,
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
