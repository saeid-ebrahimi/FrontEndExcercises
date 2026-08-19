import { useState } from "react";

type TFilterValue = string | number | boolean | null;

type TFilters = Record<string, TFilterValue>;

export function useFilters<T extends TFilters>(initialFilters: T) {
    const [filters, setFilters] = useState<T>(initialFilters);

    const setFilter = <K extends keyof T>(
        key: K,
        value: T[K],
    ) => {
        setFilters((currentFilters) => ({
            ...currentFilters,
            [key]: value,
        }))
    }

    const removeFilter = <K extends keyof T>(key: K) => {
        setFilters((currentFilters) => ({
            ...currentFilters,
            [key]: null,
        }));
    };

    const clearFilters = () => {
        setFilters(initialFilters);
    };

    const hasActiveFilters = Object.values(filters).some(
        (value) => value !== null && value !== "" && value !== false
    );

    return {
        filters,
        setFilter,
        removeFilter,
        clearFilters,
        hasActiveFilters,
    }
}