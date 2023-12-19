export function useFocusTrap() {
  let firstFocusableElement: HTMLElement;
  let lastFocusableElement: HTMLElement;

  type Focusable = {
    focus?(options?: FocusOptions): void;
  };

  let focusReturnElement: Required<Focusable> | undefined;

  const attach = (id: string, returnElement?: Focusable) => {
    const container = document.getElementById(id);
    if (!container) return;

    if (focusReturnElement) {
      // Already has a focus return element, no need to set it again.
      return;
    }

    if (returnElement && returnElement.focus) {
      // Set the element to return focus to after the modal closes, if it is a
      // focusable element.
      focusReturnElement = returnElement as Required<Focusable>;
    }

    // add all the elements inside modal which you want to make focusable
    const focusableElements =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    firstFocusableElement = container.querySelectorAll(
      focusableElements,
    )[0] as HTMLElement; // First element that can be focused.

    const focusableContent = container.querySelectorAll(focusableElements);
    lastFocusableElement = focusableContent[
      focusableContent.length - 1
    ] as HTMLElement; // Last element that can be focused.

    document.addEventListener('keydown', onKeydown);

    // TODO: If any input has the autofocus attribute, it should be focused
    // instead.

    // Find the focus target element inside the container. If it is not found,
    // use the container itself.
    const target = container.querySelector('[data-focus-target]') || container;

    if (target && (target as HTMLElement).focus) {
      // Set attribute tabindex -1: this will allow browsers to focus on the
      // element programmatically, but not by tabbing through the page.
      target.setAttribute('tabindex', '-1');

      if ((target as HTMLElement).focus) {
        // Focus the element.
        (target as HTMLElement).focus();
      }
    }
  };

  const onKeydown = (event: KeyboardEvent) => {
    const isTabPressed = event.key === 'Tab' || event.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    if (event.shiftKey) {
      // For Shift + Tab combination:
      if (document.activeElement === firstFocusableElement) {
        // If has reached the first focusable element, return to the last
        // focusable element.
        lastFocusableElement.focus();
        event.preventDefault();
      }
    } else {
      // Tab only:
      if (document.activeElement === lastFocusableElement) {
        // If has reached the last focusable element, return to the first
        // focusable element.
        firstFocusableElement.focus();
        event.preventDefault();
      }
    }
  };

  const release = () => {
    // Return focus to the element that was focused before the modal opened.
    if (focusReturnElement) focusReturnElement.focus();

    focusReturnElement = undefined;
    document.removeEventListener('keydown', onKeydown);
  };

  return { attach, release };
}
