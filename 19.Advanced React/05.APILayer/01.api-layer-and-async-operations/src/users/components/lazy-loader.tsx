import { useEffect, useState, type ReactNode } from 'react'

export interface ILazyLoaderProps {
    show?: boolean,
    delay?: number,
    default?: ReactNode,
}
export const LazyLoader = ({ show = false, delay = 0, default: defaultContent = null }: ILazyLoaderProps) => {
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        if (!show || delay <= 0) return;
        const timeout = setTimeout(() => setShowLoader(true), delay)

        return () => {
            clearTimeout(timeout)
        }
    }, [show, delay]);

    if (!show) return defaultContent;
    if (delay <= 0) return "Loading";

    return showLoader ? "Loading" : defaultContent
}

