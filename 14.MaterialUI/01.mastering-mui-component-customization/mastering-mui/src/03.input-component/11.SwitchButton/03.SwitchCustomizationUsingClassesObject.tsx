import { FormControlLabel, Switch, switchClasses } from "@mui/material";
import switchBaseClasses from "@mui/material/internal/switchBaseClasses";
import { useState } from "react";


export function SwitchCustomizationUsingClassesObject() {
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
                        [`& :not(.${switchBaseClasses.checked})`]: {
                            [`&.${switchBaseClasses.root}`]: {
                                color: "primary.main",
                                transform: `translateX(-${width / 4}px)`
                            },
                            [`&.${switchClasses.track}`]: {
                                bgcolor: "primary.main",
                                borderRadius: height
                            }
                        },
                        [`& .${switchBaseClasses.checked}`]: {
                            [`&.${switchBaseClasses.root}`]: {
                                color: "success.main",
                                transform: `translateX(${width / 2}px)`
                            },
                            [`& + .${switchClasses.track}`]: {
                                bgcolor: "green !important"
                            }
                        },
                        [`& .${switchClasses.thumb}`]: {
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
