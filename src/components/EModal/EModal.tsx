import {
  PropType,
  Teleport,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue';
import { ComponentName } from '~/common/enums';
import { isServer } from '~/common/environment';
import { ELEMENTS_TELEPORT_TARGET } from '~/common/init';
import { ComponentConfiguration } from '~/common/types';
import {
  ComponentSlots,
  configuration as component,
  useComponent,
} from '~/composables/useComponent';
import { useContext } from '~/composables/useContext';
import { _useElements } from '~/composables/useElements';
import { useFocusTrap } from '~/composables/useFocusTrap';
import { useRouteObserver } from '~/composables/useRouteObserver';
import { SizeSlots, configuration as size } from '~/composables/useSize';
import { EIcon } from '../EIcon';

const configuration = {
  name: ComponentName.EModal,
  props: {
    ...component.props,
    ...size.props,
    size: {
      ...size.props.size,
      _preset: true,
    },
    title: {
      type: String as PropType<string>,
      default: undefined,
    },
    description: {
      type: String as PropType<string>,
      default: undefined,
    },
    closeable: {
      type: [Array] as PropType<('outside' | 'escape' | 'route')[]>,
      default: undefined,
      _preset: true,
      _verbose: true,
    },
    closeButton: {
      type: [Object, Boolean] as PropType<
        { title?: string; ariaLabel?: string; icon: string } | false
      >,
      default: undefined,
      _preset: true,
      _verbose: true,
    },
    transitionDuration: {
      type: Number as PropType<number>,
      _preset: true,
    },
    rejectCloseClass: {
      type: String as PropType<string | null>,
      default: undefined,
    },
    ariaLabelledby: {
      type: String as PropType<string>,
      default: undefined,
    },
    ariaDescribedby: {
      type: String as PropType<string>,
      default: undefined,
    },
  },
  emits: {
    ...component.emits,
    close: () => true,
    open: () => true,
    'reject-close': () => true,
    show: () => true,
    hide: () => true,
  },
  style: {
    'border-radius': 'var(--border-radius)',
    'background-color': 'var(--background-color)',
    'body-color': 'var(--body-color)',

    size: '34rem',
    'size-sm': '28rem',
    'size-lg': '40rem',

    'z-index': 10,

    'line-height': 'var(--line-height)',
    'reject-close': 'reject-close',
    'transition-time': 'var(--transition-time)',

    'title-font-size': 'calc(var(--font-size) * 1.5)',
    'description-text-color': 'var(--text-color--light)',
    'description-font-size': 'var(--font-size-sm)',
  },
} as const;

type EModal = ComponentConfiguration<
  typeof configuration,
  {
    title: {
      properties: {
        data: unknown;
        close: () => void;
      };
    };
    description: {
      properties: {
        data: unknown;
        close: () => void;
      };
    };
    'header-extension': {
      properties: {
        data: unknown;
        close: () => void;
      };
    };
    default: {
      properties: {
        data: unknown;
        close: () => void;
      };
    };
    body: {
      properties: {
        data: unknown;
        close: () => void;
      };
    };
    'body-raw': {
      properties: {
        data: unknown;
        close: () => void;
      };
    };
    footer: {
      properties: {
        data: unknown;
        close: () => void;
      };
    };
    'footer-left': {
      properties: {
        data: unknown;
        close: () => void;
      };
    };
    'footer-right': {
      properties: {
        data: unknown;
        close: () => void;
      };
    };
  } & ComponentSlots &
    SizeSlots
>;

const TELEPORT_TARGET = ELEMENTS_TELEPORT_TARGET;

const EModal = defineComponent({
  name: configuration.name,
  props: configuration.props,
  emits: configuration.emits,
  inheritAttrs: false,
  setup(_, { emit }) {
    const component = useComponent<EModal>(configuration, _);
    const { css, attrs, slot, render, first } = useContext(component);

    const focus = useFocusTrap();

    const props = component.props;

    const {
      uuid,
      modal,
      theming: { registerComponentStyle },
    } = _useElements();

    registerComponentStyle(component.name, component.style);

    const id = props.value.id || uuid();

    const ids = {
      body: uuid(),
      header: uuid(),
      footer: uuid(),
    };

    const ready = ref(false);
    const active = ref(false);
    const visible = ref(false);

    const data = ref<unknown | null>(null);

    let header: HTMLElement | null = null;
    let body: HTMLElement | null = null;
    let footer: HTMLElement | null = null;
    let outside: HTMLElement | null = null;

    const listeners: Record<string, AbortController | null> = {
      outside: null,
      keydown: null,
      resize: null,
    } as const;

    /**
     * Sets up supporting modal elements, such as the outside.
     */
    const setup = () => {
      // We need to modify the DOM in order to create the outside element.
      if (isServer()) return;

      const name = 'outside';
      const teleport = document.getElementById(TELEPORT_TARGET);

      // We only want to create one element.
      outside = document.getElementById(`${TELEPORT_TARGET}-${name}`);
      if (outside) return; // The element already exists.

      if (teleport) {
        outside = document.createElement('div');
        outside.id = `${TELEPORT_TARGET}-${name}`;
        outside.className = css.element(name);
        teleport.appendChild(outside);
      }
    };

    onMounted(() => {
      setup();
      ready.value = true;
    });

    watch(
      () => [props],
      () => {
        // A change of props could resize the header or footer, so we need to
        // recalculate the size of the modal.
        nextTick(() => resize());
      },
    );

    watch(
      () => [modal.stack.value],
      () => {
        const found = modal.stack.value.find((stack) => stack.id === id);
        if (found) {
          if (found.idle) close(true);
          else if (!active.value) open(found.data);
          else if (!found.idle) open(found.data, true);
        } else {
          if (active.value) {
            close();
          }
        }
      },
      { deep: true },
    );

    /**
     * Fires when the modal receives the open event.
     *
     * @param event
     */
    const open = async (payload: unknown, restore = false) => {
      // Activates the modal, adding it to the DOM.
      // The modal stays hidden until 'visible' is true.
      active.value = true;

      if (restore === false) {
        emit('open');
        data.value = payload;
      } else emit('show');

      listeners.outside = new AbortController();
      listeners.resize = new AbortController();
      listeners.keydown = new AbortController();

      window.addEventListener('resize', onResize, {
        signal: listeners.resize.signal,
      });
      window.addEventListener(
        'keydown',
        (event: KeyboardEvent) => onKeyDown(id, event),
        { signal: listeners.keydown.signal },
      );

      if (outside)
        outside.addEventListener('click', () => onOutsideClick(id), {
          signal: listeners.outside.signal,
        });

      nextTick(() => {
        body = document.getElementById(ids.body);
        header = document.getElementById(ids.header);
        footer = document.getElementById(ids.footer);

        if (active.value) {
          // The modal is now added to DOM, so we can show it.
          visible.value = true;

          focus.attach(
            id,
            (document.activeElement as HTMLElement | null) || undefined,
          );

          resize();
        }
      });
    };

    // Close the modal when the component is unmounted.
    onBeforeUnmount(() => modal.close(id));

    useRouteObserver(() => {
      if (props.value.closeable.includes('route')) {
        modal.close(id);
      }
    });

    const close = (keep = false) => {
      // Remove event listeners.
      listeners.resize?.abort();
      listeners.keydown?.abort();
      listeners.outside?.abort();

      // Hide the modal.
      visible.value = false;

      setTimeout(() => {
        // Check if modal is still invisible to make sure the modal was not
        // reopened within the animation time. If it remains invisible, we can
        // remove it from the DOM.
        if (!keep && !visible.value) {
          // Remove modal from DOM. This is done after the animation is finished.
          active.value = false;
          emit('close');

          // Release the focus trap, returning focus to the previous focused
          // element. If we are keeping the modal, we do not want to release the
          // focus, as another modal is going to be opened anyway, finding its
          // own focusable element.
          focus.release();
        } else if (keep) {
          emit('hide');
        }
      }, props.value.transitionDuration);
    };

    /**
     * Fired on keydown.
     *
     * @param id Modal id.
     * @param event
     */
    const onKeyDown = (id: string, event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (props.value.closeable.includes('escape')) {
          modal.close(id);
        } else {
          rejectCloseAnimation();
        }
      }
    };

    /**
     * Fired on click outside the modal (backdrop).
     *
     * @param id Modal id.
     */
    const onOutsideClick = (id: string) => {
      if (props.value.closeable.includes('outside')) {
        modal.close(id);
      } else {
        rejectCloseAnimation();
      }
    };

    /**
     * Resizes the modal body height to fit the viewport.
     */
    const resize = () => {
      if (body) {
        body.style.maxHeight = `calc(100vh - ${
          (header?.clientHeight || 0) + (footer?.clientHeight || 0)
        } - 3.5rem)`;
      }
    };

    /**
     * Adds the close rejection animation to the modal.
     */
    const rejectCloseAnimation = () => {
      emit('reject-close');
      // If the rejectCloseClass is null, we do not want to add the animation.
      if (props.value.rejectCloseClass === null) return;

      const animation =
        props.value.rejectCloseClass || `${component.name}--reject-close`;
      const ref = document.getElementById(id);
      if (!ref || ref?.classList.contains(animation)) {
        return;
      }

      ref.classList.add(animation);
      setTimeout(() => {
        ref.classList.remove(animation);
      }, 500);
    };

    const onResize = resize;

    render(() =>
      !ready.value ? (
        <div></div>
      ) : (
        <Teleport to={`#${TELEPORT_TARGET}`}>
          {active.value && (
            <div
              id={component.id.value}
              class={[
                css.base,
                css.modifier({
                  [props.value.size]: true,
                  visible: visible.value,
                }),
              ]}
              role="dialog"
              aria-labelledby={first(props.value.ariaLabelledby, ids.header)}
              aria-describedby={first(props.value.ariaDescribedby, ids.header)}
              {...attrs}
            >
              <div class={css.element('inner')}>
                <div class={css.element('content')}>
                  {(props.value.title ||
                    props.value.description ||
                    slot.active('title') ||
                    slot.active('description')) && (
                    <div class={css.element('header')} id={ids.header}>
                      <div>
                        {!props.value.title && slot.active('title') ? (
                          <div class={css.element('title')}>
                            {slot.node.title?.({
                              data: data.value,
                              close: modal.close,
                            })}
                          </div>
                        ) : (
                          props.value.title && (
                            <span class={css.element('title')}>
                              {props.value.title}
                            </span>
                          )
                        )}
                        {!props.value.description &&
                        slot.active('description') ? (
                          <div class={css.element('description')}>
                            {slot.node.description?.({
                              data: data.value,
                              close: modal.close,
                            })}
                          </div>
                        ) : (
                          props.value.description && (
                            <span class={css.element('description')}>
                              {props.value.description}
                            </span>
                          )
                        )}
                      </div>
                      {props.value.closeButton !== false && (
                        <button
                          title={props.value.closeButton.title}
                          class={css.element('close')}
                          aria-label={props.value.closeButton.ariaLabel}
                          onClick={() => modal.close()}
                        >
                          <EIcon icon={props.value.closeButton.icon} />
                        </button>
                      )}
                    </div>
                  )}
                  <div data-focus-target="true" />
                  {slot.active('header-extension') && (
                    <div class={css.element('header-extension')}>
                      {slot.node['header-extension']?.({
                        data: data.value,
                        close: modal.close,
                      })}
                    </div>
                  )}
                  {slot.active('body-raw') && (
                    <div
                      id={ids.body}
                      class={[
                        css.element('body'),
                        css.modifier('raw', css.element('body'), false),
                      ]}
                    >
                      {slot.node['body-raw']?.({
                        data: data.value,
                        close: modal.close,
                      })}
                    </div>
                  )}
                  {slot.active('body') ||
                    (slot.active('default') && (
                      <div id={ids.body} class={css.element('body')}>
                        {slot.active('body')
                          ? slot.node.body?.({
                              data: data.value,
                              close: () => modal.close(component.id.value),
                            })
                          : slot.node.default?.({
                              data: data.value,
                              close: () => modal.close(component.id.value),
                            })}
                      </div>
                    ))}
                  {(slot.active('footer') ||
                    slot.active('footer-left') ||
                    slot.active('footer-right')) && (
                    <div class={css.element('footer')}>
                      <div>
                        {slot.active('footer')
                          ? slot.node.footer?.({
                              data: data.value,
                              close: () => modal.close(component.id.value),
                            })
                          : slot.active('footer-left') &&
                            slot.node['footer-left']?.({
                              data: data.value,
                              close: () => modal.close(component.id.value),
                            })}
                      </div>
                      <div>
                        {slot.active('footer-right') &&
                          slot.node['footer-right']?.({
                            data: data.value,
                            close: () => modal.close(component.id.value),
                          })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </Teleport>
      ),
    );
  },
});

export { EModal, configuration };
