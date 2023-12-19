import { PropType, defineComponent } from 'vue';
import { ComponentName } from '~/common/enums';
import { ComponentConfiguration } from '~/common/types';
import {
  ComponentSlots,
  configuration as component,
  useComponent,
} from '~/composables/useComponent';
import { useContext } from '~/composables/useContext';

const configuration = {
  name: ComponentName.EFormInput,
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

type EFormInput = ComponentConfiguration<
  typeof configuration,
  {
    default: {
      properties: Record<string, never>;
    };
  } & ComponentSlots
>;

const EFormInput = defineComponent({
  name: configuration.name,
  props: configuration.props,
  emits: configuration.emits,
  inheritAttrs: false,
  setup(_) {
    const component = useComponent<EFormInput>(configuration, _);
    const { css, attrs, slot, render } = useContext(component);

    const props = component.props;

    render(() => (
      <div
        class={[
          css.base,
          {
            [css.modifier('highlight')]:
              props.value.highlight === false
                ? false
                : props.value.highlight || props.value.feedback,
            [css.modifier('feedback')]: props.value.feedback,
          },
        ]}
        {...attrs}
      >
        {slot.node.default?.({})}
      </div>
    ));
  },
});

export { EFormInput, configuration };
