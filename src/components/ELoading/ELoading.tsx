import { PropType, defineComponent, useAttrs } from 'vue';
import { ComponentName } from '~/common/enums';
import { ComponentConfiguration } from '~/common/types';
import { useAria } from '~/composables/useAria';
import {
  ComponentSlots,
  configuration as component,
  useComponent,
} from '~/composables/useComponent';
import { useContext } from '~/composables/useContext';
import { _useElements } from '~/composables/useElements';

const configuration = {
  name: ComponentName.ELoading,
  props: {
    ...component.props,
    role: {
      type: String as PropType<string>,
      _preset: true,
    },
    label: {
      type: String as PropType<string>,
      default: undefined,
    },
  },
  emits: {
    ...component.emits,
  },
  style: {
    'border-width': 'calc(var(--border-width) * 2)',
    'animation-time': 'calc(var(--transition-time) * 8)',
  },
} as const;

type ELoading = ComponentConfiguration<typeof configuration, ComponentSlots>;

const ELoading = defineComponent({
  name: configuration.name,
  props: configuration.props,
  emits: configuration.emits,
  inheritAttrs: false,
  setup(_) {
    const attrs = useAttrs();

    const component = useComponent<ELoading>(configuration, _);
    const { css, render } = useContext(component);
    const { sr } = useAria();
    const {
      theming: { registerComponentStyle },
    } = _useElements();

    registerComponentStyle(component.name, component.style);

    const props = component.props;

    render(() => (
      <div id={component.id.value} class={css.base} aria-busy={true} {...attrs}>
        {props.value.label && <span class={sr}>{props.value.label}</span>}
      </div>
    ));
  },
});

export { ELoading, configuration };
