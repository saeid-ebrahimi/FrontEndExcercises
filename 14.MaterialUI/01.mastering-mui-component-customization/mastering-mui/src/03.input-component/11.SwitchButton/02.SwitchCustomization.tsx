import { FormControlLabel, Switch } from "@mui/material"
import { useState } from "react"

export function SwitchCustomization() {
    const [darkMode, setDarkMode] = useState(false)
    const width = 100;
    const height = 70
    return (
        <FormControlLabel
            sx={{
                "& .MuiFormControlLabel-label": {
                    color: "primary.main",
                    fontSize: "1.5rem",
                    marginRight: "1.5rem"
                }
            }}
            control={
                <Switch
                    checked={darkMode}
                    onChange={() => setDarkMode(prev => !prev)}
                    aria-label={"Dark Mode"}
                    sx={{
                        width: width,
                        height: height,
                        overflow: "visible",
                        "& :not(.Mui-checked)": {
                            "&.MuiSwitch-switchBase": {
                                color: "warning.main",
                                transform: `translateX(-${width / 4}px)`
                            },
                            "&.MuiSwitch-track": {
                                bgcolor: "warning.main",
                                borderRadius: height
                            }
                        },
                        "& .Mui-checked": {
                            "&.MuiSwitch-switchBase": {
                                color: "success.main",
                                transform: `translateX(${width / 2}px)`
                            },
                            "& + .MuiSwitch-track": {
                                bgcolor: "green !important"
                            }
                        },
                        "& .MuiSwitch-thumb": {
                            height: 3 * height / 4,
                            width: 3 * height / 4
                        }
                    }}
                />
            }
            label={"Dark: "}
            labelPlacement={"start"} />
    )
}
