import { useRef, useState } from 'react'

export function Timer() {
    const [seconds, setSeconds] = useState(0);
    const timerIdRef = useRef<number | null>(null);

    const startTimer = () => {
        if (timerIdRef.current == null) {
            timerIdRef.current = setInterval(() => {
                setSeconds((prev) => prev + 1)
            }, 997);
        };
    };

    const stopTimer = () => {
        if (timerIdRef.current == null) return;
        clearInterval(timerIdRef.current);
        timerIdRef.current = null;
    };

    return (
        <div>
            <p>Time elapsed: {seconds}s</p>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    )
}
