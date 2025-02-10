import { useState } from "react";
import {
    Delete as DeleteIcon,
    // Recycling as RecyclingIcon
} from "@mui/icons-material";
import { Chip, Avatar } from "@mui/material";

export function ChipFunctionality() {
    const [chips, setChips] = useState(["First Chip", "Second Chip", "Third Chip"])

    const handleDelete = (chipToRemove: string) => {
        let newChips = [...chips]
        newChips = newChips.filter(chip => chip !== chipToRemove)
        setChips(newChips)
    }

    return (
        <>
            {chips.map(chip => <Chip
                // size={"small"}
                key={chip}
                color={"secondary"}
                // variant={"outlined"}
                label={chip}
                onClick={() => {
                    console.log(`${chip} Clicked`);
                }}
                // icon={<RecyclingIcon />}
                avatar={<Avatar>B</Avatar>}
                onDelete={() => handleDelete(chip)}
                deleteIcon={<DeleteIcon />}
            />)}
        </>
    )
}
