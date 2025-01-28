import { Fab } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

export function FloatingActionButtonFunctionality() {
    return (
        <div style={{ display: 'flex', justifyItems: "center", flexDirection: "column", gap: "1rem" }}>
            <Fab
                disableRipple
            >
                <AddIcon />
            </Fab>
            <Fab
                variant={"extended"}
                color={"secondary"}
            >
                <AddIcon />
                New User
            </Fab>
        </div>
    )
}
