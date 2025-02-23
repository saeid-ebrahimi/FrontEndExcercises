import { Skeleton } from "@mui/material";

export function SkeletonCustomization() {
    return (
        <>
            <Skeleton sx={{ bgcolor: "rgb(55, 48, 163, 0.5)" }} animation={"wave"} variant={"circular"} width={50} height={50} />
        </>
    )
}
