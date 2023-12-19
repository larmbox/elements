import { config } from '~/common/config';
import { component } from '~/common/docs';
import { Documentation } from '~/common/types';
import { EIcon, configuration } from './EIcon';

const defaults = config.components.EIcon.props;

export const documentation: Documentation<EIcon> = {
  props: {
    ...component.props,
    icon: {
      type: ['string'],
      required: true,
      description: 'The icon to show.',
    },
    className: {
      type: ['string'],
      description: 'The class name to apply to the icon.',
    },
    sprite: {
      type: ['string'],
      description: 'The sprite to use.',
      since: '0.0.28',
    },
    prefix: {
      type: ['string'],
      default: defaults.prefix,
      description: 'Prefix added to the `icon` prop.',
    },
    type: {
      type: ['string'],
      default: defaults.type,
      description: 'Possible values are `class`, `inline` or `svg`',
    },
    tag: {
      type: ['string'],
      default: defaults.tag,
      description: 'The tag type to render the icon in.',
    },
    width: {
      type: ['string'],
      default: defaults.width,
      description: 'Only applies if type is `svg`.',
      since: '0.0.28',
    },
    height: {
      type: ['string'],
      default: defaults.height,
      description: 'Only applies if type is `svg`.',
      since: '0.0.28',
    },
  },
  slots: {
    ...component.slots,
  },
  emits: {
    ...component.slots,
  },
  style: configuration.style,
};
