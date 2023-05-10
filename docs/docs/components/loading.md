# Loading <Tag text="<ELoading>" />

The loading component is used to show users that an activity is happening in the background.

<Snippet :code="example" class="gap" />

## Size

The loading component allows a `size` prop. Elements provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" class="gap"  />

## Mode

Elements provides two loading animation modes, `spinner` and `dots`.

<Snippet :code="modes" class="gap" />

## Variant

Use the `variant` prop to change the button theming according to your configured [themes](/configuration/themes/).

<Snippet :code="variants" class="gap" />

## Component Reference

<ComponentMeta src="ELoading" />

<script lang="ts" setup>
import {ref} from 'vue';

const example = `
<ELoading />
`

const sizes = `
<ELoading size="sm" />
<ELoading size="md" />
<ELoading size="lg" />
`

const modes = `
<ELoading mode="spinner" />
<ELoading mode="dots" />
`

const variants = `
<ELoading variant="primary" mode="spinner" />
<ELoading variant="secondary" mode="spinner" />
<ELoading variant="error" mode="spinner" />
<ELoading variant="success" mode="spinner" />
<ELoading variant="primary" mode="dots" />
<ELoading variant="secondary" mode="dots" />
<ELoading variant="error" mode="dots" />
<ELoading variant="success" mode="dots" />
`

</script>
