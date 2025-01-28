import { Fab } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

export function FloatingActionButtonCustomization() {
    return (
        <div style={{ display: 'flex', justifyItems: "center", flexDirection: "column", gap: "1rem" }}>
            <Fab
                disabled
                variant={"extended"}
                sx={{
                    bgcolor: "#020617",
                    color: "#fff",
                    fontFamily: "verdana",
                    "&:hover": {
                        bgcolor: "#1E293B"
                    },
                    "&.Mui-disabled": {
                        color: "#fff",
                        bgcolor: "#CBD5E1"
                    }
                }}
            >
                <AddIcon />
                New User
            </Fab>
        </div>
    )
}