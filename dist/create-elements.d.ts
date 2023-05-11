import { App } from 'vue';
import { Components, DeepPartial } from './common/types';
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
declare function createElements(options?: CreateOptions): Instance;
export default createElements;
