import { useState, useEffect, useRef } from 'react';

export function AnalyticsTracker({ productId }: { productId: string }) {
    const [addedToCart, setAddedToCart] = useState(false);

    // --- INSTANCE FLAGS & METRICS (Silent Storage) ---
    const clickCountRef = useRef(0);         // Tracks total button interactions
    const startTimeRef = useRef(Date.now());  // Tracks session start time
    const hasSentMetricsRef = useRef(false);  // Flag to ensure single beacon payload

    const handleInteraction = () => {
        // Increment count silently (No UI re-render triggered)
        clickCountRef.current += 1;

        // Trigger UI state change ONLY when relevant to user display
        if (!addedToCart) {
            setAddedToCart(true);
        }
    };

    useEffect(() => {
        // Flush analytics payload when component unmounts (e.g., user navigates away)
        return () => {
            if (hasSentMetricsRef.current) return;

            const timeSpentInSeconds = Math.round((Date.now() - startTimeRef.current) / 1000);

            const payload = JSON.stringify({
                productId,
                totalClicks: clickCountRef.current,
                timeSpentInSeconds,
            });

            // navigator.sendBeacon sends data reliably even as the page closes
            navigator.sendBeacon('/api/analytics', payload);
            hasSentMetricsRef.current = true;
        };
    }, [productId]);

    return (
        <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
            <h3>Product Details (ID: {productId})</h3>

            <button onClick={handleInteraction}>
                {addedToCart ? 'Add More to Cart' : 'Add to Cart'}
            </button>

            {addedToCart && <p>Item added to cart!</p>}
        </div>
    );
}