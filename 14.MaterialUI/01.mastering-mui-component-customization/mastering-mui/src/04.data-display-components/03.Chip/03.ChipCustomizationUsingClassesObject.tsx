import { useState } from "react";
import {
    Delete as DeleteIcon,
    Recycling as RecyclingIcon
} from "@mui/icons-material";
import { Chip, Avatar, chipClasses } from "@mui/material";


export function ChipCustomizationUsingClassesObject() {
    const [chips, setChips] = useState(["First Chip", "Second Chip", "Third Chip"])

    const handleDelete = (chipToRemove: string) => {
        let newChips = [...chips]
        newChips = newChips.filter(chip => chip !== chipToRemove)
        setChips(newChips)
    }
    return (
        <>
            <div style={{ display: "flex", gap: "5px" }}>
                {chips.map(chip => <Chip
                    key={chip}
                    // variant={"outlined"}
                    label={chip}
                    onClick={() => {
                        console.log(`${chip} Clicked`);
                    }}
                    sx={{
                        bgcolor: "#E0E7FF",
                        color: "#3730A3",
                        borderColor: "#3730A3",
                        fontFamily: "verdana",
                        py: "10px",
                        "&:hover": {
                            bgcolor: "#C7D2FE"
                        },
                        [`& .${chipClasses.deleteIcon}`]: {
                            fill: "#3730A3",
                            "&:hover": {
                                opacity: 0.8
                            }
                        },
                        "& > svg": {
                            fill: "#3730A3",
                            "&:hover": {
                                opacity: 0.8
                            }
                        }
                    }}
                    icon={<RecyclingIcon />}
                    onDelete={() => handleDelete(chip)}
                    deleteIcon={<DeleteIcon />}
                />)}
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
                {chips.map(chip => <Chip
                    key={chip}
                    variant={"outlined"}
                    label={chip}
                    onClick={() => {
                        console.log(`${chip} Clicked`);
                    }}
                    sx={{
                        bgcolor: "#E0E7FF",
                        color: "#3730A3",
                        borderColor: "#3730A3",
                        fontFamily: "verdana",
                        py: "10px",
                        [`& .${chipClasses.deleteIcon}`]: {
                            fill: "#3730A3",
                            "&:hover": {
                                opacity: 0.8
                            }
                        },
                        "& > svg": {
                            fill: "#3730A3",
                            "&:hover": {
                                opacity: 0.8
                            }
                        }
                    }}
                    avatar={<Avatar sx={{
                        bgcolor: "#A5B4FC",
                    }}>B</Avatar>}
                    onDelete={() => handleDelete(chip)}
                    deleteIcon={<DeleteIcon />}
                />)}
            </div>
        </>
    )
}
