import { Config } from '../create-elements';
export declare function useModal(config: Config): {
    close: (id?: string, keep?: boolean) => void;
    closeAll: () => void;
    stack: import("vue").Ref<{
        id: string;
        data: unknown;
        idle: boolean;
    }[]>;
    open: (id: string, data?: unknown, restore?: boolean) => void;
};
