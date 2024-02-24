import { App } from 'vue';
import { Components, DeepPartial } from './common/types';
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
    /**
     * Custom function to generate unique IDs for elements.
     * Set to `false` to disable automatic ID generation.
     * If `true`, Elements will generate random IDs. Defaults to `true`.
     */
    generateId?: () => string;
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
/**
 * Create a new instance of Elements.
 *
 * @param options User configuration.
 */
declare function createElements(options?: CreateOptions): Instance;
export default createElements;
