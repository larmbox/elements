import { Config } from '../../create-elements';
export declare const useModal: (_config?: Config) => {
    close: (id?: string, keep?: boolean) => void;
    closeAll: () => void;
    open: (id: string, data?: any, restore?: boolean) => void;
};
