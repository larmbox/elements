import { createPalette } from '../../common/utility/palette';
import { Config } from '../../create-elements';
export interface Theme {
    name: string;
    variables: Record<string, string | number>;
}
export declare const useTheme: (config: Config) => {
    theme: import("vue").Ref<string>;
    providers: import("vue").Ref<{
        id: string;
        content: string;
    }[]>;
    createPalette: typeof createPalette;
    destroy: (id?: string) => void;
    registerComponentStyle: (name: string, variables: Theme['variables']) => void;
    registerTheme: ({ name, variables }: Theme) => void;
    setTheme: (name: string) => void;
};
