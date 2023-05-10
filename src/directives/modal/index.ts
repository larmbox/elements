import { DirectiveBinding } from 'vue';
import { Props } from '~/components/EModal/EModal';
import { useElements } from '~/composables/use-elements/use-elements';

export interface ModalOptions extends Props {
  name: string;
  data?: any;
}

const OpenModalDirective = () => {
  return {
    name: 'open-modal',
    directive: {
      mounted(
        element: HTMLElement,
        binding: DirectiveBinding<ModalOptions | string>,
        _vnode: any
      ) {
        element.addEventListener('click', () => {
          let name: string, data: Record<string, any> | undefined;

          if (typeof binding.value === 'object') {
            name = binding.value.name;
            data = binding.value.data;
          } else if (binding.value) {
            name = binding.value;
          } else {
            return console.warn(
              'Modal directive missing binding value:',
              element
            );
          }

          const { modal } = useElements();
          modal.open(name, data);
        });
      },
    },
  };
};

const CloseModalDirective = () => {
  return {
    name: 'close-modal',
    directive: {
      mounted(element: HTMLElement, binding: DirectiveBinding, _vnode: any) {
        element.addEventListener('click', () => {
          const { modal } = useElements();
          modal.close(binding.value);
        });
      },
    },
  };
};

export { OpenModalDirective, CloseModalDirective };
