import { useEffect } from "react";

type TEventMap = WindowEventMap & DocumentEventMap;

export function useEventListener<K extends keyof TEventMap>(
    eventName: K,
    handler: (event: TEventMap[K]) => void,
    element: Window | Document | HTMLElement | null = window
) {
    useEffect(() => {
        if (!element) {
            return;
        }

        element.addEventListener(eventName, handler as EventListener);

        return () => {
            element.removeEventListener(eventName, handler as EventListener)
        }

    }, [eventName, handler, element])
}