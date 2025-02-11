import { Box, Divider } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";

export function DividerCustomization() {
    return (
        <div style={{
            width: "100%",
        }}>
            <Divider textAlign={"right"}
                variant={"middle"}
            // variant={"fullWidth"}
            // variant={"inset"}
            >My Divider</Divider>
            <br />
            <Box sx={{
                width: "100px",
                height: "100px",
                bgcolor: "#EEF2FF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <AddIcon />
                <Divider flexItem variant={"middle"} orientation={"vertical"}>A</Divider>
                <RemoveIcon />
            </Box>
        </div>
    )
}