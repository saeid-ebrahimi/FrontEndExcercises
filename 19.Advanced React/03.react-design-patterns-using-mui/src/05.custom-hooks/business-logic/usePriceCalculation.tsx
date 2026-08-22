import { useMemo } from "react";

type TPriceCalculationInput = {
    pricePerNight: number;
    nights: number;
    guests: number;
    cleaningFee?: number;
    serviceFeePercentage?: number;
    discountPercentage?: number;
}

type TPriceBreakdown = {
    accommodation: number;
    cleaningFee: number;
    serviceFee: number;
    discount: number;
    subtotal: number;
    total: number;
};

export function usePriceCalculation({
    pricePerNight,
    nights,
    guests = 1,
    cleaningFee = 0,
    serviceFeePercentage = 0,
    discountPercentage = 0,
}: TPriceCalculationInput): TPriceBreakdown {
    return useMemo(() => {
        const accommodation = pricePerNight * nights * guests;
        const serviceFee = accommodation * (serviceFeePercentage / 100);
        const subtotal = accommodation + cleaningFee + serviceFee;

        const discount = subtotal * (discountPercentage / 100);

        const total = Math.max(0, subtotal - discount);

        return {
            accommodation,
            cleaningFee,
            serviceFee,
            discount,
            subtotal,
            total
        }
    }, [pricePerNight,
        nights,
        guests,
        cleaningFee,
        serviceFeePercentage,
        discountPercentage,]);
}