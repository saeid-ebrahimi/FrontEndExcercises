import { useCallback, useState } from "react";

type TGeoLocation = {
    latitude: number;
    longitude: number;
    accuracy: number;
};

type TGeoLocationState = {
    location: TGeoLocation | null;
    loading: boolean;
    error: GeolocationPositionError | null;
};

export function useGeoLocation() {
    const [geoLocationState, setGeoLocationState] = useState<TGeoLocationState>({
        location: null,
        loading: false,
        error: null
    });

    const getGeoLocation = useCallback(() => {
        if (!navigator.geolocation) {
            return {
                location: null,
                loading: false,
                error: null,
            }
        }
        setGeoLocationState(prev => ({
            ...prev,
            loading: true,
            error: null
        }));

        navigator.geolocation.getCurrentPosition((position) => {
            setGeoLocationState({
                location: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy
                },
                loading: false,
                error: null
            })
        },
            (error) => {
                setGeoLocationState({
                    location: null,
                    loading: false,
                    error: error,
                })
            })
    }, [])

    return {
        ...geoLocationState,
        getGeoLocation
    }
};