import { useCallback, useEffect, useState } from "react";

type TUserTimerOptions = {
    initialTime: number;
    autoStart?: boolean;
    interval?: number;
}

export function useTimer({
    initialTime,
    autoStart = false,
    interval = 1000,
}: TUserTimerOptions) {
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(autoStart);

    const start = useCallback(() => {
        setIsRunning(true);
    }, []);

    const pause = useCallback(() => {
        setIsRunning(false);
    }, []);

    const reset = useCallback(() => {
        setTime(initialTime);
        setIsRunning(false);
    }, [initialTime]);

    useEffect(() => {
        if (!isRunning || time < 0) return;
        const timerId = window.setInterval(() => {
            setTime((prev) => {
                if (prev <= 1) {
                    setIsRunning(false)
                    return 0
                }
                return prev - 1;
            })
        }, interval)

        return () => {
            window.clearInterval(timerId)
        }
    }, [isRunning, time, interval]);

    return {
        time,
        isRunning,
        isFinished: time === 0,
        start,
        pause,
        reset,
    };
}