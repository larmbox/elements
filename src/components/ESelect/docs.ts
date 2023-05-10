import * as input from '~/common/components/EInputField/docs';
import { ComponentDocs } from '~/common/types';
import { InputFieldProps } from '~/composables/component/use-input';
import { ESelectComponent } from '.';

const meta: ComponentDocs<ESelectComponent> = {
  name: 'ESelect',
  description:
    'The button component represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality.',
  props: [
    ...input.props.filter(
      ({ name }) =>
        !(<(keyof InputFieldProps)[]>[
          'autocomplete',
          'placeholder', // Custom definition of placeholder for Select component. See below.
          'readonly',
        ]).includes(name)
    ),
    {
      name: 'placeholder',
      type: 'string',
      description:
        'If a placeholder is set, the first option element will be a disabled element with the placeholder text content. Unlike the Input component, placeholder is not inherited from the label.',
    },
    {
      name: 'options',
      type: 'Array<{ label: string, value: any }>',
      description: 'The available options.',
    },
  ],
  slots: [...input.slots],
  events: [
    ...input.events,
    {
      name: 'input',
      arguments: [
        {
          name: 'event',
          type: 'Event',
        },
      ],
      description: `Emitted when the value of the select element has been changed.`,
    },
  ],
};

export default meta;
