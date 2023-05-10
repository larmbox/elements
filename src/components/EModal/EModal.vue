<template>
  <div
    :id="`e-${id}-ref`"
    style="display: inline"
    @open="onOpen"
    @close="onClose"
  >
    <Teleport v-if="ready" :to="teleportTarget">
      <div
        v-if="active"
        :id="id"
        :ref="id"
        :class="[css.base(), sizeClass, { [css.modifier('visible')]: visible }]"
        role="dialog"
        :aria-labelledby="headerId"
        :aria-describedby="bodyId"
      >
        <div :class="css.element('inner')">
          <div :class="css.element('content')">
            <div
              :class="css.element('header')"
              ref="header"
              :id="headerId"
              tabindex="-1"
            >
              <div>
                <slot v-if="!title && hasSlot('title')" :data="data" />
                <h5
                  v-else-if="title"
                  v-text="title"
                  :class="css.element('title')"
                />
                <slot
                  v-if="!description && hasSlot('description')"
                  :data="data"
                />
                <span
                  v-else-if="description"
                  v-text="description"
                  :class="css.element('description')"
                />
              </div>

              <button
                v-if="closeable"
                :class="css.element('close')"
                aria-label="Close Modal"
                @click="modal.close()"
              >
                <EIcon :icon="options.closeIcon" />
              </button>
            </div>
            <div
              v-if="hasSlot('body-raw')"
              :class="[
                css.element('body'),
                css.modifier('raw', css.element('body'), false),
              ]"
              ref="body"
              :id="bodyId"
            >
              <slot name="body-raw" :data="data" :close="modal.close" />
            </div>
            <div
              v-if="hasSlot('body') || hasSlot('default')"
              :class="css.element('body')"
              ref="body"
              :id="bodyId"
            >
              <slot
                v-if="hasSlot('body')"
                name="body"
                :close="() => modal.close(id)"
                :data="data"
              />
              <slot v-else :close="() => modal.close(id)" :data="data" />
            </div>

            <div
              v-if="
                hasSlot('footer') ||
                hasSlot('footer-left') ||
                hasSlot('footer-right')
              "
              :class="css.element('footer')"
              ref="footer"
            >
              <slot
                v-if="hasSlot('footer')"
                name="footer"
                :close="() => modal.close(id)"
                :data="data"
              />
              <slot
                v-else-if="hasSlot('footer-left')"
                name="footer-left"
                :close="() => modal.close(id)"
                :data="data"
              />
              <div :class="css.element('footer-fill')" />
              <slot
                v-if="hasSlot('footer-right')"
                name="footer-right"
                :close="() => modal.close(id)"
                :data="data"
              />
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref, watch } from 'vue';
import { EIcon, EModalComponent } from '~/components';
import { useComponent } from '~/composables/component/use-component';
import { useSize } from '~/composables/component/use-size';
import { _useElements } from '~/composables/use-elements/use-elements';

import { ComponentName } from '~/common/enums';
import { useContextUtil } from '~/composables/component/use-context-util';
import { TeleportTarget } from '~/composables/use-elements/init';
import { props, style } from './EModal';

const ANIMATION_DURATION = 250;

export default defineComponent({
  name: ComponentName.EModal,
  props,
  components: {
    EIcon,
  },
  setup(props) {
    const component = useComponent<EModalComponent>(
      ComponentName.EModal,
      props
    );

    const {
      uuid,
      modal,
      theming: { registerComponentStyle },
    } = _useElements();

    registerComponentStyle(component.name, style);

    const { css } = useContextUtil(component);
    const { sizeClass } = useSize(component);
    const { enable: enableTrapFocus, disable: disableTrapFocus } =
      useTrapFocus();

    const id = props.id || uuid();
    const bodyId = uuid();
    const headerId = uuid();

    const ready = ref(false);
    const active = ref(false);
    const visible = ref(false);

    const data = ref(null);

    let closetimeout: NodeJS.Timeout | null = null;

    let previousFocusedElement: HTMLElement | null = null; // Contains the element that was focused when the modal was opened.

    const createTeleport = () => {
      if (
        backdrop.value ||
        document.getElementById(TeleportTarget.Modal + '-backdrop')
      )
        return;
      const teleport = document.getElementById(TeleportTarget.Modal)!;
      backdrop.value = document.createElement('div');
      backdrop.value.id = TeleportTarget.Modal + '-backdrop';
      backdrop.value.className = css.element('backdrop');
      teleport.appendChild(backdrop.value);
    };

    onMounted(() => {
      if (typeof document === 'undefined') {
        return;
      }

      createTeleport();

      ready.value = true;
    });

    const header = ref<HTMLElement | null>(null);
    const body = ref<HTMLElement | null>(null);
    const footer = ref<HTMLElement | null>(null);
    const backdrop = ref<HTMLElement | null>(null);

    watch(
      () => [props],
      () => {
        nextTick(() => {
          updateBodyOverflowHeight();
        });
      }
    );

    const onOpen = (event: any) => {
      const teleport = document.getElementById(TeleportTarget.Modal)!;
      backdrop.value = teleport.firstElementChild! as HTMLElement;
      backdrop.value.addEventListener('click', onBackdropClick);

      if (closetimeout) {
        clearInterval(closetimeout);
      }
      active.value = true;
      data.value = event.detail;

      window.addEventListener('resize', updateBodyOverflowHeight);
      window.addEventListener('keydown', onKeyDown);
      previousFocusedElement = document.activeElement as HTMLElement | null;

      if (props.closeOnRouteChange) {
        useRouteObserver(() => {
          modal.closeAll();
        });
      }

      nextTick(() => {
        visible.value = true;
        enableTrapFocus(id);
        updateBodyOverflowHeight();
      });
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (props.closeable) {
          modal.close();
        } else {
          shake();
        }
      }
    };

    /**
     * Shakes (css) the current modal using the e-shake class name.
     */
    const shake = () => {
      const LX_SHAKE_CLASS = 'e-shake';
      const ref = document.getElementById(id);
      if (!ref || ref?.classList.contains(LX_SHAKE_CLASS)) {
        return;
      }

      ref.classList.add(LX_SHAKE_CLASS);
      setTimeout(() => {
        ref.classList.remove(LX_SHAKE_CLASS);
      }, 500);
    };

    const onClose = () => {
      visible.value = false;

      disableTrapFocus();

      if (previousFocusedElement) {
        // Return focus to previous focused element.
        previousFocusedElement.focus();
      }

      window.removeEventListener('resize', updateBodyOverflowHeight);
      window.removeEventListener('keydown', onKeyDown);

      if (backdrop.value) {
        backdrop.value.removeEventListener('click', onBackdropClick);
      }

      setTimeout(() => {
        if (!visible.value) {
          active.value = false;
        }
      }, ANIMATION_DURATION);
    };

    const onBackdropClick = () => {
      if (props.closeable && props.closeOnBackdrop) {
        modal.close();
      } else {
        return shake();
      }
    };

    const updateBodyOverflowHeight = () => {
      if (body.value) {
        body.value.style.maxHeight = `calc(100vh - ${
          (header.value?.clientHeight || 0) +
          (footer.value?.clientHeight || 0) +
          2
        }px - 3.5rem)`;
      }
    };

    return {
      ...component,
      ...useContextUtil(component),
      sizeClass,
      teleportTarget: `#${TeleportTarget.Modal}`,
      active,
      visible,
      onOpen,
      onClose,
      header,
      body,
      footer,
      headerId,
      bodyId,
      data,
      onBackdropClick,
      modal,
      ready,
    };
  },
});

const useRouteObserver = (onChange: () => void) => {
  if (typeof document === 'undefined') return;
  let previousUrl = location.pathname;
  const observer = new MutationObserver(() => {
    if (location.pathname !== previousUrl) {
      previousUrl = location.pathname;
      onChange();
    }
  });
  const config = { subtree: true, childList: true };
  observer.observe(document, config);
};

const useTrapFocus = () => {
  let firstFocusableElement: HTMLElement;
  let lastFocusableElement: HTMLElement;

  const enable = (id: string) => {
    // add all the elements inside modal which you want to make focusable
    const focusableElements =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = document.getElementById(id);

    if (!modal) {
      return;
    }

    firstFocusableElement = modal.querySelectorAll(
      focusableElements
    )[0] as HTMLElement; // First element that can be focused.

    const focusableContent = modal.querySelectorAll(focusableElements);
    lastFocusableElement = focusableContent[
      focusableContent.length - 1
    ] as HTMLElement; // Last element that can be focused.

    document.addEventListener('keydown', onKeydown);

    // Find any heading inside the modal.
    const headings = modal.querySelectorAll('h1, h2, h3, h4, h5, h6');

    // Use the first one.
    const heading = headings[0];
    if (heading) {
      // Set attribute tabindex -1: this will allow browsers to focus on the element.
      heading.setAttribute('tabindex', '-10');

      // Focus the element
      (heading as any).focus();
    } else {
      // If no headings were found, focus on first focusable element.
      firstFocusableElement.focus();
    }
  };

  const onKeydown = (e: KeyboardEvent) => {
    let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      // For Shift + Tab combination:
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else {
      // Tab only:
      if (document.activeElement === lastFocusableElement) {
        // If has reached the last focusable element, return to the first focusable element.
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
  };

  const disable = () => {
    document.removeEventListener('keydown', onKeydown);
  };

  return { enable, disable };
};
</script>
