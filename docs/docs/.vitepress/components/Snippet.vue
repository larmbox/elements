<template>
  <div>
    <Vuelr
      v-if="mounted"
      class="snippet"
      :class="{ runnable }"
      :code="code"
      v-slot="{ target }"
    >
      <div class="target" :class="class" :id="target" />
      <div
        class="inner language-vue"
        :class="{ expanded: expanded, editing: editing }"
        @mousedown="onClick"
      >
        <button v-if="runnable" class="copy" title="Copy code" />
        <span v-if="runnable" class="lang">vue</span>
        <div
          class="shiki-container vp-code"
          ref="container"
          :contenteditable="editing"
          @input="onInput"
        />
        <div v-if="runnable && !expanded" class="overlay" />
        <button
          v-if="runnable"
          class="edit"
          title="Edit code"
          @click="onToggle"
        >
          {{ editing ? 'Done' : 'Edit' }}
        </button>
      </div>
    </Vuelr>
  </div>
</template>
<script lang="ts">
import { Highlighter } from 'shikiji';
import {
  PropType,
  computed,
  defineComponent,
  inject,
  nextTick,
  onMounted,
  ref,
  watch,
} from 'vue';
import { useElements } from '../../../../src';

export default defineComponent({
  props: {
    code: {
      type: String as PropType<string>,
      default: '',
    },
    class: {
      type: String as PropType<string>,
      default: '',
    },
    language: {
      type: String as PropType<string>,
      default: 'vue',
    },
    run: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  setup(props) {
    const {
      theming: { theme },
    } = useElements();

    const mounted = ref(false);
    const container = ref<HTMLElement | null>(null);
    const editing = ref(false);
    const expanded = ref(false);
    const code = ref(props.code.replace(/^\s+|\s+$/g, ''));

    const shiki = inject<Highlighter>('shiki'); // Provided in entry file.

    watch(
      () => theme.value,
      () => {
        // Watch for theme change and re-render.
        if (container.value) render(container.value);
      },
    );

    onMounted(() => {
      mounted.value = true;
      nextTick(() => {
        if (!container.value) return;

        container.value.textContent = code.value; // Sets the initial code.
        container.value.spellcheck = false; // Disables squiggly lines.

        render(container.value); // Applies highlighting.

        // If the snippet is less than 200px tall, make it expanded by default.
        if (container.value.scrollHeight < 200) expanded.value = true;
      });
    });

    /**
     * Applies highlighting to the element.
     *
     * @param element The element to apply highlighting to.
     */
    const render = (element: Element) => {
      if (shiki) {
        element.innerHTML = shiki.codeToHtml(code.value, {
          lang: props.language,
          theme: theme.value === 'dark' ? 'github-dark' : 'github-light',
        });
      }

      // Find the .shiki element and remove the style attribute.
      // The renderer sets the background color to the theme's background color,
      // which we do not want.
      element.querySelector('.shiki')?.setAttribute('style', '');
      element.querySelector('.shiki')?.setAttribute('tabindex', '-1');
    };

    /**
     * Fires when the user types in the snippet.
     *
     * @param event Input event.
     */
    const onInput = (event: Event) => {
      code.value = (event.target as HTMLDivElement).textContent || '';
    };

    /**
     * Toggles the snippet between editing and non-editing mode.
     */
    const onToggle = () => {
      expanded.value = true; // Force expand the snippet.

      editing.value = !editing.value;

      // Re-render the snippet to apply highlighting.
      if (container.value) render(container.value);
    };

    /**
     * Expands the snippet when clicked.
     */
    const onClick = () => {
      expanded.value = true;
    };

    const runnable = computed(() => {
      return props.language === 'vue';
    });

    return {
      container,
      code,
      expanded,
      editing,
      runnable,
      mounted,

      onInput,
      onToggle,
      onClick,
    };
  },
});
</script>

<style lang="scss">
.snippet {
  &.runnable {
    margin-bottom: 2rem;
  }

  &:not(.runnable) {
    .target {
      display: none;
    }

    .inner {
      background-color: var(--vp-code-block-bg);
      padding: 0.25rem;
      border-radius: var(--border-radius);

      pre {
        margin: 0;
      }
    }
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.75rem;
    row-gap: 0.75rem;
  }

  .inner {
    position: relative;
    max-height: 140px;
    overflow-y: hidden !important;

    .overlay {
      position: absolute;
      bottom: 1px;
      left: 1px;
      width: calc(100% - 2px);
      height: 64px;
      background: var(--code-fade);
      border-bottom-left-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
      z-index: 1;
    }

    &.expanded {
      max-height: none;
    }

    &.editing {
      outline: none;

      .edit,
      .copy {
        opacity: 1;
      }

      .lang {
        opacity: 0;
      }
    }

    &:hover,
    &:focus-within {
      .edit,
      .copy {
        opacity: 1;
      }

      .lang {
        opacity: 0;
      }
    }
  }

  .edit,
  .copy {
    &:focus-visible {
      z-index: 5 !important;
      outline: 1px solid var(--primary-color) !important;

      &.copied::before {
        outline: 1px solid var(--primary-color) !important;
      }
    }
  }

  .copy {
    // Move the copy button to the left side of the edit button.
    right: 64px !important;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;

    &.copied {
      // Show the copy button as long as the copied state is active.
      opacity: 1 !important;

      + .lang {
        // Hide the language label when the copy button is active.
        opacity: 0;

        + .shiki-container + .edit {
          // Show the edit button when the copy button is active.
          opacity: 1;
        }
      }
    }
  }

  .edit {
    position: absolute;
    font-weight: 500;
    font-size: 12px;
    top: 12px;
    right: 12px;
    z-index: 3;
    border: 1px solid var(--vp-code-copy-code-border-color);
    border-radius: 4px;
    width: 52px;
    height: 40px;
    background-color: var(--vp-code-copy-code-bg);
    opacity: 0;
    cursor: pointer;
    background-position: 50%;
    background-size: 20px;
    background-repeat: no-repeat;
    transition:
      border-color 0.25s,
      background-color 0.25s,
      opacity 0.25s;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    color: var(--vp-code-copy-code-active-text);
    white-space: nowrap;
    border-left: none;

    &:hover {
      border-color: var(--vp-code-copy-code-hover-border-color);
      background-color: var(--vp-code-copy-code-hover-bg);
    }
  }
}
</style>
