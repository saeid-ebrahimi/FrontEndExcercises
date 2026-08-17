import { useState, useCallback, MouseEvent } from 'react';

export const useDropdown = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorEl);

    const open = useCallback((event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }, [])

    const close = useCallback(() => {
        setAnchorEl(null);
    }, []);

    return { anchorEl, isOpen, open, close };
}