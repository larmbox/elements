import { config } from '~/common/config';
import { component, disabled } from '~/common/docs';
import { Documentation } from '~/common/types';
import { ETooltip, configuration } from './ETooltip';

const defaults = config.components.ETooltip.props;

export const documentation: Documentation<ETooltip> = {
  props: {
    ...component.props,
    ...disabled.props,
    disabled: {
      ...disabled.props.disabled,
      description: 'If `true`, the tooltip will not be shown.',
    },
    placement: {
      type: ['string'],
      default: defaults.placement,
      description:
        "Sets the tooltip position. Possible values are 'top', 'top-start', 'top-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end'.",
    },
    text: {
      type: ['string'],
      description:
        "Sets the tooltip position. Possible values are 'top', 'top-start', 'top-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end'.",
    },
    element: {
      type: ['string'],
      description:
        "Sets the tooltip position. Possible values are 'top', 'top-start', 'top-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end'.",
    },
    flip: {
      type: ['boolean'],
      default: defaults.flip,
      description:
        'If `true`, the tooltip will flip to the opposite side of the reference element if the tooltip does not fit within the viewport.',
    },
    binding: {
      type: ['string'],
      description:
        "Sets the tooltip position. Possible values are 'top', 'top-start', 'top-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end'.",
    },
    delay: {
      type: ['number'],
      default: defaults.delay,
      description:
        'Time (in milliseconds) to wait before showing the tooltip after trigger fires.',
    },
    triggers: {
      type: ['string'],
      default: defaults.triggers,
      description:
        'Sets the trigger for the tooltip. Possible values are `hover` and `focus`.',
    },
    offset: {
      type: ['number'],
      default: defaults.offset,
      description: 'Sets the offset of the tooltip.',
    },
    arrow: {
      type: ['[Arrow](#arrow)', 'false'],
      default: defaults.arrow,
      description: 'Arrow configuration. Set to `false` to disable the arrow.',
      nested: {
        id: 'arrow',
        name: 'Arrow',
        description: 'Arrow configuration for the tooltip.',
        props: {
          size: {
            type: ['number'],
            default:
              typeof defaults.arrow === 'object'
                ? defaults.arrow.size
                : undefined,
            required: false,
            description:
              'The label of the option. If not set, value will be used instead.',
          },
        },
      },
    },
  },
  slots: {
    reference: {
      description:
        'The tooltip trigger listener is attached to the root element of the content of this slot.',
      properties: {
        id: {
          type: ['string'],
          description: '',
        },
      },
    },
    content: {
      description: 'Content to show in the tooltip.',
      properties: {
        id: {
          type: ['string'],
          description: '',
        },
      },
    },
  },
  emits: {},
  style: configuration.style,
};
