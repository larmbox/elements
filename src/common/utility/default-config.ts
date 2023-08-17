import { ComponentName, Size, Variant } from '~/common/enums';
import { Config } from '~/create-elements';

/**
 * The default configuration of Elements.
 */
const config: Config = {
  prefix: '',
  theme: 'default',
  components: {
    [ComponentName.EThemeProvider]: {
      name: ComponentName.EThemeProvider,
      props: {
        destroyDelay: 0,
      },
      options: {},
    },
    [ComponentName.EButton]: {
      name: ComponentName.EButton,
      props: {
        size: Size.DEFAULT,
        variant: Variant.PRIMARY,
        tag: 'button',
      },
      options: {},
    },
    [ComponentName.ECheckbox]: {
      name: ComponentName.ECheckbox,
      props: {
        size: Size.DEFAULT,
        variant: Variant.PRIMARY,
        feedbackType: 'error',
      },
      options: {
        iconChecked: 'check',
        iconIndeterminate: 'dash',
      },
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
      options: {},
    },
    [ComponentName.EInput]: {
      name: ComponentName.EInput,
      props: {
        size: Size.DEFAULT,
        variant: Variant.PRIMARY,
        type: 'text',
        feedbackType: 'error',
      },
      options: {},
    },
    [ComponentName.ELoading]: {
      name: ComponentName.ELoading,
      props: {
        size: Size.DEFAULT,
        variant: Variant.PRIMARY,
        mode: 'spinner',
        role: 'progressbar',
      },
      options: {},
    },
    [ComponentName.EModal]: {
      name: ComponentName.EModal,
      props: {
        size: Size.DEFAULT,
        closeOnRouteChange: true,
        closeOnBackdrop: false,
        closeable: true,
      },
      options: { closeIcon: 'x-lg' },
    },
    [ComponentName.ERadio]: {
      name: ComponentName.ERadio,
      props: {
        size: Size.DEFAULT,
        variant: Variant.PRIMARY,
        feedbackType: 'error',
      },
      options: {},
    },
    [ComponentName.ESelect]: {
      name: ComponentName.ESelect,
      props: {
        size: Size.DEFAULT,
        variant: Variant.PRIMARY,
        feedbackType: 'error',
        options: [],
      },
      options: { icon: 'chevron-expand' },
    },
    [ComponentName.ESwitch]: {
      name: ComponentName.ESwitch,
      props: {
        size: Size.DEFAULT,
        variant: Variant.PRIMARY,
        feedbackType: 'error',
      },
      options: {
        checkedIcon: 'check',
        uncheckedIcon: 'x',
      },
    },
    [ComponentName.ETextarea]: {
      name: ComponentName.ETextarea,
      props: {
        size: Size.DEFAULT,
        variant: Variant.PRIMARY,
        feedbackType: 'error',
      },
      options: {},
    },
    [ComponentName.ETooltip]: {
      name: ComponentName.ETooltip,
      props: {
        variant: Variant.SECONDARY,
        placement: 'top',
        delay: 0,
        trigger: 'hover',
        arrow: { padding: 8 },
        offset: [0, 8],
        disableTouch: false,
      },
      options: {},
    },
    [ComponentName.EFormControl]: {
      name: ComponentName.EFormControl,
      props: {},
      options: {},
    },
  },
};

export default config;
