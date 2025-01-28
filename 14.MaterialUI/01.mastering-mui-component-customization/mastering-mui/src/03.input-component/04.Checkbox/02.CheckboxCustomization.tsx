import { Checkbox, FormControl, FormControlLabel, FormGroup, formControlLabelClasses, checkboxClasses, svgIconClasses } from '@mui/material'
import { useState } from 'react'

export function CheckboxCustomization() {
    const [checked, setChecked] = useState(false)
    return (
        <div>
            <FormControl
            >
                <FormGroup sx={
                    {
                        "& .MuiFormControlLabel-label": {
                            color: "#0F172A",
                            fontSize: "1.5rem",
                            fontFamily: "Verdana",
                            "&.Mui-disabled": {
                                color: "#CBD5E1"
                            }
                        },
                        "& .MuiCheckbox-root": {
                            color: "#0F172A",
                            "& .MuiSvgIcon-root": {
                                fontSize: "2rem"
                            },
                            "&.Mui-disabled": {
                                color: "#E2E8F0"
                            },
                            "&.Mui-checked:not(.Mui-disabled)": {
                                color: "#64748B",
                            }
                        }
                    }
                } row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                // disabled
                                // sx={{
                                //     color: "#0F172A",
                                //     "& .MuiSvgIcon-root": {
                                //         fontSize: "2rem"
                                //     },
                                //     "&.Mui-disabled": {
                                //         color: "#E2E8F0"
                                //     },
                                //     "&.Mui-checked:not(.Mui-disabled)": {
                                //         color: "#64748B",
                                //     }
                                // }}
                                checked={checked}
                                onChange={(event) => setChecked(event.target.checked)}
                            />
                        }
                        label={"My Value 1"}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                // disabled
                                checked={checked}
                                onChange={(event) => setChecked(event.target.checked)}
                            />
                        }
                        label={"My Value 2"}
                    />
                </FormGroup>
            </FormControl>
            <FormControl
            >
                <FormGroup sx={
                    {
                        [`& .${formControlLabelClasses.label}`]: {
                            color: "#0F172A",
                            fontSize: "1.5rem",
                            fontFamily: "Verdana",
                            [`& .${formControlLabelClasses.disabled}`]: {
                                color: "#CBD5E1"
                            }
                        },
                        [`& .${checkboxClasses.root}`]: {
                            color: "#0F172A",
                            [`& .${svgIconClasses.root}`]: {
                                fontSize: "2rem"
                            },
                            [`&.${checkboxClasses.disabled}`]: {
                                color: "#E2E8F0"
                            },
                            [`&.${checkboxClasses.checked}:not(.${checkboxClasses.disabled})`]: {
                                color: "#64748B",
                            }
                        }
                    }
                } row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                disabled
                                // sx={{
                                //     color: "#0F172A",
                                //     "& .MuiSvgIcon-root": {
                                //         fontSize: "2rem"
                                //     },
                                //     "&.Mui-disabled": {
                                //         color: "#E2E8F0"
                                //     },
                                //     "&.Mui-checked:not(.Mui-disabled)": {
                                //         color: "#64748B",
                                //     }
                                // }}
                                checked={checked}
                                onChange={(event) => setChecked(event.target.checked)}
                            />
                        }
                        label={"My Value 1"}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                // disabled
                                checked={checked}
                                onChange={(event) => setChecked(event.target.checked)}
                            />
                        }
                        label={"My Value 2"}
                    />
                </FormGroup>
            </FormControl>
        </div>
    )
}
