import { Switch, FormControlLabel } from "@mui/material";
import { useState } from "react";

export function SwitchFunctionality() {
    const [darkMode, setDarkMode] = useState(false)
    return <FormControlLabel
        control={
            <Switch
                checked={darkMode}
                onChange={() => { setDarkMode(prev => !prev) }}
                size={"small"}
                color={"secondary"}
                aria-label={"Dark Mode"}
            />
        }
        labelPlacement={"start"}
        label={"Dark Mode: "}

    />
}