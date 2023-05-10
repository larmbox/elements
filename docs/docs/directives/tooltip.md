# Tooltip <Tag text="v-tooltip" />

::: tip
This page covers the Tooltip directive. For advanced tooltips with support for slots or interaction, consider using the [Tooltip Component](/components/tooltip).

The component page also contains additional examples.
:::

Tooltips display informative text when users hover over, focus on, or tap an element. Elements uses [Popper](https://npmjs.org/package/@popperjs/core) for tooltips.

<Snippet :code="example" />

## Syntax

<Snippet no-render no-edit :code="syntax" />

## Reactivity

All directive arguments are reactive.

<Snippet :code="reactive" />

This also works when using the object approach:

<Snippet :code="reactive2" />

<script lang="ts" setup>
const example = `
<EButton v-tooltip="'Hey there!'">Hover me!</EButton>
`

const syntax = `
<template>
  <EButton v-tooltip:[trigger]:[position]="[text | options]">Button</EButton>
</template>`

const reactive = `
<template>
  <EButton :variant="variant" v-tooltip="n">Hover me!</EButton>
  {{variant}}
</template>

<script>
export default {
  data() {
    return {
      n: 1,
      variant: 'primary'
    }
  },
  mounted() {
    setInterval(() => {
      this.n++;
      this.variant = this.variant === 'primary' ? 'secondary' : 'primary'
    }, 500)
  }
}
<\/script>
`

const reactive2 = `
<template>
  <EButton v-tooltip="{ text: variant, variant }">Hover me!</EButton>
</template>

<script>
export default {
  data() {
    return {
      variant: 'primary',
    }
  },
  mounted() {
    setInterval(() => {
      this.variant = this.variant === 'primary' ? 'error' : 'primary';
    }, 500)
  }
}
<\/script>
`

</script>
