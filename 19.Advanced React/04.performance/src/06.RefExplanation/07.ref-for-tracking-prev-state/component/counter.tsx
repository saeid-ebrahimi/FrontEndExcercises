import { useEffect, useRef, useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef<number>(0);

    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);

    return (
        <div>
            <p>Current: {count} | Previous: {prevCountRef.current}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        </div>
    )
}