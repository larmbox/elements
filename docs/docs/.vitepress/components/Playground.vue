<template>
  <div>
    <ETextarea
      label="Test"
      description="Description"
      hint="Test"
      :rows="5"
      :cols="50"
      resize="none"
      test="a"
      @mouseenter="onInput"
    />
    {{ a }}
    <ERadio v-model="a" block label="A" value="b" />
    <ERadio v-model="a" block label="A" value="a" />
    <ERadio v-model="a" block label="A" value="b" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(props, contxt) {
    const a = ref(null);
    const onInput = (event) => {
      console.log(event);
    };

    return { onInput, a };
  },
});
</script>

<style lang="scss"></style>
