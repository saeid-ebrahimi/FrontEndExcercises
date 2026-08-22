import { useCallback, useState } from "react";

type BookingStatus =
    | "idle"
    | "loading"
    | "success"
    | "error";

type BookingData = {
    accommodationId: string;
    checkIn: Date | null;
    checkOut: Date | null;
    guests: number;
};

type BookingResult = {
    bookingId: string;
};

export function useBooking() {
    const [status, setStatus] =
        useState<BookingStatus>("idle");

    const [error, setError] =
        useState<Error | null>(null);

    const [booking, setBooking] =
        useState<BookingResult | null>(null);

    const validateBooking = useCallback(
        (data: BookingData) => {
            if (!data.checkIn) {
                throw new Error("Check-in date is required");
            }

            if (!data.checkOut) {
                throw new Error("Check-out date is required");
            }

            if (data.checkOut <= data.checkIn) {
                throw new Error(
                    "Check-out must be after check-in"
                );
            }

            if (data.guests < 1) {
                throw new Error(
                    "At least one guest is required"
                );
            }
        },
        []
    );

    const book = useCallback(
        async (data: BookingData) => {
            try {
                setStatus("loading");
                setError(null);

                validateBooking(data);

                // Replace this with your API request.
                const response = await fetch("/api/bookings", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    throw new Error(
                        "Failed to create booking"
                    );
                }

                const result: BookingResult =
                    await response.json();

                setBooking(result);
                setStatus("success");

                return result;
            } catch (error) {
                const normalizedError =
                    error instanceof Error
                        ? error
                        : new Error("Booking failed");

                setError(normalizedError);
                setStatus("error");

                throw normalizedError;
            }
        },
        [validateBooking]
    );

    const reset = useCallback(() => {
        setStatus("idle");
        setError(null);
        setBooking(null);
    }, []);

    return {
        book,
        reset,
        booking,
        error,
        status,
        isLoading: status === "loading",
        isSuccess: status === "success",
        isError: status === "error",
    };
}