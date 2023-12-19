import { config } from '~/common/config';
import { component } from '~/common/docs';
import { Documentation } from '~/common/types';
import { ELoading, configuration } from './ELoading';

const defaults = config.components.ELoading.props;

export const documentation: Documentation<ELoading> = {
  props: {
    ...component.props,
    label: {
      type: ['string'],
      description: `Label shown to assistive technologies such as screenreaders.`,
    },
    role: {
      type: ['string'],
      default: defaults.role,
      description: `The role attribute on the loading element.`,
    },
  },
  slots: {},
  emits: {},
  style: configuration.style,
};
