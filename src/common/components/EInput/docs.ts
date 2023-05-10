import { Component, ComponentDocs } from '~/common/types';
import { InputProps } from '~/composables/component';

/**
 * Base props, slots and events for an input component. All input components
 * inherit these attributes.
 */

const props: ComponentDocs<Component<never, never, InputProps>>['props'] = [
  {
    name: 'label',
    type: 'string',
    description: 'The label text to display.',
  },
  {
    name: 'autofocus',
    type: 'boolean',
    default: 'false',
    description:
      'Sets the autofocus attribute value. This will only work for the initial render of the page.',
  },
  {
    name: 'description',
    type: 'string',
    description: 'The description text to display.',
  },
  {
    name: 'name',
    type: 'boolean',
    description: 'The name attribute.',
  },
  {
    name: 'feedback',
    type: 'string',
    description: 'The feedback text to display.',
  },
  {
    name: 'feedbackType',
    type: 'string',
    default: 'error',
    description: `Possible values are **"error"** or **"success"**.`,
  },
  {
    name: 'value',
    type: 'string | number | boolean',
    description: 'The value attribute.',
  },
  { name: 'modelValue', type: 'string | number | boolean', description: '' },
  {
    name: 'highlight',
    type: 'boolean',
    description: 'Highlights the input field in the set variant color.',
  },
];

const slots: ComponentDocs<Component<never, never, InputProps>>['slots'] = [
  {
    name: 'label',
    description: 'A label describing the input element.',
    properties: [
      {
        name: 'id',
        type: 'string',
        description:
          'The **id** attribute of the input element. Can be used to set the **for** attribute on the label.',
      },
    ],
  },
  {
    name: 'description',
    description: 'Additionally describe the input element.',
  },
];

const events: ComponentDocs<Component<never, never, InputProps>>['events'] = [
  {
    name: 'update:modelValue',
    arguments: [
      {
        name: 'value',
        type: 'any',
        description: 'The emitted value.',
      },
    ],
    description:
      'Emitted to update the v-model binding value. Emitted when the value of the input has been changed.',
  },
  {
    name: 'focus',
    arguments: [
      {
        name: 'event',
        type: 'FocusEvent',
      },
    ],
    description: 'Emitted when the input element has received focus.',
  },
  {
    name: 'blur',
    arguments: [
      {
        name: 'event',
        type: 'FocusEvent',
      },
    ],
    description: 'Emitted when the input element loses focus.',
  },
  {
    name: 'focusin',
    arguments: [
      {
        name: 'event',
        type: 'FocusEvent',
      },
    ],
    description: 'Emitted when the input element is about to receive focus.',
  },
  {
    name: 'focusout',
    arguments: [
      {
        name: 'event',
        type: 'FocusEvent',
      },
    ],
    description: 'Emitted when the input element is about to lose focus.',
  },
  {
    name: 'change',
    arguments: [
      {
        name: 'event',
        type: 'Event',
      },
    ],
    description: `Emitted when an alteration to the element's value is committed by the user.`,
  },
];

export { props, slots, events };
