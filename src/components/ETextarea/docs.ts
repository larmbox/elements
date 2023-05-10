import * as input from '~/common/components/EInputField/docs';
import { ComponentDocs } from '~/common/types';
import { ETextareaComponent } from '.';

const meta: ComponentDocs<ETextareaComponent> = {
  name: 'ETextarea',
  description:
    'The Textarea component represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text.',
  props: [...input.props],
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
      description: `Emitted when the value of the textarea element has been changed.`,
    },
  ],
};

export default meta;
