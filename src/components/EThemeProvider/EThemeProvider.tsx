import {
  PropType,
  defineComponent,
  onMounted,
  onUnmounted,
  onUpdated,
} from 'vue';
import { ComponentName } from '~/common/enums';
import { ComponentConfiguration } from '~/common/types';
import {
  ComponentSlots,
  configuration as component,
  useComponent,
} from '~/composables/useComponent';
import { useContext } from '~/composables/useContext';
import { _useElements } from '~/composables/useElements';

const configuration = {
  name: ComponentName.EThemeProvider,
  props: {
    ...component.props,
    theme: {
      type: Object as PropType<{
        name: string;
        variables: Record<string, string>;
      }>,
      required: true,
      _verbose: true,
    },
    global: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
    destroyDelay: {
      type: Number as PropType<number>,
      default: undefined,
    },
  },
  emits: {},
  style: {},
} as const;

type EThemeProvider = ComponentConfiguration<
  typeof configuration,
  {
    default: {
      properties: {
        id: string;
      };
    };
  } & ComponentSlots
>;

const EThemeProvider = defineComponent({
  name: configuration.name,
  props: configuration.props,
  emits: configuration.emits,
  inheritAttrs: false,
  setup(_) {
    const component = useComponent<EThemeProvider>(configuration, _);
    const { render, slot, attrs } = useContext(component);
    const {
      uuid,
      theming: { registerTheme, render: rerender, destroy },
    } = _useElements();

    const props = component.props;

    const id = props.value.global ? 'global' : uuid();

    const create = () => {
      if (props.value.theme) {
        registerTheme({
          name: props.value.theme.name,
          variables: props.value.theme.variables,
        });

        rerender(id, props.value.theme.name);
      }
    };

    onMounted(create);
    onUpdated(create);

    onUnmounted(() => setTimeout(() => destroy(id), props.value.destroyDelay));

    render(() => (
      <div
        id={props.value.global ? undefined : id}
        data-global={props.value.global ? '1' : undefined}
        {...attrs}
      >
        {slot.node.default?.({ id })}
      </div>
    ));
  },
});

export { EThemeProvider, configuration };
