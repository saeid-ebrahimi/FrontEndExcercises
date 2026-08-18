import { useEffect, useState } from "react";

type WindowSize = {
    width: number;
    height: number;
};

export function useWindowSize(): WindowSize {
    const [size, setSize] = useState<WindowSize>({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, []);

    return size;
}