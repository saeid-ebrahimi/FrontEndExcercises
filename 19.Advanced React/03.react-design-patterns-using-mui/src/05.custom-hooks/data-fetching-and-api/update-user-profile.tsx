
import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { CircularProgress, Typography } from "@mui/material";
import { useMutation } from "./useMutation";
import axios from "axios";
import { ResourceInfoForm } from "./resource-info-form";
import { TUser } from "../user-info";

export type TUserUpdates = Partial<Pick<TUser, "name" | "age" | "country">>;


export function UpdateResourceProfile<T extends TUser>(resourceUrl: string) {
    const [resourceData, setResourceData] = useState<T | null>(null)

    const { data, loading: isFetchLoading, error: fetchError } = useFetch<T>(resourceUrl);
    const { mutate: updateUser, data: updatedData, loading: isUpdating, error: updateError } = useMutation<T, Partial<T>>(
        (updatedData: Partial<T>) => axios.put(`/api/${resourceUrl}`, updatedData)
    )

    useEffect(() => {
        setResourceData(data)
    }, [data])

    useEffect(() => {
        if (updateError) {
            alert(updateError?.message)
        }
    }, [updateError])

    const onChangeResource = (updates: TUserUpdates) => {
        if (data) {
            setResourceData({ ...data, ...updates });
        }
    }

    const onUpdateResource = async (updates: Partial<T>) => {
        if (resourceData) {
            await updateUser({ ...resourceData, ...updates });
            setResourceData(updatedData ? { ...updatedData } : { ...resourceData, ...updates })
        }
    }

    const onResetResource = () => {
        setResourceData(data);
    }


    if (isFetchLoading) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '16px' }}>
                <CircularProgress size={24} />
                <Typography color="textSecondary">Loading data...</Typography>
            </div>
        );
    } else if (fetchError) {
        return (
            <Typography color="error" style={{ padding: '16px' }}>
                {fetchError.message || 'No data found.'}
            </Typography>
        );
    } else {
        if (!data) {
            return <Typography color={"textSecondary"}>Cannot find the data...</Typography>
        }

        return <ResourceInfoForm disableUpdate={isFetchLoading || isUpdating} onChangeResource={onChangeResource} onResetResource={onResetResource} onUpdateResource={onUpdateResource} resource={data} />

    }
}


