import { config } from '~/common/config';
import { component, size } from '~/common/docs';
import { Documentation } from '~/common/types';
import { EModal, configuration } from './EModal';

const defaults = config.components.EModal.props;

export const documentation: Documentation<EModal> = {
  props: {
    ...component.props,
    size: {
      ...size.props.size,
      default: defaults.size,
      description:
        'Sets the modal size. Included sizes are `sm`, `md` or `lg`.',
    },
    title: {
      type: ['string'],
      description: 'Modal title. Shown in modal header.',
    },
    description: {
      type: ['string'],
      description: 'Modal description. Shown in modal header.',
    },
    transitionDuration: {
      type: ['number'],
      default: defaults.transitionDuration,
      description:
        'The transition duration of the modal opening and closing, in milliseconds. For best results, this should match the `transition-time` CSS variable.',
    },
    rejectCloseClass: {
      type: ['string', 'null'],
      description:
        'The class to apply to the modal when it refuses to close. Set to `null` to disable.',
    },
    ariaDescribedby: {
      type: ['string'],
      description:
        'The class to apply to the modal when it refuses to close. Set to `null` to disable.',
    },
    ariaLabelledby: {
      type: ['string'],
      description:
        'The class to apply to the modal when it refuses to close. Set to `null` to disable.',
    },
    closeButton: {
      type: ['false', '[CloseButton](#close-button)'],
      default: defaults.closeButton,
      description:
        'Properties of the close button. Set to `false` to disable. If the modal has no title or description, the close button will not be shown.',
      nested: {
        id: 'close-button',
        name: 'CloseButton',
        description: '',
        props: {
          title: {
            type: ['string'],
            description: 'The `title` attribute for the close button.',
          },
          ariaLabel: {
            type: ['string'],
            description: 'The `aria-label` attribute for the close button.',
          },
          icon: {
            type: ['string'],
            required: true,
            description:
              'The icon to use for the close button. Uses the [Icon](/components/icon) component.',
          },
        },
      },
    },
    closeable: {
      type: ['boolean', 'Array<[Closeable](#closeable)>'],
      default: defaults.closeable,
      nested: {
        id: 'closeable',
        name: 'Closeable',
        description: '',
        literal: 'string',
        props: {
          outside: {
            description:
              'The modal can be closed by clicking outside the modal.',
          },
          route: {
            description: 'The modal is closed when the route changes.',
          },
          escape: {
            description: 'The modal can be closed by pressing escape.',
          },
        },
      },
      description:
        'If `false`, the modal can only be closed by calling the `modal.close()` function. If `true`, the modal can be closed using all [Closeable](#closeable) methods. Can also be an array of [Closeable](#closeable) options.',
    },
  },
  slots: {
    default: {
      description: 'Alias for slot `body`.',
      properties: {
        data: {
          type: ['any'],
          description: 'The data passed to the modal.',
        },
        close: {
          type: ['function'],
          description: 'The function to close the modal.',
        },
      },
    },
    title: {
      description: 'Header title content.',
      properties: {
        data: {
          type: ['any'],
          description: 'The data passed to the modal.',
        },
        close: {
          type: ['function'],
          description: 'The function to close the modal.',
        },
      },
    },
    description: {
      description: 'Header description content.',
      properties: {
        data: {
          type: ['any'],
          description: 'The data passed to the modal.',
        },
        close: {
          type: ['function'],
          description: 'The function to close the modal.',
        },
      },
    },
    'header-extension': {
      description:
        'Extension to the header. Placed below the header content. Not part of the modal body overflow.',
      properties: {
        data: {
          type: ['any'],
          description: 'The data passed to the modal.',
        },
        close: {
          type: ['function'],
          description: 'The function to close the modal.',
        },
      },
    },
    body: {
      description: 'Alias for slot `body`.',
      properties: {
        data: {
          type: ['any'],
          description: 'The data passed to the modal.',
        },
        close: {
          type: ['function'],
          description: 'The function to close the modal.',
        },
      },
    },
    'body-raw': {
      description: 'Alias for slot `body`.',
      properties: {
        data: {
          type: ['any'],
          description: 'The data passed to the modal.',
        },
        close: {
          type: ['function'],
          description: 'The function to close the modal.',
        },
      },
    },
    footer: {
      description: 'Alias for slot `body`.',
      properties: {
        data: {
          type: ['any'],
          description: 'The data passed to the modal.',
        },
        close: {
          type: ['function'],
          description: 'The function to close the modal.',
        },
      },
    },
    'footer-left': {
      description: 'Alias for slot `body`.',
      properties: {
        data: {
          type: ['any'],
          description: 'The data passed to the modal.',
        },
        close: {
          type: ['function'],
          description: 'The function to close the modal.',
        },
      },
    },
    'footer-right': {
      description: 'Alias for slot `body`.',
      properties: {
        data: {
          type: ['any'],
          description: 'The data passed to the modal.',
        },
        close: {
          type: ['function'],
          description: 'The function to close the modal.',
        },
      },
    },
  },
  emits: {
    close: {
      description:
        'Emitted when the modal is closed and removed from the modal stack.',
      properties: {},
    },
    'reject-close': {
      description:
        'Emitted when the user attempts to close the modal, but the modal refuses to close.',
      properties: {},
    },
    open: {
      description: 'Emitted when the modal is added to the stack.',
      properties: {},
    },
    hide: {
      description: 'Emitted when the modal is closed but remains in the stack.',
      properties: {},
    },
    show: {
      description: 'Emitted when the modal is opened.',
      properties: {},
    },
  },
  style: configuration.style,
};
