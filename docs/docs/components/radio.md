# Radio <Tag text="<ERadio>" />

Radio inputs are normally presented in radio groups (a collection of radio buttons describing a set of related options). Only one radio button in a group can be selected at the same time.

<Snippet :code="example" />

## Size

The radio component allows a `size` prop. Elements provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" class="gap-lg" />

## Variant

Use the `variant` prop to change the input theming according to your configured [themes](/configuration/themes/).

<Snippet :code="variants" class="gap-lg" />

### Highlight

Set the `highlight` prop to override the default border color with the variant color.

<Snippet :code="highlight" class="gap-lg" />

Highlight is automatically set to `true` if the [feedback](#feedback) prop is populated. Set highlight to `false` to override feedback highlighting.

<Snippet :code="highlightFeedback" class="gap-lg" />

## Labels

Use the `label`, and `description` props to describe your radio input.

<Snippet :code="labels" />

You can also use slots for more freedom on label content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="labelsSlots" />

## Block

By default the radio component is displayed as an inline element. By adding the `block` prop, the input container will span the whole container width.

<Snippet :code="block" />

## Disabled

A disabled radio cannot be interacted with.

<Snippet :code="disabled" />

## Feedback

Use the `feedback` slot to add validation or other form errors to your radio input. Elements provides variants for error and success feedback types.

<Snippet :code="feedback" />

## Component Reference

<ComponentMeta src="ERadio" />

<script lang="ts" setup>
const example = `
<ERadio name="fruit" value="apple" label="Apple" block margin />
<ERadio name="fruit" value="banana" label="Banana" block />`

const sizes = `
<ERadio name="size" value="small" size="sm" label="Small" block margin />
<ERadio name="size" value="default" size="md" label="Default" block margin />
<ERadio name="size" value="large" size="lg" label="Large" block />
`

const variants = `
<ERadio variant="primary" label="Primary" block />
<ERadio variant="secondary" label="Secondary" block />
<ERadio variant="error" label="Error" block />
<ERadio variant="success" label="Success" block />
`

const highlight = `
<ERadio highlight variant="primary" label="Primary" block />
<ERadio highlight variant="secondary" label="Secondary" block />
<ERadio highlight variant="error" label="Error" block />
<ERadio highlight variant="success" label="Success" block />
`

const highlightFeedback = `
<ERadio feedback="Error!" label="Feedback" />
<ERadio :highlight="false" feedback="Error!" label="Override" />
`

const labels = `
<ERadio 
  label="Label"
  description="Description"
/>
`

const labelsSlots = `
<ERadio>
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: purple" v-text="'Description'" />
  </template>
</ERadio>
`

const block = `
<ERadio block label="Block" margin />
<ERadio block label="Block 2" />
`

const disabled = `
<ERadio disabled label="Disabled" block margin />
<ERadio disabled checked label="Disabled" block />`

const feedback = `
<ERadio label="Radio" block feedback="Error!" margin />
<ERadio label="Radio" block feedback="Success!" feedback-type="success" />
`
</script>
