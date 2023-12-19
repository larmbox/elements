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
  name: ComponentName.EFormLabel,
  props: {
    ...component.props,
    /**
     * The label text to display.
     */
    text: {
      type: String as PropType<string>,
      default: undefined,
    },
    for: {
      type: String as PropType<string>,
      default: undefined,
    },
    useSlot: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
    aria: {
      type: String as PropType<string>,
      default: undefined,
    },
    required: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
  },
  emits: {},
  style: {},
} as const;

type EFormLabel = ComponentConfiguration<
  typeof configuration,
  {
    default: {
      properties: Record<string, never>;
    };
  } & ComponentSlots
>;

const EFormLabel = defineComponent({
  name: configuration.name,
  props: configuration.props,
  emits: configuration.emits,
  inheritAttrs: false,
  setup(_) {
    const component = useComponent<EFormLabel>(configuration, _);
    const { css, attrs, slot, render } = useContext(component);

    const props = component.props;

    render(() =>
      props.value.text ? (
        <label
          id={props.value.aria}
          for={props.value.for}
          class={[css.base, css.modifier({ required: props.value.required })]}
          {...attrs}
        >
          {props.value.text}
        </label>
      ) : (
        <div
          id={props.value.aria}
          class={[css.base, css.modifier({ required: props.value.required })]}
          {...attrs}
        >
          {slot.node.default?.({})}
        </div>
      ),
    );
  },
});

export { EFormLabel, configuration };
