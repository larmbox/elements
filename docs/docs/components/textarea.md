# Textarea <Tag text="<ETextarea>" />

The Textarea component represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text.

<Snippet :code="example" />

## Variant

Use the `variant` prop to change the element theming according to your configured [variants](/theme/variants).

<Snippet :code="variants" class="wrap" />

### Highlight

Set the `highlight` prop to override the default border color with the variant color.

<Snippet :code="highlight" class="wrap" />

Highlight is automatically set to `true` if the [feedback](#feedback) prop is populated. Set highlight to `false` to override feedback highlighting.

<Snippet :code="highlightFeedback" class="wrap" />

## Labels

Use the `label`, `description` and `hint` props to describe your input fields.

<Snippet :code="labels" class="wrap" />

You can also use slots for more freedom on label content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="labelsSlots" class="wrap" />

## Block

By default the textarea component is displayed as an inline element. By adding the `block` prop, the input will span the whole container width.

<Snippet :code="block" class="wrap" />

## Disabled

A disabled textarea field cannot be interacted with.

<Snippet :code="disabled" class="wrap" />

## Readonly

Readonly differs from [Disabled](#disabled) by still allowing selecting the text already present in the input field.

<Snippet :code="readonly" class="wrap" />

## Resize

Use the `resize` prop to allow or disallow resizing the textarea. Allowed values
are `horizontal`, `vertical`, `none` or `both`.

If the **resize** property is omitted, most browsers allow resizing of the
textarea.

<Snippet :code="resize" class="wrap" />

## Feedback

Use the `feedback` slot to add validation or other form errors to your textarea field. Elements provides variants for error and success feedback types.

<Snippet :code="feedback" class="wrap" />

## Component Reference

<ComponentReference src="ETextarea" />

<script lang="ts" setup>
const example = `<ETextarea label="Textarea" hint="Please enter something here." />`

const variants = `
<ETextarea variant="primary" placeholder="Primary" />
<ETextarea variant="secondary" placeholder="Secondary" />
`

const highlight = `
<ETextarea highlight variant="primary" placeholder="Primary" />
<ETextarea highlight variant="secondary" placeholder="Secondary" />
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
    <span style="color: var(--primary-color)" v-text="'Description'" />
  </template>
  <template #hint>
    <span style="color: var(--primary-color)" v-text="'Hint'" />
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
<ETextarea resize="both" placeholder="Both" />
<ETextarea resize="horizontal" placeholder="Horizontal" />
<ETextarea resize="vertical" placeholder="Vertical" />
<ETextarea resize="none" placeholder="None" />
<ETextarea placeholder="Not set" />
`

const feedback = `
<ETextarea label="Textarea" block feedback="Bad!" />
`
</script>
