# Checkbox <Tag text="<ECheckbox>" />

The checkbox is shown as a square box that is ticked (checked) when activated. Checkboxes are used to let a user select one or more options of a limited number of choices.

<Snippet :code="example" />

## Size

The checkbox component allows a `size` prop. Elements provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" class="gap-lg" />

## Variant

Use the `variant` prop to change the checkbox theming according to your configured [themes](/configuration/themes/).

<Snippet :code="variants" class="gap-lg" />

### Highlight

Set the `highlight` prop to override the default border color with the variant color.

<Snippet :code="highlight" class="gap-lg" />

Highlight is automatically set to `true` if the [feedback](#feedback) prop is set. Set `highlight` to `false` to override feedback highlighting.

<Snippet :code="highlightFeedback" class="gap-lg" />

## Labels

Use the `label`, and `description` props to describe your checkbox.

<Snippet :code="labels" />

You can also use slots for more freedom on label content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="labelsSlots" />

## Block

By default the switch component is displayed as an inline element. By adding the `block` prop, the input container will span the whole container width.

<Snippet :code="block" />

## Disabled

A disabled checkbox cannot be interacted with.

<Snippet :code="disabled" />

## Indeterminate

Set the indeterminate prop to render a checkbox in an indeterminate state. This only affects the element visually and the checkbox works like usual.

<Snippet :code="indeterminate" />

## Feedback

Use the `feedback` prop to add validation or other form errors to your checkbox input. Elements provides variants for error and success feedback types.

<Snippet :code="feedback" />

## Component Reference

<ComponentMeta src="ECheckbox" />

<script lang="ts" setup>
const example = `<ECheckbox label="Checkbox" />`

const sizes = `
<ECheckbox size="sm" label="Small" block />
<ECheckbox size="md" label="Default" block />
<ECheckbox size="lg" label="Large" block />
`

const variants = `
<ECheckbox variant="primary" label="Primary" checked />
<ECheckbox variant="secondary" label="Secondary" checked />
<ECheckbox variant="error" label="Error" checked />
<ECheckbox variant="success" label="Success" checked />
`

const highlight = `
<ECheckbox highlight variant="primary" label="Primary" />
<ECheckbox highlight variant="secondary" label="Secondary" />
<ECheckbox highlight variant="error" label="Error" />
<ECheckbox highlight variant="success" label="Success" />
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
<ECheckbox checked>
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: purple" v-text="'Description'" />
  </template>
</ECheckbox>
`

const block = `
<ECheckbox block label="Block" margin checked />
<ECheckbox block label="Block 2" checked />
`

const disabled = `
<ECheckbox disabled label="Disabled" block margin />
<ECheckbox disabled checked label="Disabled" block />`

const indeterminate = `
<ECheckbox indeterminate label="Indeterminate" checked />`

const feedback = `
<ECheckbox label="Checkbox" block feedback="Bad!" margin />
<ECheckbox label="Checkbox" block feedback="Good!" feedback-type="success" />
`
</script>
