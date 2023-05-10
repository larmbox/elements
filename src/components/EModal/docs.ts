import { ComponentName } from '~/common/enums';
import { ComponentDocs } from '~/common/types';
import config from '~/common/utility/default-config';
import { EModalComponent } from '.';

const def = config.components.EModal.props;

const commonSlotProperties = [
  {
    name: 'close',
    type: 'Function',
    description: 'Function to close the modal.',
  },
  {
    name: 'data',
    type: 'any',
    description: 'The data passed to the modal.',
  },
];

const docs: ComponentDocs<EModalComponent> = {
  name: ComponentName.EModal,
  description:
    'A modal is a dialog box/popup window that is displayed on top of the current page.',
  props: [
    {
      name: 'id',
      type: 'string',
      description: 'ID attribute to set on the root element.',
    },
    {
      name: 'size',
      type: 'string',
      default: def.size,
      description:
        'Sets the modal size. Included sizes are `sm`, `md` or `lg`.',
    },
    {
      name: 'title',
      type: 'string',
      default: def.title,
      description: 'Modal title. Shown in modal header.',
    },
    {
      name: 'description',
      type: 'string',
      default: def.description,
      description: 'Modal description. Shown in modal header.',
    },
    {
      name: 'closeable',
      type: 'boolean',
      default: def.closeable,
      description:
        'If `true`, the modal header will include a close button. Additionally, if `true`, the modal can be closed using the Escape key.',
    },
    {
      name: 'closeOnBackdrop',
      type: 'boolean',
      default: def.closeOnBackdrop,
      description:
        'If `true`, the modal will close when the user clicks outside the modal.',
    },
    {
      name: 'closeOnRouteChange',
      type: 'boolean',
      default: def.closeOnRouteChange,
      description:
        'If `true`, the modal will close when the user navigates to another page.',
    },
  ],
  slots: [
    {
      name: 'default',
      description: 'Alias for slot `body`.',
      properties: commonSlotProperties,
    },
    {
      name: 'description',
      description: 'Header description content.',
      properties: commonSlotProperties.filter(({ name }) => name !== 'close'),
    },
    {
      name: 'title',
      description: 'Header title content.',
      properties: commonSlotProperties.filter(({ name }) => name !== 'close'),
    },
    {
      name: 'body',
      description: 'The body content.',
      properties: commonSlotProperties,
    },
    {
      name: 'body-raw',
      description:
        'The body content, but does not include the default modal body padding.',
      properties: commonSlotProperties,
    },
    {
      name: 'footer',
      description: 'Alias for slot `footer-right`.',
      properties: commonSlotProperties,
    },
    {
      name: 'footer-left',
      description: 'Footer content, aligned to the left.',
      properties: commonSlotProperties,
    },
    {
      name: 'footer-right',
      description: 'Footer content, aligned to the right.',
      properties: commonSlotProperties,
    },
  ],
  events: [],
};

export default docs;
