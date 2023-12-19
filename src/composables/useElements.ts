import { ref } from 'vue';
import { config as def } from '~/common/config';
import { createElementsTeleportTarget } from '~/common/init';
import { merge } from '~/common/merge';
import { Config, CreateOptions } from '~/create-elements';
import { useModal } from './useModal';
import { useTheme } from './useTheme';

type LGC = ReturnType<typeof create>;
let glc: LGC;

function create(options?: CreateOptions) {
  const config = ref<Config>(merge(def, options?.config || {}) as Config);

  const modal = useModal(config.value);
  const theming = useTheme(config.value);

  createElementsTeleportTarget();

  /**
   * Generates a random id.
   *
   * This is pseudorandom - using Math.random(), do not use if total uniqueness
   * is required.
   */
  const uuid = () => {
    return 'L' + (Math.random().toString(36) + '00000000000000000').slice(2, 9);
  };

  return {
    config,
    uuid,
    modal,
    theming,
  };
}

export function _useElements(options?: CreateOptions, teardown = false) {
  if (!glc || teardown) glc = create(options); // Make sure the elements instance exists.
  return glc;
}

export function useElements() {
  const { modal, uuid, theming, config } = _useElements();
  return {
    config,
    uuid,
    modal: {
      open: modal.open,
      close: modal.close,
      closeAll: modal.closeAll,
    },
    theming: {
      theme: theming.theme,
      setTheme: theming.setTheme,
      registerTheme: theming.registerTheme,
      providers: theming.providers,
    },
  };
}
