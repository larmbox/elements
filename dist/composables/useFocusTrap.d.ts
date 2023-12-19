export declare function useFocusTrap(): {
    attach: (id: string, returnElement?: {
        focus?(options?: FocusOptions): void;
    } | undefined) => void;
    release: () => void;
};
