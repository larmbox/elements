import * as input from '~/common/components/EInputField/docs';
import { ComponentName } from '~/common/enums';
import { ComponentDocs } from '~/common/types';
import { EInputComponent } from '.';

const docs: ComponentDocs<EInputComponent> = {
  name: ComponentName.EInput,
  description:
    'The input is shown as a square box that is ticked (checked) when activated. Inputes are used to let a user select one or more options of a limited number of choices.',
  props: [...input.props],
  slots: [...input.slots],
  events: [
    ...input.events,
    {
      name: 'input',
      arguments: [
        {
          name: 'event',
          type: 'InputEvent | Event',
        },
      ],
      description: `Emitted when the value of the input element has been changed.`,
    },
  ],
};

export default docs;
