import { ref } from 'vue';
import { Config } from '~/create-elements';
import { TeleportTarget } from './init';

export const useModal = (_config?: Config) => {
  const stack = ref<{ id: string; data: any }[]>([]);

  /**
   * Opens a modal.
   *
   * @param id Modal id.
   * @param data Data to pass to modal.
   */
  const open = (id: string, data?: any, restore = false): void => {
    const event = new CustomEvent('open', {
      detail: data,
      bubbles: true,
    });

    const ref = document.getElementById(`e-${id}-ref`);
    if (!ref) {
      return console.error(`Unknown modal '${id}'.`);
    }

    // TODO: Return if modal id already exists in stack.

    if (stack.value.length && !restore) {
      // Close previous modal if exists in stack.
      close(stack.value[stack.value.length - 1].id, true);
    }

    // Trigger open on target modal.
    ref.dispatchEvent(event);

    if (!stack.value.find((t) => t.id === id)) {
      // Add modal to stack.
      stack.value.push({ id, data });
      document
        .getElementById(TeleportTarget.Modal)
        ?.setAttribute('data-e-active', 'true');
      if (stack.value.length === 1) {
        // Only change padding if this is the first modal.
        // Otherwise for subsequent modals the padding will be changed to 0, as overflow and scrollbar is hidden.
        document.body.style.paddingRight = scrollBarWidth() + 'px';
      }
      document.body.style.overflowY = 'hidden';
    }
  };

  /**
   * Closes a modal.
   *
   * @param id Modal id to close. If omitted, the last modal in the stack will be closed.
   */
  const close = (id?: string, keep = false): void => {
    const event = new CustomEvent('close', {
      bubbles: true,
    });

    if (!id && stack.value.length) {
      // Pick the last modal in stack if exists.
      id = stack.value[stack.value.length - 1].id;
    }

    const ref = document.getElementById(`e-${id}-ref`);

    if (ref) {
      ref.dispatchEvent(event);
    }

    // If keep is true, the modal will remain in the stack.
    if (!keep) {
      // Remove from stack.
      stack.value = stack.value.filter((t) => t.id !== id);
      if (!stack.value.length) {
        // No more modals in stack, restore overflow on body.
        document
          .getElementById(TeleportTarget.Modal)
          ?.removeAttribute('data-e-active');
        setTimeout(() => {
          document.body.style.paddingRight = '0';
          document.body.style.overflowY = '';
        }, 250);
      } else {
        // Restore (open) previous modal in stack.
        const mod = stack.value[stack.value.length - 1];
        open(mod.id, mod.data, true);
      }
    }
  };

  /**
   * Closes all modals in stack.
   */
  const closeAll = (): void => {
    stack.value = stack.value.slice(-1);
    close();
  };

  const scrollBarWidth = (element?: HTMLElement) => {
    if (!element) {
      // Return the body scrollbar width, when no element was specified.
      return window.innerWidth - document.body.clientWidth;
    } else {
      // When an element is specified, return its specific scrollbar width.
      return element.offsetWidth - element.clientWidth;
    }
  };

  return {
    close,
    closeAll,
    open,
  };
};
