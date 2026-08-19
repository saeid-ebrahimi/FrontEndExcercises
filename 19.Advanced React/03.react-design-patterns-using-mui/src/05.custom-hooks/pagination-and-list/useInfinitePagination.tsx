import { useCallback, useState } from "react";

type TPaginationResponse<T> = {
    items: T[];
    totalItems: number;
};

type TUseInfinitePaginationOptions<T> = {
    pageSize?: number;
    initialPage?: number;
    fetchPage: (page: number, pageSize: number) => Promise<TPaginationResponse<T>>
};

export function useInfinitePagination<T>(
    {
        pageSize = 20,
        initialPage = 1,
        fetchPage,
    }: TUseInfinitePaginationOptions<T>
) {
    const [items, setItems] = useState<T[]>([]);
    const [page, setPage] = useState(initialPage - 1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [totalItems, setTotalItems] = useState(0);

    const hasMore = items.length < totalItems;

    const loadNextPage = useCallback(async () => {
        if (loading || !hasMore) {
            return;
        }

        const nextPage = page + 1;
        try {
            setLoading(true);
            setError(null);

            const response = await fetchPage(nextPage, pageSize);

            setItems((currentItems) => [...currentItems, ...response.items]);
            setTotalItems(response.totalItems);
            setPage(nextPage);
        } catch (error) {
            setError(
                error instanceof Error ? error : new Error("Failed to load data")
            )
        }
    }, [fetchPage, hasMore, loading, page, pageSize]);

    const reset = () => {
        setItems([]);
        setPage(initialPage - 1);
        setTotalItems(0);
        setError(null)
    };

    return {
        items,
        page,
        loading,
        error,
        totalItems,
        hasMore,
        loadNextPage,
        reset
    }
}