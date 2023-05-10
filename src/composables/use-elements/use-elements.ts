import { ref } from 'vue';

import { useTheme } from '../component/use-theme';
import { useModal } from './use-modal';

import { deepMerge } from '~/common/utility';
import defaultConfig from '~/common/utility/default-config';
import { Config, CreateOptions } from '~/create-elements';
import { createElementsTeleportTarget } from './init';

type LGC = ReturnType<typeof create>;
let glc: LGC;

function create(options?: CreateOptions) {
  const config = ref<Config>(
    deepMerge(defaultConfig, options?.config || {}) as Config
  );

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
    theming: {
      theme: theming.theme,
      setTheme: theming.setTheme,
      registerTheme: theming.registerTheme,
      createPalette: theming.createPalette,
    },
    modal: {
      open: modal.open,
      close: modal.close,
      closeAll: modal.closeAll,
    },
  };
}
