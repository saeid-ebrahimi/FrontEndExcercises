import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, CircularProgress } from '@mui/material';
import { UserInfo } from '../logging/user-info';

function withDataFetching<P extends object, T extends Partial<P>>(
    WrappedComponent: React.ComponentType<P> | React.FC<P>,
    resourceUrl: string,
    propName: keyof T
) {
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    return function DataFetchingComponent(props: Omit<P, keyof T>) {
        const [data, setData] = useState<T | null>(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState<Error | null>(null);

        useEffect(() => {
            const controller = new AbortController();

            const fetchData = async () => {
                try {
                    setLoading(true);
                    const response = await axios.get<T>(`/api/${resourceUrl}`, { signal: controller.signal });
                    setData(response.data);
                } catch (error) {
                    console.error(`Error fetching data for ${componentName}:`, error);
                    if (!axios.isCancel(error)) {
                        setError(error as Error);
                    }
                } finally {
                    setLoading(false);
                }
            };

            fetchData();

            return () => {
                controller.abort();
            };

        }, []);


        if (loading) {
            return (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '16px' }}>
                    <CircularProgress size={24} />
                    <Typography color="textSecondary">Loading {componentName}...</Typography>
                </div>
            );
        } else if (error) {
            return (
                <Typography color="error" style={{ padding: '16px' }}>
                    {error.message || 'No data found.'}
                </Typography>
            );
        } else {
            if (!data) {
                return <Typography color={"textSecondary"}>Cannot find the data...</Typography>
            }
            const combinedProps = {
                ...props,
                [propName]: data,
            } as unknown as P;

            return <WrappedComponent {...combinedProps} />;
        }
    };
}

export const UserProfile = withDataFetching(UserInfo, 'users/1', "user");