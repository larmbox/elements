<template>
  <div :id="global ? undefined : id" :global="global ? '1' : undefined">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, onUpdated, watch } from 'vue';
import { _useElements } from '~/composables/use-elements/use-elements';
import { props } from './EThemeProvider';

export default defineComponent({
  name: 'EThemeProvider',
  props,
  setup(props, _context) {
    const { uuid, render, destroy, components } = _useElements();

    const id = props.global ? 'global' : uuid();

    const create = () => {
      render(id);
    };

    onMounted(create);
    onUpdated(create);
    watch(() => [components], create, { deep: true });

    onUnmounted(() => setTimeout(() => destroy(id), props.destroyDelay));

    return { id };
  },
});
</script>
