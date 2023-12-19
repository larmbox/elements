import { onMounted, onUnmounted } from 'vue';
import { isServer } from '~/common/environment';

export function useRouteObserver(onChange: () => void) {
  if (isServer()) return;

  let observer: MutationObserver | null = null;
  let previous = location.pathname; // Previous path.

  onMounted(() => {
    // Create an observer instance linked to the callback function.
    observer = new MutationObserver(() => {
      if (location.pathname !== previous) {
        previous = location.pathname;
        onChange();
      }
    });

    // Start observing the target node for configured mutations.
    const config = { subtree: true, childList: true };
    observer.observe(document, config);
  });

  // Stop observing when component is unmounted.
  onUnmounted(() => observer?.disconnect());
}
