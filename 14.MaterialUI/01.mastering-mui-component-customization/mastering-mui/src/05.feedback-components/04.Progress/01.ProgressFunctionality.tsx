import { Button, CircularProgress, LinearProgress } from "@mui/material";
import { useState } from "react";


export function ProgressFunctionality() {
    const [loading, setLoading] = useState(false)
    return (
        <>
            <LinearProgress />
            <CircularProgress size={50} thickness={6} disableShrink />
            <LinearProgress
                value={75}
                variant={"determinate"}
            />
            <LinearProgress
                value={75}
                variant={"buffer"}
                valueBuffer={80}

            />
            <CircularProgress value={75} variant={"determinate"} />
            <Button variant={"outlined"} onClick={() => setLoading(!loading)}>
                {loading ? <CircularProgress /> : "Click Me"}
            </Button>
        </>
    )
}
