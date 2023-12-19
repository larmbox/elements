<template>
  <code v-text="`${text}`" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>
