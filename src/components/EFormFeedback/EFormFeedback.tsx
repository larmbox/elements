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
  name: ComponentName.EFormFeedback,
  props: {
    ...component.props,
    text: {
      type: String as PropType<string>,
      default: undefined,
    },
    aria: {
      type: String as PropType<string>,
      default: undefined,
    },
  },
  emits: {},
  style: {},
} as const;

type EFormFeedback = ComponentConfiguration<
  typeof configuration,
  {
    default: {
      properties: Record<string, never>;
    };
  } & ComponentSlots
>;

const EFormFeedback = defineComponent({
  name: configuration.name,
  props: configuration.props,
  emits: configuration.emits,
  inheritAttrs: false,
  setup(_) {
    const component = useComponent<EFormFeedback>(configuration, _);
    const { css, attrs, slot, render } = useContext(component);

    const props = component.props;

    render(() =>
      props.value.text ? (
        <span id={props.value.aria} class={css.base} {...attrs}>
          {props.value.text}
        </span>
      ) : (
        <div id={props.value.aria} class={css.base} {...attrs}>
          {slot.node.default?.({})}
        </div>
      ),
    );
  },
});

export { EFormFeedback, configuration };
