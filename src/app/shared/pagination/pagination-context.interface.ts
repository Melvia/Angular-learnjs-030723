export interface PaginationContextInterface<T> {
    $implicit: T;
    appPaginationOf: T[];
    index: number;
    next: () => void;
    back: () => void;
}
