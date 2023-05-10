import { ComponentDocs } from '~/common/types';
import { ETooltipComponent } from '.';

const meta: ComponentDocs<ETooltipComponent> = {
  name: 'ETooltip',
  description:
    'Tooltips display informative text when users hover over, focus on, or tap an element. Elements uses Popper for tooltips.',
  props: [
    {
      name: 'id',
      type: 'string',
      description: 'ID attribute to set on the root element.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Tooltip will not show is disabled is set to true.',
    },
    {
      name: 'variant',
      type: 'string',
      default: "'secondary'",
      description:
        'Sets the tooltip variant according to the theme configuration.',
      gc: true,
    },
    {
      name: 'placement',
      type: 'string',
      default: "'top'",
      description:
        "Sets the tooltip position. Possible values are 'top', 'top-start', 'top-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end'.",
      gc: true,
    },
    {
      name: 'delay',
      type: 'number',
      default: '0',
      description:
        'Time (in milliseconds) to wait before showing the tooltip after trigger fires.',
      gc: true,
    },
    {
      name: 'trigger',
      type: 'string',
      default: "'hover'",
      description: 'Sets the event that triggers the tooltip.',
      gc: true,
    },
    {
      name: 'interactive',
      type: 'boolean',
      default: 'false',
      description:
        'Allows interaction with the tooltip content without it being closed automatically.',
    },
    {
      name: 'disableTouch',
      type: 'boolean',
      default: 'false',
      description: 'Disables the tooltip for touchscreen devices.',
      gc: true,
    },
  ],
  slots: [
    {
      name: 'content',
      description: 'Content to show in the tooltip.',
    },
    {
      name: 'trigger',
      description:
        'The tooltip trigger listener is attached to the root element of the content of this slot.',
    },
  ],
  events: [],
};

export default meta;
