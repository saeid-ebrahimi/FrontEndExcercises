import { CircularProgress, Typography } from "@mui/material";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import UserInfoForm from "./user-info-form";

type IInjectedProps<T> = {
    user: T;
    onChangeUser: (updates: Partial<T>) => void;
    onUpdateUser: (updates: Partial<T>) => Promise<void>;
    onResetUser: () => void;
    disableUpdate: boolean;
};

function withDataFetchAndUpdate<P extends object, T extends Partial<P>>(
    WrappedComponent: React.ComponentType<P> | React.FC<P>,
    resourceUrl: string,
    propName: keyof T
) {
    const componentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    type IExternalProps = Omit<P, keyof IInjectedProps<T>>;

    return function DataFetchingAndUpdatingComponent(props: IExternalProps) {
        const [data, setData] = useState<T | null>(null);
        const [initialData, setInitialData] = useState<T | null>(null)
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState<Error | null>(null);
        const [updating, setUpdating] = useState(false);

        useEffect(() => {
            const controller = new AbortController();
            const getData = async () => {
                try {
                    setLoading(true);
                    const response = await axios.get(`/api/${resourceUrl}`, {
                        signal: controller.signal,
                    })
                    setData(response.data);
                    setInitialData(response.data);
                } catch (error) {
                    console.log(`Error in getting data for ${componentName}`);
                    if (!axios.isCancel(error)) {
                        setError(error as Error);
                    }
                } finally {
                    setLoading(false)
                }
            }

            getData();

            return () => {
                controller.abort()
            };
        }, [])

        const onChangeUser = (updates: Partial<T>) => {
            if (data) {
                setData({ ...data, ...updates });
            }
        }

        const onUpdateUser = async (updates: Partial<T>) => {
            if (data) {
                try {
                    setUpdating(true)
                    const response = await updateUser(data);
                    console.log(response);

                    setData({ ...data, ...updates })
                    setInitialData(data);

                } catch (error) {
                    setError(error as Error)
                } finally {
                    setUpdating(false);
                }
            }
        }

        const onResetUser = () => {
            setData(initialData);
        }
        const updateUser = async (data: T) => {
            try {
                const response = await axios.put(`/api/${resourceUrl}`, data);
                return response?.data ?? null
            } catch (error) {
                throw new Error((error as AxiosError).message || "cannot update user")
            }
        };

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
                onChangeUser,
                onUpdateUser,
                onResetUser,
                disableUpdate: loading || updating
            } as P
            return <WrappedComponent {...combinedProps} />
        }
    }
}

export const UpdateUserProfile = withDataFetchAndUpdate(UserInfoForm, "users/2", "user")