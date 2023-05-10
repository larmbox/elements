<template>
  <div v-if="meta" class="component-meta">
    <h3 id="props">
      <a class="header-anchor" href="#props" aria-hidden="true">#</a>
      Props
    </h3>

    <p>
      All props can be
      <a href="/elements/configuration/global-configuration"
        >globally configured</a
      >.
    </p>

    <table width="100%">
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
          v-for="(prop, i) in meta.props.sort((a, b) =>
            a.name.localeCompare(b.name)
          )"
          :key="`prop-${i}`"
          :id="`prop-${prop.name}`"
        >
          <td>
            <span v-text="camelToKebabCase(prop.name)" style="display: block" />
            <span v-if="prop.since" class="since">v{{ prop.since }}+</span>
            <span v-if="prop.deprecated" class="deprecated">Deprecated</span>
            <span v-if="prop.nuxt" class="nuxt">Nuxt</span>
          </td>
          <td>
            <span
              style="font-size: 14px"
              v-for="t in prop.type.split('|')"
              :key="t"
              class="type"
              :class="t"
              v-text="t"
            />
          </td>
          <td style="font-size: 14px" v-text="prop.default" />
          <td v-html="toHTML(prop.description)" />
        </tr>
      </tbody>
    </table>

    <h3 id="slots">
      <a class="header-anchor" href="#slots" aria-hidden="true">#</a>
      Slots
    </h3>

    <p v-if="!meta.slots.length">This component does not have any slots.</p>
    <table v-else width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Properties</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(slot, i) in meta.slots.sort((a, b) =>
            a.name.localeCompare(b.name)
          )"
          :key="`prop-${i}`"
          :id="`prop-${slot.name}`"
        >
          <td>
            <span v-text="slot.name" style="display: block" />
            <span v-if="slot.since" class="since">v{{ slot.since }}+</span>
            <span v-if="slot.deprecated" class="deprecated">Deprecated</span>
            <span v-if="slot.nuxt" class="nuxt">Nuxt</span>
          </td>
          <td>
            <span
              v-for="(property, i) in slot.properties"
              class="property"
              :class="{ description: !!property.description }"
              style="margin-left: 8px"
            >
              <ETooltip interactive>
                <template #trigger="{ id }">
                  <div
                    :id="id"
                    :class="{ description: !!property.description }"
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
                  <div v-html="toHTML(property.description)" />
                </template>
              </ETooltip>
              <span v-if="i !== slot.properties.length - 1">,</span>
            </span>
          </td>
          <td v-html="toHTML(slot.description)" />
        </tr>
      </tbody>
    </table>

    <h3 id="events">
      <a class="header-anchor" href="#events" aria-hidden="true">#</a>
      Events
    </h3>

    <p v-if="!meta.events.length">
      This component does not emit any custom events, but the component's root
      element will inherit passed listeners.
    </p>
    <p v-else>
      The component's root element will inherit all passed native listeners not
      listed below.
    </p>
    <table v-if="meta.events.length" width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Arguments</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(event, i) in meta.events.sort((a, b) =>
            a.name.localeCompare(b.name)
          )"
          :key="`prop-${i}`"
          :id="`prop-${event.name}`"
        >
          <td>
            <span v-text="event.name" style="display: block" />
            <span v-if="event.since" class="since">v{{ event.since }}+</span>
            <span v-if="event.deprecated" class="deprecated">Deprecated</span>
          </td>
          <td>
            <span v-if="event.arguments?.length">(</span>
            <br />
            <span
              v-for="(argument, i) in event.arguments"
              v-tooltip="argument.description"
              class="argument"
              :class="{ description: !!argument.description }"
              style="margin-left: 8px"
            >
              <span v-text="`${argument.name}: `" />
              <span
                v-text="argument.type"
                :class="argument.type"
                class="type"
              />
              <span v-if="i !== event.arguments.length - 1">,</span>
              <br />
            </span>
            <span v-if="event.arguments?.length">)</span>
          </td>
          <td v-html="toHTML(event.description)" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import showdown from 'showdown';
import { defineComponent, onMounted, ref } from 'vue';
import { ComponentDocs, GenericComponent } from '~/common/types';
import { camelToKebabCase } from '~/common/utility';
const converter = new showdown.Converter();

export default defineComponent({
  props: {
    src: {
      type: String,
    },
  },
  setup(props, contxt) {
    const meta = ref<ComponentDocs<GenericComponent> | null>(null);

    onMounted(async () => {
      meta.value = (
        await import(
          /* @vite-ignore */ `../../../../src/components/${props.src}/docs.ts`
        )
      ).default;
    });

    const toHTML = (markdown: string) => {
      return converter.makeHtml(markdown);
    };

    return { meta, camelToKebabCase, toHTML };
  },
});
</script>

<style lang="scss">
.component-meta {
  table {
    width: 100%;
    display: table;
    th {
      text-align: left;
    }
  }
  .since,
  .deprecated,
  .nuxt {
    font-size: 12px;
    color: #fff;
    border-radius: 6px;
    padding: 2px 4px;
    margin-top: 4px;
    display: inline-block;
    &.since {
      background-color: #0969da;
    }
    &.deprecated {
      background-color: #a80f2c;
    }
    &.nuxt {
      background-color: #05c677;
    }
  }

  h3 {
    margin-top: calc(0.5rem - var(--navbar-height));
    padding-top: calc(1rem + var(--navbar-height));
    margin-bottom: 0;
  }

  .type {
    color: var(--code-tag);
  }
  .type.string {
    color: var(--code-tag-string);
  }
  .type.boolean {
    color: var(--code-literal);
  }
  .type.number {
    color: var(--code-tag-number);
  }

  .description {
    text-decoration: underline;
    text-decoration-style: dashed;
  }

  .property,
  .argument {
    margin: 2px 0;
    display: block;
    white-space: nowrap;
  }

  th,
  td {
    p {
      margin: 0;
    }
    padding: 0.5rem 0.8rem;
  }
}

.tooltip-content p {
  margin: 0;
}
</style>
