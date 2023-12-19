import { component } from '~/common/docs';
import { Documentation } from '~/common/types';
import { EFormDescription, configuration } from './EFormDescription';

export const documentation: Documentation<EFormDescription> = {
  props: {
    ...component.props,
    text: {
      type: ['string'],
      description: 'The label text to display.',
    },
    useSlot: {
      type: ['boolean'],
      description: 'Use the slot instead of the text prop.',
    },
    aria: {
      type: ['string'],
      description: 'The aria attribute.',
    },
  },
  slots: {
    ...component.slots,
    default: {
      description: 'A label describing the form element.',
      properties: {
        id: {
          type: ['string'],
          description:
            'The `id` attribute of the form element. Can be used to set the **for** attribute on the label',
        },
      },
    },
  },
  emits: {
    ...component.emits,
  },
  style: configuration.style,
};
