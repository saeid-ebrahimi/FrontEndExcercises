import { useEffect, useState } from "react";

type TScrollPosition = {
    x: number;
    y: number;
}

export function useScroll(): TScrollPosition {
    const [position, setPosition] = useState<TScrollPosition>({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const handleScroll = () => {
            setPosition({
                x: window.scrollX,
                y: window.scrollY,
            });
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return position;
}