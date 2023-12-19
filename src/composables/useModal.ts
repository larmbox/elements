import { ref } from 'vue';
import { ELEMENTS_TELEPORT_TARGET } from '~/common/init';
import { Config } from '~/create-elements';

export function useModal(config: Config) {
  const stack = ref<{ id: string; data: unknown; idle: boolean }[]>([]);

  const duration = config.components.EModal.props.transitionDuration || 100;

  /**
   * Opens a modal.
   *
   * @param id Modal id.
   * @param data Data to pass to modal.
   * @param restore
   */
  const open = (id: string, data?: unknown, restore = false): void => {
    if (stack.value.length && !restore) {
      // Close previous modal if exists in stack.
      close(stack.value[stack.value.length - 1].id, true);
    }

    const index = stack.value.findIndex((modal) => modal.id === id);

    if (index === -1) {
      // Add modal to stack.
      stack.value.push({ id, data, idle: false });
      document
        .getElementById(ELEMENTS_TELEPORT_TARGET)
        ?.setAttribute('data-modal-active', 'true');
      if (stack.value.length === 1) {
        // Only change padding if this is the first modal.
        // Otherwise for subsequent modals the padding will be changed to 0, as overflow and scrollbar is hidden.
        document.body.style.paddingRight = scrollBarWidth() + 'px';
      }
      document.body.style.overflowY = 'hidden';
    } else {
      // Restore modal in stack.
      stack.value[index].idle = false;
    }
  };

  /**
   * Closes a modal.
   *
   * @param id Modal id to close. If omitted, the last modal in the stack will be closed.
   */
  const close = (id?: string, keep = false): void => {
    if (!id && stack.value.length) {
      // If no id was provided, pick the last modal in stack if exists.
      id = stack.value[stack.value.length - 1].id;
    }

    const index = stack.value.findIndex((modal) => modal.id === id);

    if (index === -1) {
      // Modal not found in stack.
      return;
    }

    // If keep is true, the modal will remain in the stack.
    if (keep) {
      stack.value[index].idle = true;
    } else {
      // Remove from stack.
      stack.value = stack.value.filter((modal) => modal.id !== id);
      if (stack.value.length) {
        // Restore (open) previous modal in stack.
        const modal = stack.value[index - 1];

        // Modal may have been closed in the meantime.
        if (modal && modal.idle) open(modal.id, modal.data, true);
      } else {
        // No more modals in stack, restore overflow on body.
        document
          .getElementById(ELEMENTS_TELEPORT_TARGET)
          ?.removeAttribute('data-modal-active');
        setTimeout(() => {
          // Extra check here as the modal could have been opened again in the meantime.
          if (stack.value.length === 0) {
            document.body.style.paddingRight = '0';
            document.body.style.overflowY = '';
          }
        }, duration);
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

  const scrollBarWidth = () => window.innerWidth - document.body.clientWidth;

  return {
    close,
    closeAll,
    stack,
    open,
  };
}
