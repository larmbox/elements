<template>
  <div>
    <Vuelr
      :class="['snippet', { render: !noRender }]"
      :code="code"
      v-slot="{ target }"
    >
      <div>
        <div :class="class" v-if="!noRender" :id="target" />
      </div>
      <div class="outer" @mousedown="onClick">
        <EButton
          v-if="!noEdit"
          @click="toggle"
          variant="gray"
          size="sm"
          outline
          :icon-left="editing ? 'check-square' : 'pencil-square'"
        >
          {{ editing ? 'Done' : 'Edit' }}
        </EButton>
        <div v-if="!expanded" class="fade" />
        <pre
          :id="id"
          class="hljs-code language-html"
          :class="expanded ? 'expanded' : undefined"
          :contenteditable="editing"
          @input="onInput"
        />
      </div>
    </Vuelr>
  </div>
</template>
<script lang="ts">
import hljs from 'highlight.js';
import { useElements } from '~/composables/use-elements/use-elements';

import { defineComponent, nextTick, onMounted, ref } from 'vue';

export default defineComponent({
  props: {
    code: {
      type: String,
      default: '',
    },
    noRender: {
      type: Boolean,
    },
    noEdit: {
      type: Boolean,
    },
    class: {
      type: String,
      default: '',
    },
  },
  setup(props, contxt) {
    const { uuid } = useElements();
    const id = uuid();

    const editing = ref(false);
    const expanded = ref(false);

    const code = ref(props.code.replace(/^\s+|\s+$/g, ''));

    onMounted(() => {
      nextTick(() => {
        const editor = document.getElementById(id);
        if (!editor) {
          return;
        }
        editor.textContent = code.value;
        editor.spellcheck = false;

        hljs.configure({ ignoreUnescapedHTML: true });

        // first, find all the div.code blocks
        document.querySelectorAll('pre.hljs-code').forEach((el) => {
          // then highlight each
          hljs.highlightElement(el);
        });
        nextTick(() => {
          const smallEnough = editor.scrollHeight;
          if (smallEnough < 200) {
            expanded.value = true;
          }
        });
      });
    });

    const onInput = (event: any) => {
      code.value = event.target.textContent;
    };

    const toggle = () => {
      onClick();
      editing.value = !editing.value;
    };

    const onClick = () => {
      expanded.value = true;
    };

    return { id, code, editing, onInput, toggle, onClick, expanded };
  },
});

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
</script>

<style lang="scss">
.snippet {
  border-radius: var(--e-border-radius);
  border: var(--e-border-width) solid var(--e-border-color);
  margin-bottom: 2rem !important;

  &.render > div:first-of-type {
    padding: 1rem;
  }

  .gap {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .gap-lg {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;

    @media (max-width: 480px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .grid-4 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0.5rem;

    @media (max-width: 480px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .outer {
    position: relative;

    button {
      position: absolute;
      top: 0.66rem;
      right: 0.66rem;
    }

    .fade {
      position: absolute;
      bottom: 1px;
      left: 1px;
      width: calc(100% - 2px);
      height: 64px;
      background: var(--code-fade);
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
      transition: background var(--t-color);
    }
  }

  &.render .hljs-code {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }

  .hljs-code {
    padding: 1rem;
    overflow-y: hidden !important;
    max-height: 140px;
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 14px;
    border: 1px solid transparent;

    margin-top: 0 !important;
    margin-bottom: 0 !important;
    border-radius: var(--e-border-radius);

    &.expanded {
      max-height: none;
    }

    &[contenteditable='true'] {
      box-shadow: 0 0 0 var(--e-focus-shadow-size) var(--e-primary-T20);
      border: 1px solid var(--e-primary-6);
      outline: none;
    }
  }
}
</style>
