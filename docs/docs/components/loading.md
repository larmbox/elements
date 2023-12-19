# Loading <Tag text="<ELoading>" />

The loading component is used to show users that an activity is happening in the background.

<Snippet :code="example" />

## Size & Color

The loading component inherits the font size of the parent element. It also
inherits the text color of the parent element.

<Snippet :code="variants" class="wrap"  />

## Component Reference

<ComponentReference src="ELoading" />

<script lang="ts" setup>
import {ref} from 'vue';

const example = `
<ELoading />
`

const variants = `
<ELoading />
<ELoading style="font-size: 2rem" />
<ELoading style="font-size: 3rem" />
<ELoading style="font-size: 3rem; color: var(--primary-color)" />
<ELoading style="font-size: 2rem; color: var(--secondary-color)" />
<ELoading style="color: red" />
`
</script>
