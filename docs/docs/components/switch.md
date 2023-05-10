# Switch <Tag text="<ESwitch>" />

The switch works just like a [checkbox](/components/checkbox) but has a different appearance.

<Snippet :code="example" />

## Size

The switch component allows a `size` prop. Elements provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" class="gap-lg" />

## Variant

Use the `variant` prop to change the switch theming according to your configured [themes](/configuration/themes/).

<Snippet :code="variants" class="gap-lg" />

### Highlight

Set the `highlight` prop to override the default border color with the variant color.

<Snippet :code="highlight" class="gap-lg" />

Highlight is automatically set to `true` if the [feedback](#feedback) prop is populated. Set highlight to `false` to override feedback highlighting.

<Snippet :code="highlightFeedback" class="gap-lg" />

## Labels

Use the `label`, and `description` props to describe your switch.

<Snippet :code="labels" />

You can also use slots for more freedom on label content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="labelsSlots" />

## Block

By default the checkbox component is displayed as an inline element. By adding the `block` prop, the input container will span the whole container width.

<Snippet :code="block" />

## Disabled

A disabled switch cannot be interacted with.

<Snippet :code="disabled" />

## Feedback

Use the `feedback` slot to add validation or other form errors to your switch input. Elements provides variants for error and success feedback types.

<Snippet :code="feedback" />

## Component Reference

<ComponentMeta src="ESwitch" />

<script lang="ts" setup>
const example = `<ESwitch label="Switch" />`

const sizes = `
<ESwitch size="sm" label="Small" block />
<ESwitch size="md" label="Default" block />
<ESwitch size="lg" label="Large" block />
`

const variants = `
<ESwitch variant="primary" label="Primary" />
<ESwitch variant="secondary" label="Secondary" />
<ESwitch variant="error" label="Error" />
<ESwitch variant="success" label="Success" />
`

const highlight = `
<ESwitch highlight variant="primary" label="Primary" />
<ESwitch highlight variant="secondary" label="Secondary" />
<ESwitch highlight variant="error" label="Error" />
<ESwitch highlight variant="success" label="Success" />
`

const highlightFeedback = `
<ESwitch feedback="Error!" label="Feedback" />
<ESwitch :highlight="false" feedback="Error!" label="Override" />
`

const labels = `
<ESwitch 
  label="Label"
  description="Description"
/>
`

const labelsSlots = `
<ESwitch placeholder="Placeholder">
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: purple" v-text="'Description'" />
  </template>
</ESwitch>
`

const block = `
<ESwitch block label="Block" margin />
<ESwitch block label="Block 2" />
`

const disabled = `
<ESwitch disabled label="Disabled" block margin />
<ESwitch checked disabled label="Disabled" block />`

const feedback = `
<ESwitch label="Switch" block feedback="Error!" margin />
<ESwitch label="Switch" block feedback="Success!" feedback-type="success" />
`
</script>
