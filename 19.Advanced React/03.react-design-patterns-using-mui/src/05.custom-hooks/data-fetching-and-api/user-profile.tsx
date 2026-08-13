import { CircularProgress, Typography } from "@mui/material";
import { useFetch } from "./useFetch"
import { TUser, UserInfo } from "../user-info";

interface IResourceProfileProps { resourceUrl: string }

export function ResourceProfile({ resourceUrl }: IResourceProfileProps) {
    const { data, loading, error } = useFetch<TUser>(`/api/${resourceUrl}`);

    if (loading) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '16px' }}>
                <CircularProgress size={24} />
                <Typography color="textSecondary">Loading Data...</Typography>
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
        return <UserInfo user={data} />
    }
}