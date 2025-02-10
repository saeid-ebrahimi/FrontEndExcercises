import { useState } from "react";
import {
    Delete as DeleteIcon,
    // Recycling as RecyclingIcon
} from "@mui/icons-material";
import { Chip, Avatar } from "@mui/material";

export function ChipCustomization() {
    const [chips, setChips] = useState(["First Chip", "Second Chip", "Third Chip"])

    const handleDelete = (chipToRemove: string) => {
        let newChips = [...chips]
        newChips = newChips.filter(chip => chip !== chipToRemove)
        setChips(newChips)
    }
    return (
        <div style={{ display: "flex", gap: "5px" }}>
            {chips.map(chip => <Chip
                key={chip}
                // variant={"outlined"}
                label={chip}
                onClick={() => {
                    console.log(`${chip} Clicked`);
                }}
                sx={{
                    bgcolor: "#F8FAFC",
                    color: "#020617",
                    fontFamily: "verdana",
                    py: "10px",
                    "&:hover": {
                        bgcolor: "#E2E8F0"
                    },
                    "& .MuiChip-deleteIcon": {
                        fill: "#64748B",
                        "&:hover": {
                            opacity: 0.8
                        }
                    }
                }}
                // icon={<RecyclingIcon />}
                avatar={<Avatar sx={{
                    bgcolor: "#CBD5E1",
                    color: "#020617",
                }}>B</Avatar>}
                onDelete={() => handleDelete(chip)}
                deleteIcon={<DeleteIcon />}
            />)}
        </div>
    )
}
