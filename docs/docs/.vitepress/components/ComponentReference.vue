<template>
  <div v-if="meta" class="meta">
    <h3 id="props">
      <a class="header-anchor" href="#props" aria-hidden="true" />
      Props
    </h3>

    <p>
      All props can be
      <a href="/elements/getting-started/installation#configuration">
        globally configured</a
      >.
    </p>

    <div v-if="props.length" class="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="prop in props"
            :key="prop.name"
            :id="`prop-${kebab(prop.name)}`"
          >
            <td>
              <span v-text="kebab(prop.name)" />
              <span
                v-if="'required' in prop && prop.required"
                class="required-color"
                v-text="'*'"
              />
            </td>
            <td v-if="prop.type">
              <div v-for="(type, i) in prop.type" :key="i">
                <span class="type" :class="type" v-html="html(type)" />
                <span v-if="i + 1 !== prop.type.length" v-text="', '" />
              </div>
            </td>
            <td>
              <ETooltip
                v-if="
                  ['array', 'object'].includes(typeof (prop as any).default)
                "
              >
                <template #reference>
                  <div tabindex="0" class="description">
                    {{ typeof (prop as any).default }}
                  </div>
                </template>
                <template #content>
                  <Snippet
                    language="json"
                    :code="JSON.stringify((prop as any).default, null, 2)"
                  />
                </template>
              </ETooltip>
              <span v-else>
                {{ (prop as any).default }}
              </span>
            </td>
            <td>
              <span
                v-if="prop.since"
                class="since"
                v-text="`${prop.since} +`"
              />
              <span
                v-if="prop.deprecated"
                class="deprecated"
                v-text="'Deprecated'"
              />
              <span v-if="prop.nuxt" class="nuxt" v-text="'Nuxt'" />
              <span v-html="html(prop.description)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      v-for="({ id, name, description, props, literal }, i) in nested"
      :key="i"
    >
      <h4 :id="id">
        <a class="header-anchor" :href="`#${id}`" aria-hidden="true" />
        {{ name }}
      </h4>
      <p v-text="description" />
      <div class="table">
        <table>
          <thead>
            <tr>
              <th v-if="literal">
                Value (<span class="type" :class="literal" v-text="literal" />)
              </th>
              <th v-else>Name</th>
              <th v-if="!literal">Type</th>
              <th v-if="!literal">Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="prop in extract(props)"
              :key="prop.name"
              :id="`prop-${kebab(name.toLowerCase())}-${kebab(prop.name)}`"
            >
              <td>
                <span v-text="kebab(prop.name)" />
                <span
                  v-if="'required' in prop && prop.required"
                  class="required-color"
                  v-text="'*'"
                />
              </td>
              <td v-if="!literal && prop.type">
                <div v-for="(type, i) in prop.type" :key="i">
                  <span class="type" :class="type" v-html="html(type)" />
                  <span v-if="i + 1 !== prop.type.length" v-text="', '" />
                </div>
              </td>
              <td v-if="!literal" v-text="(prop as any).default" />
              <td>
                <span
                  v-if="prop.since"
                  class="since"
                  v-text="`${prop.since} +`"
                />
                <span
                  v-if="prop.deprecated"
                  class="deprecated"
                  v-text="'Deprecated'"
                />
                <span v-if="prop.nuxt" class="nuxt" v-text="'Nuxt'" />
                <span v-html="html(prop.description || '')" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <p v-if="required" class="required">
      <span class="required-color">*</span> Required
    </p>

    <h3 id="slots">
      <a class="header-anchor" href="#slots" aria-hidden="true" />
      Slots
    </h3>

    <p v-if="slots.length">
      The following slots are available for this component:
    </p>
    <p v-else>This component does not have any slots.</p>

    <div v-if="slots.length" class="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Properties</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="slot in slots"
            :key="slot.name"
            :id="`slot-${kebab(slot.name)}`"
          >
            <td v-text="slot.name" />

            <td v-if="slot.properties">
              <span
                v-for="(property, i) in extract(slot.properties)"
                class="property"
              >
                <ETooltip :disabled="!property.description">
                  <template #reference="{ id }">
                    <div
                      :id="id"
                      :class="{ description: property.description }"
                    >
                      <span v-text="`${property.name}: `" />
                      <span
                        v-text="property.type"
                        :class="property.type"
                        class="type"
                      />
                    </div>
                  </template>
                  <template #content>
                    <div
                      class="meta-tooltip"
                      v-html="html(property.description || '')"
                    />
                  </template>
                </ETooltip>
                <span v-if="i + 1 !== extract(slot.properties).length">, </span>
              </span>
            </td>
            <td v-else />

            <td>
              <span
                v-if="slot.since"
                class="since"
                v-text="`${slot.since} +`"
              />
              <span
                v-if="slot.deprecated"
                class="deprecated"
                v-text="'Deprecated'"
              />
              <span v-html="html(slot.description)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="events">
      <a class="header-anchor" href="#events" aria-hidden="true" />
      Events
    </h3>

    <p v-if="emits.length">
      This component emits the following events. Native events not listed below
      are inherited.
    </p>
    <p v-else>
      This component does not emit any custom events. The component inherits all
      native event listeners.
    </p>

    <div v-if="emits.length" class="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Arguments</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="emit in emits"
            :key="emit.name"
            :id="`slot-${kebab(emit.name)}`"
          >
            <td v-text="emit.name" />

            <td v-if="emit.properties">
              <span
                v-for="(argument, i) in extract(emit.properties)"
                class="property"
              >
                <ETooltip :disabled="!argument.description">
                  <template #reference="{ id }">
                    <div
                      :id="id"
                      :class="{ description: argument.description }"
                    >
                      <span v-text="`${argument.name}: `" />
                      <span
                        v-text="argument.type"
                        :class="argument.type"
                        class="type"
                      />
                    </div>
                  </template>
                  <template #content>
                    <div
                      class="meta-tooltip"
                      v-html="html(argument.description || '')"
                    />
                  </template>
                </ETooltip>
                <span v-if="i + 1 !== extract(emit.properties).length">, </span>
              </span>
            </td>
            <td v-else />

            <td>
              <span
                v-if="emit.since"
                class="since"
                v-text="`${emit.since} +`"
              />
              <span
                v-if="emit.deprecated"
                class="deprecated"
                v-text="'Deprecated'"
              />
              <span v-html="html(emit.description)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="css-variables">
      <a class="header-anchor" href="#css-variables" aria-hidden="true" />
      CSS Variables
    </h3>

    <p v-if="variables.length">
      The following CSS variables are available for this component. Note that
      the CSS variables are prefixed with the configured component name and the
      global prefix.
    </p>

    <p v-else>This component does not have any CSS variables.</p>

    <div v-if="variables.length" class="table">
      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Default Value</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="[key, value] in variables"
            :key="key"
            :id="`css-variable-${key}`"
          >
            <td v-text="key" />
            <td v-text="value" />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import showdown from 'showdown';
import { computed, defineComponent, onMounted, ref } from 'vue';
import {
  ComponentConfiguration,
  Documentation,
  PropDocumentation,
} from '../../../../src/common/types';
const converter = new showdown.Converter();

export default defineComponent({
  props: {
    src: {
      type: String,
    },
  },
  setup({ src }) {
    const meta = ref<Documentation<ComponentConfiguration> | null>(null);

    onMounted(async () => {
      meta.value = (
        await import(`../../../../src/components/${src}/docs.ts`)
      ).documentation;
    });

    /**
     * Converts a markdown string to HTML.
     *
     * @param markdown The markdown string to convert.
     */
    const html = (markdown: string) => {
      return converter.makeHtml(markdown);
    };

    /**
     * Converts a string to kebab case.
     *
     * @param str The string to convert.
     */
    const kebab = (str: string) =>
      str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

    /**
     * The nested props of the component.
     */
    const nested = computed(
      (): Required<
        PropDocumentation<ComponentConfiguration['props'][number]>
      >['nested'][] => {
        return props.value
          .filter(({ nested }) => nested)
          .map(({ nested }) => nested!);
      },
    );

    /**
     * Is true if the component has required props or required nested props.
     */
    const required = computed(() => {
      if (props.value) {
        return (
          props.value.filter((prop) => 'required' in prop && prop.required)
            .length > 0 ||
          nested.value.filter(
            (nest) =>
              nest &&
              extract(nest.props).some(
                (prop) => 'required' in prop && prop.required,
              ),
          ).length > 0
        );
      } else {
        return [];
      }
    });

    function extract<T extends object>(
      input: Record<string, T>,
    ): (T & { name: string; type: string[] })[] {
      return Object.entries(input)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, value]) => {
          return {
            ...value,
            name: key,
            type: ('type' in value ? value.type : []) as string[],
          };
        });
    }

    const emits = computed(() =>
      meta.value?.emits ? extract(meta.value.emits) : [],
    );

    const props = computed(() =>
      meta.value?.props ? extract(meta.value.props) : [],
    );

    const slots = computed(() =>
      meta.value?.slots ? extract(meta.value.slots) : [],
    );

    const variables = computed(() => {
      return Object.entries(meta.value?.style || {}).sort(([a], [b]) =>
        a.localeCompare(b),
      );
    });

    return {
      meta,
      props,
      emits,
      slots,
      nested,
      required,
      variables,
      kebab,
      html,
      extract,
    };
  },
});
</script>

<style lang="scss">
.meta-tooltip {
  // Must be outside of .meta, as it is teleported to the body.
  font-size: 14px !important;
  line-height: 21px !important;
}

.meta {
  h4 {
    margin: 32px 0 0;
  }

  .type {
    font-weight: 500;
    color: var(--vp-c-red-1);

    a {
      color: inherit;
    }

    p {
      display: inline;
    }

    &.string {
      color: var(--vp-c-green-1);
    }

    &.number {
      color: var(--vp-c-indigo-1);
    }

    &.boolean,
    &.false,
    &.true {
      color: var(--vp-c-yellow-1);
    }

    &.null {
      color: var(--vp-c-gray-1);
    }
  }

  .table {
    overflow: auto;
    border-radius: var(--border-radius);
    border: 1px solid var(--vp-c-divider);

    table {
      width: 100%;
      display: table;
      border-collapse: collapse !important;
      margin: 0;
      font-size: 14px;

      th,
      td {
        padding: 0.5rem 0.8rem;
        border: none;
        font-size: 14px;
        line-height: 24px !important;

        p {
          margin: 0;
        }
      }

      thead tr {
        border-top: none;
      }
    }
  }

  .description {
    text-decoration: underline;
    text-decoration-style: dashed;
    cursor: help;
  }

  .required-color {
    color: var(--vp-c-red-1);
    margin-left: 0.1rem;
  }

  .required {
    margin-top: 0.5rem;
    font-size: 14px;

    .required-color {
      margin-left: 0;
    }
  }

  .since,
  .deprecated,
  .nuxt {
    display: inline-block;
    margin-right: 4px;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    border-radius: 2px;
    padding: 3px 6px;
    line-height: 1;

    &.since {
      background-color: var(--vp-c-indigo-2);
    }

    &.deprecated {
      background-color: var(--vp-c-red-2);
    }

    &.nuxt {
      background-color: var(--vp-c-green-2);
    }
  }
}
</style>
