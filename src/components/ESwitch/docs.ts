import * as input from '~/common/components/EInput/docs';
import { ComponentDocs } from '~/common/types';
import { ESwitchComponent } from '.';

const docs: ComponentDocs<ESwitchComponent> = {
  name: 'ESwitch',
  description:
    'The button component represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality.',
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
