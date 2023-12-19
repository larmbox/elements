import { ComponentName } from '~/common/enums';
import { Config } from '~/create-elements';

const config: Config = {
  prefix: '',
  theme: 'default',
  components: {
    [ComponentName.EButton]: {
      name: ComponentName.EButton,
      props: {
        variant: 'primary',
        tag: 'button',
      },
    },
    [ComponentName.ECheckbox]: {
      name: ComponentName.ECheckbox,
      props: {
        variant: 'primary',
        iconChecked: 'check',
        iconIndeterminate: 'dash',
      },
    },
    [ComponentName.EFormDescription]: {
      name: ComponentName.EFormDescription,
      props: {},
    },
    [ComponentName.EFormFeedback]: {
      name: ComponentName.EFormFeedback,
      props: {},
    },
    [ComponentName.EFormHint]: {
      name: ComponentName.EFormHint,
      props: {},
    },
    [ComponentName.EFormInput]: {
      name: ComponentName.EFormInput,
      props: {},
    },
    [ComponentName.EFormInputField]: {
      name: ComponentName.EFormInputField,
      props: {},
    },
    [ComponentName.EFormLabel]: {
      name: ComponentName.EFormLabel,
      props: {},
    },
    [ComponentName.EIcon]: {
      name: ComponentName.EIcon,
      props: {
        prefix: '',
        tag: 'span',
        type: 'class',
        width: '1em',
        height: '1em',
      },
    },
    [ComponentName.EInput]: {
      name: ComponentName.EInput,
      props: {
        variant: 'primary',
      },
    },
    [ComponentName.ELoading]: {
      name: ComponentName.ELoading,
      props: {
        role: 'progressbar',
      },
    },
    [ComponentName.EModal]: {
      name: ComponentName.EModal,
      props: {
        size: 'md',
        transitionDuration: 100,
        closeable: ['escape', 'outside', 'route'],
        closeButton: {
          title: 'Close Modal',
          ariaLabel: 'Close Modal',
          icon: 'x-lg',
        },
      },
    },
    [ComponentName.ERadio]: {
      name: ComponentName.ERadio,
      props: {
        variant: 'primary',
      },
    },
    [ComponentName.ESelect]: {
      name: ComponentName.ESelect,
      props: {
        variant: 'primary',
        options: [],
        icon: 'chevron-expand',
      },
    },
    [ComponentName.ESwitch]: {
      name: ComponentName.ESwitch,
      props: {
        variant: 'primary',
      },
    },
    [ComponentName.ETextarea]: {
      name: ComponentName.ETextarea,
      props: {
        resize: 'vertical',
        variant: 'primary',
      },
    },
    [ComponentName.EThemeProvider]: {
      name: ComponentName.EThemeProvider,
      props: {},
    },
    [ComponentName.ETooltip]: {
      name: ComponentName.ETooltip,
      props: {
        flip: true,
        triggers: ['hover', 'focus'],
        placement: 'top',
        delay: 0,
        offset: 12,
        padding: 8,
        arrow: {
          size: 8,
        },
      },
    },
  },
};

export { config };
