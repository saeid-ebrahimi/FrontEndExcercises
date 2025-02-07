import { useEffect, useState, type MouseEvent } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import {
    BrightnessLow as BrightnessLowIcon,
    BrightnessHigh as BrightnessHighIcon,
    BrightnessAuto as BrightnessAutoIcon
} from "@mui/icons-material";

export function ToggleButtonFunctionality() {
    const [brightnessLevel, setBrightnessLevel] = useState<string>("low")
    const [brightnessLevels, setBrightnessLevels] = useState<string[]>(["low"])
    function handleChange(_event: MouseEvent<HTMLElement>, newBrightnessLevels: string[]) {
        if (newBrightnessLevels.length < 1) return
        setBrightnessLevels(newBrightnessLevels)
    }
    useEffect(() => {
        console.log(brightnessLevel);
    }, [brightnessLevel])

    return (
        <>
            <ToggleButtonGroup
                exclusive
                value={brightnessLevel}
                size={"large"}
                color={"primary"}
                // orientation={"vertical"}
                aria-label={"Select Brightness"}
                onChange={(_event, newBrightnessLevel) => { setBrightnessLevel(newBrightnessLevel) }}
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
            <ToggleButtonGroup
                value={brightnessLevels}
                size={"large"}
                color={"secondary"}
                // orientation={"vertical"}
                onChange={handleChange}
                aria-label={"Select Brightness"}
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
            <ToggleButton
                value={"auto"}
                selected
            >
                <BrightnessAutoIcon />
            </ToggleButton>
        </>
    )
}
