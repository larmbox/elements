import { App, Component, Directive } from 'vue';
import { Components, DeepPartial } from './common/types';
import { _useElements } from './composables/useElements';
import {
  EVModalClose,
  EVModalCloseAll,
  EVModalOpen,
} from './directives/EVModal/EVModal';
import { EVTooltip } from './directives/EVTooltip/EVTooltip';
import version from './version';

export interface Instance {
  version: string;
  install: (app: App) => void;
}

export interface Config {
  /**
   * The default theme of Elements.
   */
  theme: string;
  /**
   * The global prefix of Elements. This applies to all components, CSS
   * variables and classes.
   */
  prefix: string;
  /**
   * Configuration of components.
   */
  components: Components;
}

export interface UserConfig extends Omit<Config, 'components'> {
  // User configuration allows overriding component configuration.
  components: Components<true>;
}

export interface CreateOptions {
  components?: {
    name: string;
    alias?: string[];
  }[];
  config?: DeepPartial<UserConfig>;
}

/**
 * Create a new instance of Elements.
 *
 * @param options User configuration.
 */
function createElements(options: CreateOptions = {}): Instance {
  const components = options.components || [];
  const targets: App[] = [];

  _useElements(options, true);

  /**
   * Register a component if it has not been registered yet.
   *
   * @param app Vue instance.
   * @param name Component name.
   * @param component Component definition.
   */
  function registerComponent(
    app: App,
    name: string,
    component: Component,
  ): void {
    if (!app.component(name)) app.component(name, component);
  }

  /**
   * Register a directive if it has not been registered yet.
   *
   * @param app Vue instance.
   * @param dir Directive definition.
   */
  function registerDirective(
    app: App,
    name: string,
    directive: Directive,
  ): void {
    if (!app.directive(name)) app.directive(name, directive);
  }

  /**
   * Install Elements into Vue.
   * @see https://v3.vuejs.org/guide/plugins.html#installing-plugins-in-a-plugin
   *
   * @param app Vue instance.
   */
  function install(app: App): void {
    if (targets.includes(app)) return; // Prevent multiple installs.
    targets.push(app);

    // Register directives. All directives are always registered.
    // TODO: Allow enabling only a subset of directives.
    registerDirective(app, 'tooltip', EVTooltip);
    registerDirective(app, 'modal-close', EVModalClose);
    registerDirective(app, 'modal-close-all', EVModalCloseAll);
    registerDirective(app, 'modal-open', EVModalOpen);

    // Register the components that are enabled in the user configuration.
    components.forEach((component) => {
      const { name } = component; // Extract the component name.
      registerComponent(app, name, component);
    });
  }

  return {
    version,
    install,
  };
}

export default createElements;
