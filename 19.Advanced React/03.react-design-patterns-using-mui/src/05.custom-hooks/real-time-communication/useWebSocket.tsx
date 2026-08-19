import { useCallback, useEffect, useRef, useState } from "react";

type TWebSocketStatus = "CONNECTING"
    | "OPEN"
    | "CLOSING"
    | "CLOSED";

export function useWebSocket<T = unknown>(url: string) {
    const socketRef = useRef<WebSocket | null>(null);

    const [status, setStatus] = useState<TWebSocketStatus>("CONNECTING");

    const [lastMessage, setLastMessage] = useState<T | null>(null);

    const [error, setError] = useState<Event | null>(null);

    useEffect(() => {
        const socket = new WebSocket(url);
        socketRef.current = socket;

        socket.onopen = () => {
            setStatus("OPEN")
        };

        socket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data) as T;
                setLastMessage(data);
            } catch {
                setLastMessage(event.data as T)
            }
        };

        socket.onerror = (event) => {
            setError(event)
        }

        socket.onclose = () => {
            setStatus("CLOSED");
        }
        return () => {
            socket.close();
            socketRef.current = null
        }
    }, [url])

    const sendMessage = useCallback((message: T) => {
        const socket = socketRef.current;

        if (!socket || socket.readyState !== WebSocket.OPEN) {
            return;
        }

        socket.send(typeof message === "string" ? message : JSON.stringify(message))
    }, [])

    const close = useCallback(() => {
        socketRef.current?.close();
    }, []);

    return {
        status,
        lastMessage,
        error,
        sendMessage,
        close
    }
}