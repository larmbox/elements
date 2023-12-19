import { PropType, defineComponent } from 'vue';
import { ComponentName } from '~/common/enums';
import { ComponentConfiguration } from '~/common/types';
import {
  ComponentSlots,
  configuration as component,
  useComponent,
} from '~/composables/useComponent';
import { useContext } from '~/composables/useContext';
import { EFormInput } from '../EFormInput';

const configuration = {
  name: ComponentName.EFormInputField,
  props: {
    ...component.props,
    feedback: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
    highlight: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
  },
  emits: {},
  style: {},
} as const;

type EFormInputField = ComponentConfiguration<
  typeof configuration,
  {
    default: {
      properties: Record<string, never>;
    };
  } & ComponentSlots
>;

const EFormInputField = defineComponent({
  name: configuration.name,
  props: configuration.props,
  emits: configuration.emits,
  inheritAttrs: false,
  components: { EFormInput },
  setup(_) {
    const component = useComponent<EFormInputField>(configuration, _);
    const { css, attrs, slot, render } = useContext(component);

    const props = component.props;

    render(() => (
      <EFormInput
        feedback={props.value.feedback}
        highlight={props.value.highlight}
        class={css.base}
        {...attrs}
      >
        {slot.node.default?.({})}
      </EFormInput>
    ));
  },
});

export { EFormInputField, configuration };
