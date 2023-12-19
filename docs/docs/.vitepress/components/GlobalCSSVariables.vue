<template>
  <div v-if="variables" class="table">
    <table width="100%">
      <thead>
        <tr>
          <th>Variable</th>
          <th>Default Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="({ key, value }, i) in variables" :key="i">
          <td v-text="key" />
          <td v-text="value" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { common } from '../../../../src/composables/useTheme';

export default defineComponent({
  setup() {
    const variables = computed(() => {
      // Convert object to array and sort alphabetically.
      return Object.entries(common)
        .map(([key, value]) => {
          return {
            key,
            value,
          };
        })
        .sort(({ key: a }, { key: b }) => a.localeCompare(b));
    });

    return { variables };
  },
});
</script>
