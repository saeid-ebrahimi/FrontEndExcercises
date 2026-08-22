import { useCallback, useState } from "react";

type CheckoutStatus =
    | "idle"
    | "processing"
    | "success"
    | "error";

type CheckoutData = {
    bookingId: string;
    customerId: string;
    paymentMethod: string;
};

type CheckoutResult = {
    paymentId: string;
    bookingId: string;
};

export function useCheckout() {
    const [status, setStatus] =
        useState<CheckoutStatus>("idle");

    const [error, setError] =
        useState<Error | null>(null);

    const [result, setResult] =
        useState<CheckoutResult | null>(null);

    const checkout = useCallback(
        async (data: CheckoutData) => {
            try {
                setStatus("processing");
                setError(null);

                if (!data.bookingId) {
                    throw new Error(
                        "Booking ID is required"
                    );
                }

                if (!data.customerId) {
                    throw new Error(
                        "Customer ID is required"
                    );
                }

                if (!data.paymentMethod) {
                    throw new Error(
                        "Payment method is required"
                    );
                }

                // Replace with your payment API.
                const response = await fetch(
                    "/api/checkout",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        "Checkout failed"
                    );
                }

                const checkoutResult: CheckoutResult =
                    await response.json();

                setResult(checkoutResult);
                setStatus("success");

                return checkoutResult;
            } catch (error) {
                const normalizedError =
                    error instanceof Error
                        ? error
                        : new Error("Checkout failed");

                setError(normalizedError);
                setStatus("error");

                throw normalizedError;
            }
        },
        []
    );

    const reset = useCallback(() => {
        setStatus("idle");
        setError(null);
        setResult(null);
    }, []);

    return {
        checkout,
        reset,
        result,
        error,
        status,

        isProcessing:
            status === "processing",

        isSuccess:
            status === "success",

        isError:
            status === "error",
    };
}