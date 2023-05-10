import * as input from '~/common/components/EInput/docs';
import { ComponentName } from '~/common/enums';
import { ComponentDocs } from '~/common/types';
import { ECheckboxComponent } from '.';

const docs: ComponentDocs<ECheckboxComponent> = {
  name: ComponentName.ECheckbox,
  description:
    'The checkbox is shown as a square box that is ticked (checked) when activated. Checkboxes are used to let a user select one or more options of a limited number of choices.',
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
      description: `Emitted when the value of the checkbox has been changed.`,
    },
  ],
};

export default docs;
