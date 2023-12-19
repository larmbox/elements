import { component } from '~/common/docs';
import { Documentation } from '~/common/types';
import { EFormInputField, configuration } from './EFormInputField';

export const documentation: Documentation<EFormInputField> = {
  props: {
    ...component.props,
    feedback: {
      type: ['string'],
      description: 'The label text to display.',
    },
    highlight: {
      type: ['string'],
      description: 'The for attribute.',
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
