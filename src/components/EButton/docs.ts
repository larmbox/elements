import * as link from '~/common/components/ELink/docs';
import { ComponentName } from '~/common/enums';
import { ComponentDocs } from '~/common/types';
import config from '~/common/utility/default-config';
import { EButtonComponent } from '.';

const def = config.components.EButton.props;

const docs: ComponentDocs<EButtonComponent> = {
  name: ComponentName.EButton,
  description:
    'The button component represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality.',
  props: [
    ...link.props,
    {
      name: 'id',
      type: 'string',
      description: 'ID attribute to set on the root element.',
    },
    {
      name: 'block',
      type: 'boolean',
      default: def.block,
      description:
        'With the block prop, the button will span the whole container width.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: def.disabled,
      description: 'Disables button default functionality.',
    },
    {
      name: 'size',
      type: 'string',
      default: def.size,
      description:
        'Sets the button size. Included sizes are `sm`, `md` or `lg`.',
    },
    {
      name: 'variant',
      type: 'string',
      default: def.variant,
      description:
        'Sets the button variant according to the [theme configuration](/elements/configuration/themes).',
    },
    {
      name: 'outline',
      type: 'boolean',
      default: def.outline,
      description: 'Sets the button appearance to outline.',
    },
    {
      name: 'tag',
      type: 'string',
      default: def.tag,
      description: 'Sets the button element tag.',
    },
    {
      name: 'type',
      type: 'string',
      default: def.type,
      description: 'Sets the type attribute on the button element.',
    },
    {
      name: 'icon',
      type: 'string',
      default: def.icon,
      description:
        'Shows an icon in the button (on the left side, by default) according to the configured Icon component.',
    },
    {
      name: 'iconLeft',
      type: 'string',
      default: def.iconLeft,
      description: 'Shows the icon on the left side of the text.',
    },
    {
      name: 'iconRight',
      type: 'string',
      default: def.iconRight,
      description: 'Shows the icon on the right side of the text.',
    },
    {
      name: 'loading',
      type: 'boolean',
      default: def.loading,
      description: 'If true, shows the Loading component inside the button.',
    },
  ],
  slots: [
    {
      name: 'default',
      description: 'Content to show inside the button.',
    },
  ],
  events: [],
};

export default docs;
