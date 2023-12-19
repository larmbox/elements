# Tooltip <Tag text="<ETooltip>" />

Tooltips display informative text when users hover over, focus on, or tap an
element. Elements uses [Floating UI](https://github.com/floating-ui/floating-ui) for
tooltips.

<Snippet :code="example" />

## Reactivity

The tooltip props and content is reactive.

<Snippet :code="reactive" />

## Triggers

You can set the tooltip trigger to `hover` or `focus`.

<Snippet :code="triggers" class="wrap" />

## Disabled

Use the [`disabled`](#prop-disabled) prop to disable the tooltip.

<Snippet :code="disabled" />

## Component Reference

<ComponentReference src="ETooltip" />

<script lang="ts" setup>
const example = `
<template>
  <ETooltip>
    <template #reference>
      <EButton>Tooltip</EButton>
    </template>
    <template #content>
      Howdy!
    </template>
  </ETooltip>
</template>
`

const reactive = `
<template>
  <ETooltip>
    <template #reference>
      <EButton>Counting</EButton>
    </template>
    <template #content>
      {{n}}
    </template>
  </ETooltip>
</template>

<script>
export default {
  data() {
    return {
      n: 1
    }
  },
  mounted() {
    setInterval(() => {
      this.n++;
    }, 500)
  }
}
<\/script>
`

const triggers = `
<template>
  <ETooltip :triggers="['hover']">
    <template #reference>
      <EButton>Hover</EButton>
    </template>
    <template #content>
      Howdy
    </template>
  </ETooltip>
  <ETooltip :triggers="['focus']">
    <template #reference>
      <EButton>Focus</EButton>
    </template>
    <template #content>
      Howdy
    </template>
  </ETooltip>
</template>
`

const disabled = `
<template>
  <ETooltip disabled>
    <template #reference>
      <EButton>Disabled</EButton>
    </template>
    <template #content>
      This will not show.
    </template>
  </ETooltip>
</template>
`
</script>

<style lang="scss">
.placement {
  display: grid;
  max-width: 300px; 
  gap: 4px;
}
</style>
