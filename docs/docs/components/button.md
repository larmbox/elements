# Button <Tag text="<EButton>" />

The button component represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality.

<Snippet code="<EButton>Button</EButton>" />

## Size

The button component allows a `size` prop. Elements provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" class="gap" />

## Variant

Use the `variant` prop to change the button theming according to your configured [themes](/configuration/themes/).

<Snippet :code="variants" class="gap" />

### Outline

Add the `outline` prop to change the button to a outline variant.

<Snippet :code="outline" class="gap"  />

## Block

By default the button component is displayed as an inline element. By adding the `block` prop, the button will span the whole container width.

<Snippet code="<EButton block>Block</EButton>" />

## Disabled

Set the `disabled` prop to disable button default functionality.

<Snippet code="<EButton disabled>Disabled</EButton>" />

## Icons

Use the `icon-left` and `icon-right` props to add an icon according to your [EIcon](/components/icon) settings. If your button has no text, use the `icon` prop instead.

<Snippet :code="icon" class="gap" />

Icons are automatically scaled to button size.

## Loading

Add the `loading` prop to show the [Loading](/components/loading) component inside the button. **Note:** The Loading component's variant is set to `inherit`, inheriting the text color of the button.

<Snippet :code="loadingSnippet" />

The button will maintain its width when changed from non-loading to loading:

<Snippet :code="loadingSnippet2" />

## Component Reference

<ComponentMeta src="EButton" />

<script lang="ts" setup>
import {ref} from 'vue';

const sizes = `
<EButton size="sm">Small</EButton>
<EButton size="md">Default</EButton>
<EButton size="lg">Large</EButton>
`

const variants = `
<EButton variant="primary">Primary</EButton>
<EButton variant="secondary">Secondary</EButton>
<EButton variant="error">Error</EButton>
<EButton variant="success">Success</EButton>
`
const outline = `
<EButton variant="primary" outline>Primary</EButton>
<EButton variant="secondary" outline>Secondary</EButton>
<EButton variant="error" outline>Error</EButton>
<EButton variant="success" outline>Success</EButton>
`

const icon = `
<EButton icon-left="box">Text</EButton>
<EButton icon-right="mailbox">Text</EButton>
<EButton icon="bounding-box-circles"></EButton>
`

const loadingSnippet = `
<template>
  <EButton :loading="loading">Loading</EButton>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    }
  }
}
<\/script>
`

const loadingSnippet2 = `
<template>
  <EButton 
    :loading="loading"
    @click="loading = !loading"
  >
    Click to toggle loading state!
  </EButton>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  }
}
<\/script>
`
</script>
