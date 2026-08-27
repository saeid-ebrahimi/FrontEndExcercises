import { Box } from "@mui/material";
import { ReactNode } from "react"

type Props = {
    header: ReactNode;
    sidebar: ReactNode;
    children: ReactNode;
}
export function Layout({ header, sidebar, children }: Props) {
    return <>
        <Box component={"header"}>{header}</Box>
        <Box sx={{ display: "flex" }}>
            <Box component={"aside"}>{sidebar}</Box>
            <Box component={"main"}>{children}</Box>
        </Box>
    </>
}