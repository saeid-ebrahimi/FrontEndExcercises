import { Button } from "@mui/material";
import { ReactNode } from "react";

export function MyDynamicallyStyledButton({ color, children }: { color: string, children: ReactNode }) {

    return (
        <Button sx={{ color: color, bgcolor: color === "white" ? "black" : "blue" }}>
            {children}
        </Button>
    )
}