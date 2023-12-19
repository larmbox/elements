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
  name: ComponentName.EFormDescription,
  props: {
    ...component.props,
    text: {
      type: String as PropType<string>,
    },
    useSlot: {
      type: Boolean as PropType<boolean>,
    },
    aria: {
      type: String as PropType<string>,
    },
  },
  emits: {},
  style: {},
} as const;

type EFormDescription = ComponentConfiguration<
  typeof configuration,
  {
    default: {
      properties: Record<string, never>;
    };
  } & ComponentSlots
>;

const EFormDescription = defineComponent({
  name: configuration.name,
  props: configuration.props,
  emits: configuration.emits,
  inheritAttrs: false,
  setup(_) {
    const component = useComponent<EFormDescription>(configuration, _);
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

export { EFormDescription, configuration };
