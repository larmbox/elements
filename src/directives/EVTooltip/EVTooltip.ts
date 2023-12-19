import { App, Directive, Ref, createApp, ref } from 'vue';
import { ComponentConfiguration, ExtractProps } from '~/common/types';
import { ETooltip } from '~/components';

type Binding =
  | Partial<ExtractProps<ComponentConfiguration<ETooltip>['props']>>
  | string; // Can be the tooltip props or a string.

const EVTooltip: Directive<
  HTMLElement & { binding: Ref<Binding>; app: App<Element> },
  Binding
> = {
  mounted(element, binding) {
    if (element.binding) return; // Already mounted.
    if (!element || !element.parentNode) {
      // Element not found or has no parent.
      return console.warn('Tooltip reference is not a valid element.');
    }

    const wrapper = document.createElement('div');
    element.parentNode.insertBefore(wrapper, element);

    const props =
      typeof binding.value === 'object'
        ? binding.value
        : { text: binding.value };

    element.binding = ref(props);

    element.app = createApp(ETooltip, {
      binding: element.binding,
    });

    element.app.mount(wrapper);

    wrapper.children[0].appendChild(element);
  },
  unmounted(element) {
    element.app.unmount();
  },
  updated(element, binding) {
    const props =
      typeof binding.value === 'object'
        ? binding.value
        : { text: binding.value };
    element.binding.value = props;
  },
};

export { EVTooltip };
