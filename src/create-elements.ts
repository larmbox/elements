import { App, Component, Directive } from 'vue';
import { ComponentName } from './common/enums';
import { Components, DeepPartial } from './common/types';
import { EThemeProvider } from './components';
import { _useElements } from './composables/use-elements/use-elements';
import { CloseModalDirective, OpenModalDirective } from './directives/modal';
import { TooltipDirective } from './directives/tooltip';
import version from './version';

export interface Instance {
  version: string;
  install: (app: App) => void;
}

export interface Config {
  /**
   *
   */
  theme: string;
  prefix: string;
  components: Components;
}

export interface UserConfig extends Omit<Config, 'components'> {
  components: Components<true>;
}

export interface CreateOptions {
  components?: {
    name: string;
    alias?: string[];
  }[];
  config?: DeepPartial<UserConfig>;
}

function createElements(options: CreateOptions = {}): Instance {
  const components = options.components || [];
  const installTargets: App[] = [];

  _useElements(options, true);

  function registerComponent(
    app: App,
    name: string,
    component: Component
  ): void {
    const registered = app.component(name);
    if (!registered) {
      app.component(name, component);
    }
  }

  function registerDirective(
    app: App,
    dir: { name: string; directive: Directive }
  ): void {
    const registered = app.component(dir.name);
    if (!registered) {
      app.directive(dir.name, dir.directive);
    }
  }

  function install(app: App): void {
    if (installTargets.includes(app)) return;
    installTargets.push(app);

    registerComponent(app, ComponentName.EThemeProvider, EThemeProvider);
    registerDirective(app, TooltipDirective());
    registerDirective(app, OpenModalDirective());
    registerDirective(app, CloseModalDirective());

    components.forEach((component) => {
      const { name } = component;
      registerComponent(app, name, component);
    });
  }
  return {
    version,
    install,
  };
}

export default createElements;
