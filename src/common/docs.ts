import { ComposableDocumentation } from '~/common/types';
import { BlockConfiguration } from '~/composables/useBlock';
import { ComponentConfiguration } from '~/composables/useComponent';
import { DisabledConfiguration } from '~/composables/useDisabled';
import {
  InputConfiguration,
  InputFieldConfiguration,
} from '~/composables/useInput';
import { LinkConfiguration } from '~/composables/useLink';
import { SizeConfiguration } from '~/composables/useSize';
import { VariantConfiguration } from '~/composables/useVariant';

const component: ComposableDocumentation<ComponentConfiguration> = {
  props: {
    id: {
      type: ['string'],
      description:
        '`id` attribute to set on the element. Defaults to a pseudorandomly generated ID.',
    },
  },
  slots: {},
  emits: {},
};

const block: ComposableDocumentation<BlockConfiguration> = {
  props: {
    block: {
      type: ['boolean'],
      description:
        'With the block prop, the element will span the whole container width.',
    },
  },
  slots: {},
  emits: {},
};

const size: ComposableDocumentation<SizeConfiguration> = {
  props: {
    size: {
      type: ['string'],
      description: 'Sets the size of the element.',
    },
  },
  slots: {},
  emits: {},
};

const disabled: ComposableDocumentation<DisabledConfiguration> = {
  props: {
    disabled: {
      type: ['boolean'],
      description: 'Disables the default functionality of the element.',
    },
  },
  slots: {},
  emits: {},
};

const variant: ComposableDocumentation<VariantConfiguration> = {
  props: {
    variant: {
      type: ['string'],
      description: 'Sets the variant of the element.',
    },
  },
  slots: {},
  emits: {},
};

const link: ComposableDocumentation<LinkConfiguration> = {
  props: {
    append: {
      type: ['boolean'],
      description:
        'Setting `append` prop always appends the relative path to the current path.',
    },
    activeClass: {
      type: ['string'],
      description:
        'Configure the active CSS class applied when the link is active.',
    },
    exactActiveClass: {
      type: ['string'],
      description:
        'Configure the active CSS class applied when the link is active with exact match.',
    },
    exact: {
      type: ['boolean'],
      description: 'Force the link into "exact match mode".',
    },
    replace: {
      type: ['boolean'],
      description:
        'Programmatically navigate to a new URL by replacing the current entry in the history stack.',
    },
    to: {
      type: ['string'],
      description: 'Denotes the target route of the link.',
    },
    prefetch: {
      type: ['boolean'],
      description: 'Enables link prefetching.',
      nuxt: true,
    },
    noPrefetch: {
      type: ['boolean'],
      description: 'Disables link prefetching.',
      nuxt: true,
    },
    href: {
      type: ['string'],
      description: `The [href](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) attribute specifies the URL of the page the link goes to.`,
    },
    target: {
      type: ['string'],
      description: `The [target](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) attribute specifies where to open the linked document.`,
    },
    rel: {
      type: ['string'],
      description: `The [rel](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel) attribute specifies the relationship between the current document and the linked document.`,
    },
  },
  slots: {},
  emits: {},
};

const input: Readonly<ComposableDocumentation<InputConfiguration>> = {
  props: {
    name: {
      type: ['string'],
      description: 'The name attribute of the input element.',
    },
    required: {
      type: ['boolean'],
      description: 'Sets the required attribute on the input element.',
    },
    ariaInvalid: {
      type: ['string', 'boolean'],
      description: 'Sets the aria-invalid attribute on the input element.',
    },
    ariaRequired: {
      type: ['string', 'boolean'],
      description: 'Sets the aria-required attribute on the input element.',
    },
    ariaLabelledby: {
      type: ['string'],
      description: 'Sets the aria-labelledby attribute on the input element.',
    },
    ariaDescribedby: {
      type: ['string'],
      description: 'Sets the aria-describedby attribute on the input element.',
    },
    ariaErrormessage: {
      type: ['string'],
      description: 'Sets the aria-errormessage attribute on the input element.',
    },
    description: {
      type: ['string'],
      description: 'The description text to display.',
    },
    label: {
      type: ['string'],
      description: 'The label text to display.',
    },
    feedback: {
      type: ['string'],
      description: 'The feedback text to display.',
    },
    highlight: {
      type: ['boolean'],
      description: 'Highlights the input element.',
    },
    autofocus: {
      type: ['boolean'],
      description: 'Sets the autofocus attribute on the input element.',
    },
  },
  slots: {
    label: {
      description: 'A label describing the form element.',
      properties: {
        id: {
          type: ['string'],
          description: '',
        },
      },
    },
    description: {
      description: 'Description of the form element.',
      properties: {},
    },
    feedback: {
      description: 'Feedback of the form element.',
      properties: {},
    },
  },
  emits: {
    input: {
      description: `Emitted when the value of the input element has been changed.`,
      properties: {
        event: {
          type: ['InputEvent', 'Event'],
          description: '',
        },
      },
    },
    'update:modelValue': {
      description: `Emitted when the value of the input element has been changed.`,
      properties: {
        event: {
          type: ['InputEvent', 'Event'],
          description: '',
        },
      },
    },
  },
};

const inputField: ComposableDocumentation<InputFieldConfiguration> = {
  props: {
    ...input.props,
    autocomplete: {
      type: ['string'],
      description: 'Sets the autocomplete attribute value.',
    },
    hint: {
      type: ['string'],
      description: 'The hint text to display.',
    },
  },
  slots: {
    ...input.slots,
    hint: {
      description: 'A secondary description of the element.',
      properties: {
        id: {
          type: ['string'],
          description: '',
        },
      },
    },
  },
  emits: {
    ...input.emits,
  },
};

export { block, component, disabled, input, inputField, link, size, variant };
