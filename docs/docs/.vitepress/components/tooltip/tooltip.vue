<template>
  <Snippet :code="code" />
</template>

<script lang="ts" setup>
const code = `
<ETooltip trigger="hover">
  <template #trigger>
    <EButton>Tooltip</EButton>
  </template>
  <div>
    hasd
  </div>
</ETooltip>
`;
</script>
