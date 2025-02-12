import {
    Delete as DeleteIcon,
    DeleteOutline as DeleteOutlineIcon,
} from "@mui/icons-material"
import { Divider } from "@mui/material"

export function IconsCustomization() {
    return (
        <>
            <Divider sx={{ width: "200px" }} variant={"fullWidth"} textAlign={"left"} />
            <DeleteIcon sx={{
                fontSize: "2rem",
                fill: "#1E293B"
            }} />
            <DeleteOutlineIcon sx={{
                fontSize: "2rem",
                fill: "#1E293B"
            }} />
        </>
    )
}
