import { CircularProgress } from "@mui/material";

export function LoadingWrapper({
    loading,
    children,
}: {
    loading: boolean;
    children: React.ReactNode;
}) {
    if (loading) {
        return <CircularProgress />;
    }

    return <>{children}</>;
}