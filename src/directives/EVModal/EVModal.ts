import { Directive } from 'vue';
import { useElements } from '~/composables/useElements';

type Element = HTMLElement & { _click: () => void };

const EVModalOpen: Directive<
  Element,
  string | { name: string; data?: unknown }
> = {
  mounted(element, binding) {
    element._click = () => {
      let name: string,
        data: unknown | undefined = undefined;

      if (typeof binding.value === 'object') {
        name = binding.value.name;
        data = binding.value.data;
      } else if (binding.value) {
        name = binding.value;
      } else {
        return console.warn(
          'Modal directive is missing binding value:',
          element,
        );
      }

      useElements().modal.open(name, data);
    };

    element.addEventListener('click', element._click);
  },
  unmounted(element) {
    if (element) element.removeEventListener('click', element._click);
  },
};

const EVModalClose: Directive<Element, string> = {
  mounted(element, binding) {
    element._click = () => useElements().modal.close(binding.value);
    element.addEventListener('click', element._click);
  },
  unmounted(element) {
    if (element) element.removeEventListener('click', element._click);
  },
};

const EVModalCloseAll: Directive<Element, void> = {
  mounted(element) {
    element._click = useElements().modal.closeAll;
    element.addEventListener('click', element._click);
  },
  unmounted(element) {
    if (element) element.removeEventListener('click', element._click);
  },
};

export { EVModalClose, EVModalCloseAll, EVModalOpen };
