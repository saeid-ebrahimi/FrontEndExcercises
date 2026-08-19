import { useMemo, useState } from "react";

type TUsePaginationOptions = {
    totalItems: number;
    pageSize?: number;
    initialPage?: number;
}

export function usePagination({
    totalItems,
    pageSize = 20,
    initialPage = 1
}: TUsePaginationOptions) {
    const [page, setPage] = useState(initialPage);
    const totalPages = Math.ceil(totalItems / pageSize);

    const hasNextPage = page < totalPages;
    const hasPreviousPage = page > 1;

    const nextPage = () => {
        if (hasNextPage) {
            setPage(currentPage => (currentPage + 1));
        }
    };

    const previousPage = () => {
        if (hasPreviousPage) {
            setPage((currentPage) => currentPage - 1)
        }
    };

    const goToPage = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setPage(pageNumber);
        }
    };

    const reset = setPage(initialPage);

    const offset = useMemo(() => (page - 1) * pageSize, [page, pageSize])

    return {
        page,
        pageSize,
        totalPages,
        offset,
        hasNextPage,
        hasPreviousPage,
        nextPage,
        previousPage,
        goToPage,
        reset
    }
}
