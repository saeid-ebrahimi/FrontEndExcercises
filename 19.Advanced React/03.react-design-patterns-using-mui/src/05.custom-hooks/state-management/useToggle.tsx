import { useState, useCallback } from 'react';

export const useToggle = (initialValue: boolean = false) => {
    const [value, setValue] = useState(initialValue);

    // useCallback ensures the function reference doesn't change on every render
    const toggle = useCallback(() => {
        setValue((prev) => !prev);
    }, []);

    // Returning a tuple (array) mimics the standard useState API
    return [value, toggle, setValue] as const;
};