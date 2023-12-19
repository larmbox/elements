# Checkbox <Tag text="<ECheckbox>" />

The checkbox is shown as a square box that is ticked (checked) when activated. Checkboxes are used to let a user select one or more options of a limited number of choices.

<Snippet :code="example" />

## Variant

Use the `variant` prop to change the checkbox theming according to your configured [variants](/theme/variants).

<Snippet :code="variants" class="wrap" />

### Highlight

Set the `highlight` prop to override the default border color with the variant color.

<Snippet :code="highlight" class="wrap" />

Highlight is automatically set to `true` if the [feedback](#feedback) prop is set. Set `highlight` to `false` to override feedback highlighting.

<Snippet :code="highlightFeedback" class="wrap" />

## Labels

Use the `label`, and `description` props to describe your checkbox.

<Snippet :code="labels" class="wrap" />

You can also use slots for more freedom on label content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="labelsSlots" class="wrap" />

## Block

By default the switch component is displayed as an inline element. By adding the `block` prop, the input container will span the whole container width.

<Snippet :code="block" class="wrap" />

## Disabled

A disabled checkbox cannot be interacted with.

<Snippet :code="disabled" class="wrap" />

## Indeterminate

Set the indeterminate prop to render a checkbox in an indeterminate state. This only affects the element visually and the checkbox works like usual.

<Snippet :code="indeterminate" class="wrap" />

## Feedback

Use the `feedback` prop to add validation or other form errors to your checkbox input. The `feedback` prop controls the `invalid` attribute on the input element.

<Snippet :code="feedback" class="wrap" />

You can also use slots for more flexibility on feedback content. Please refer to the
[feedback slot](#slot-feedback) for information.

<Snippet :code="feedbackSlots" class="wrap" />

## Component Reference

<ComponentReference src="ECheckbox" />

<script lang="ts" setup>
const example = `<ECheckbox label="Checkbox" />`

const variants = `
<ECheckbox variant="primary" label="Primary" checked />
<ECheckbox variant="secondary" label="Secondary" checked />
`

const highlight = `
<ECheckbox highlight variant="primary" label="Primary" />
<ECheckbox highlight variant="secondary" label="Secondary" />
`

const highlightFeedback = `
<ECheckbox feedback="Error!" label="Feedback" />
<ECheckbox :highlight="false" feedback="Error!" label="Override" />
`

const labels = `
<ECheckbox 
  label="Label"
  description="Description"
  checked
/>
`

const labelsSlots = `
<template>
  <ECheckbox checked>
    <template #label="{ id }">
      <label :for="id">Label</label>
    </template>
    <template #description>
      <span style="color: var(--primary-color)" v-text="'Description'" />
    </template>
  </ECheckbox>
</template>
`

const block = `
<ECheckbox block label="Block" checked />
<ECheckbox block label="Block 2" checked />
`

const disabled = `
<ECheckbox disabled label="Disabled" />
<ECheckbox disabled checked label="Disabled" />`

const indeterminate = `
<ECheckbox indeterminate label="Indeterminate" checked />`

const feedback = `
<ECheckbox label="Checkbox" feedback="Bad!" />
`

const feedbackSlots = `
<template>
  <ECheckbox label="Checkbox">
    <template #feedback>
      <strong style="text-decoration: underline" v-text="'Very bad!'" />
    </template>
  </ECheckbox>
</template>
`
</script>
