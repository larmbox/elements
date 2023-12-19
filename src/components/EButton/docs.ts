import { config } from '~/common/config';
import { block, component, disabled, link, variant } from '~/common/docs';
import { Documentation } from '~/common/types';
import { EButton, configuration } from './EButton';

const defaults = config.components.EButton.props;

export const documentation: Documentation<EButton> = {
  props: {
    ...block.props,
    ...component.props,
    ...disabled.props,
    ...link.props,
    ...variant.props,
    variant: {
      ...variant.props.variant,
      default: defaults.variant,
    },
    tag: {
      type: ['string'],
      default: defaults.tag,
      description: 'Sets the button element tag.',
    },
    type: {
      type: ['string'],
      description: 'Sets the type attribute on the button element.',
    },
    icon: {
      type: ['string'],
      description:
        'Shows an icon in the button (on the left side, by default) according to the configured Icon component.',
    },
    iconLeft: {
      type: ['string'],
      description: 'Shows the icon on the left side of the text.',
    },
    iconRight: {
      type: ['string'],
      description: 'Shows the icon on the right side of the text.',
    },
    loading: {
      type: ['boolean'],
      description: 'If true, shows the Loading component inside the button.',
    },
  },
  slots: {
    ...component.slots,
    ...block.slots,
    ...variant.slots,
    ...link.slots,
    default: {
      description: 'Content to show inside the button.',
      properties: {},
    },
  },
  emits: {},
  style: configuration.style,
};
