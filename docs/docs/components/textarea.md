# Textarea <Tag text="<ETextarea>" />

The Textarea component represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text.

<Snippet :code="example" />

## Size

The Textarea component allows a `size` prop. Elements provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" class="grid-3" />

## Variant

Use the `variant` prop to change the input theming according to your configured [themes](/configuration/themes/).

<Snippet :code="variants" class="grid-4" />

### Highlight

Set the `highlight` prop to override the default border color with the variant color.

<Snippet :code="highlight" class="grid-4" />

Highlight is automatically set to `true` if the [feedback](#feedback) prop is populated. Set highlight to `false` to override feedback highlighting.

<Snippet :code="highlightFeedback" class="gap" />

## Labels

Use the `label`, `description` and `hint` props to describe your input fields.

<Snippet :code="labels" />

You can also use slots for more freedom on label content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="labelsSlots" />

## Block

By default the textarea component is displayed as an inline element. By adding the `block` prop, the input will span the whole container width.

<Snippet :code="block" />

## Disabled

A disabled textarea field cannot be interacted with.

<Snippet :code="disabled" class="gap" />

## Readonly

Readonly differs from [Disabled](#disabled) by still allowing selecting the text already present in the input field.

<Snippet :code="readonly" />

## Resize

Use the `resize` prop to allow or disallow resizing the textarea. Allowed values are `horizontal`, `vertical`, `none` or `both`. The default value is `both`.

<Snippet :code="resize" />

## Feedback

Use the `feedback` slot to add validation or other form errors to your textarea field. Elements provides variants for error and success feedback types.

<Snippet :code="feedback" />

## Component Reference

<ComponentMeta src="ETextarea" />

<script lang="ts" setup>
const example = `<ETextarea label="Textarea" hint="Please enter something here." />`

const sizes = `
<ETextarea size="sm" placeholder="Small" />
<ETextarea size="md" placeholder="Default" />
<ETextarea size="lg" placeholder="Large" />
`

const variants = `
<ETextarea variant="primary" placeholder="Primary" />
<ETextarea variant="secondary" placeholder="Secondary" />
<ETextarea variant="error" placeholder="Error" />
<ETextarea variant="success" placeholder="Success"/>
`

const highlight = `
<ETextarea highlight variant="primary" placeholder="Primary" />
<ETextarea highlight variant="secondary" placeholder="Secondary" />
<ETextarea highlight variant="error" placeholder="Error" />
<ETextarea highlight variant="success" placeholder="Success"/>
`

const highlightFeedback = `
<ETextarea feedback="Error!" placeholder="Feedback"/>
<ETextarea :highlight="false" feedback="Error!" placeholder="Override"/>
`

const labels = `
<ETextarea 
  label="Label"
  description="Description"
  hint="Hint"
  placeholder="Placeholder"
/>
`

const labelsSlots = `
<ETextarea placeholder="Placeholder">
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: purple" v-text="'Description'" />
  </template>
  <template #hint>
    <span style="color: purple" v-text="'Hint'" />
  </template>
</ETextarea>
`

const block = `
<ETextarea block label="Block" />
`

const disabled = `
<ETextarea disabled placeholder="Disabled" />`

const readonly = `
<template>
  <ETextarea v-model="text" readonly />
</template>

<script>
export default {
  data() {
    return {
      text: "Value"
    }
  }
}
<\/script>
`

const resize = `
<ETextarea resize="none" placeholder="Not resizeable!" />
`

const feedback = `
<ETextarea label="Textarea" block feedback="Bad!" margin />
<ETextarea label="Textarea" block feedback="Good!" feedback-type="success" />
`
</script>
