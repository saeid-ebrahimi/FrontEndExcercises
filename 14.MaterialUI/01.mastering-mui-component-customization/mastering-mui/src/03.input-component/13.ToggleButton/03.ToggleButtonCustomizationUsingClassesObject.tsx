import { ToggleButton, ToggleButtonGroup, toggleButtonClasses } from "@mui/material";
import { useEffect, useState } from "react"
import {
    BrightnessLow as BrightnessLowIcon,
    BrightnessHigh as BrightnessHighIcon,
    BrightnessAuto as BrightnessAutoIcon
} from "@mui/icons-material";

export function ToggleButtonCustomizationUsingClassesObject() {
    const [brightnessLevel, setBrightnessLevel] = useState<string>("low")
    useEffect(() => {
        console.log(brightnessLevel);
    }, [brightnessLevel])

    return (
        <>
            <ToggleButtonGroup
                exclusive
                value={brightnessLevel}
                aria-label={"Select Brightness"}
                onChange={(_event, newBrightnessLevel) => { setBrightnessLevel(newBrightnessLevel) }}
                sx={{
                    bgcolor: "#EEF2FF",
                    [`& .${toggleButtonClasses.root}`]: {
                        borderColor: "#3730A3",
                        color: "#3730A3",
                        padding: "1.5rem",
                        "&:hover": {
                            opacity: 0.7,
                        },
                        "& > svg": {
                            fontSize: "3rem"
                        }
                    },
                    [`& .${toggleButtonClasses.selected}`]: {
                        bgcolor: "#6366F1",
                        color: "white",
                        "&:hover": {
                            bgcolor: "#6366F1",
                            opacity: 0.7,
                        },
                    }
                }}

            >
                <ToggleButton
                    value={"low"}
                    aria-label={"Low Brightness"}
                >
                    <BrightnessLowIcon />
                </ToggleButton>
                <ToggleButton
                    value={"high"}
                    aria-label={"High Brightness"}
                >
                    <BrightnessHighIcon />
                </ToggleButton>
                <ToggleButton
                    value={"auto"}
                    aria-label={"Auto Brightness"}
                >
                    <BrightnessAutoIcon />
                </ToggleButton>
            </ToggleButtonGroup >
        </>)
}