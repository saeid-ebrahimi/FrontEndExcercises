import { KeyboardArrowDown } from "@mui/icons-material";
import {
    FormControl, FormHelperText, InputLabel, ListSubheader, MenuItem, Select,
    inputLabelClasses, selectClasses, outlinedInputClasses, inputBaseClasses,
    svgIconClasses, formHelperTextClasses
} from "@mui/material"
import { useState } from "react"

export function SelectCustomizationUsingClassesObject() {
    const [value, setValue] = useState("")
    const options = ["trial", "personal", "community", "enterprise", "largeCompany"]
    return (
        <>
            <FormControl
                // error
                // disabled
                sx={{ minWidth: "300px" }}
            >
                <InputLabel sx={{
                    color: "#6D28D9",
                    my: "0.5rem",
                    fontFamily: "Verdana",
                    [`&.${inputLabelClasses.focused}`]: {
                        color: "#6D28D9",
                        my: 0,
                    },
                    [`&:not(.${inputLabelClasses.focused}).${inputLabelClasses.shrink}`]: {
                        color: "#047857",
                        my: 0,
                    },
                    [`&.${inputLabelClasses.error}`]: {
                        color: "#B45309"
                    },
                    [`&.${inputLabelClasses.disabled}`]: {
                        color: "#D8B4FE"
                    }
                }} id="plan" >Plan</InputLabel>
                <Select
                    // disabled
                    // readOnly
                    // error
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                bgcolor: "#ECFDF5",
                                mt: "2rem",
                            }
                        }
                    }}

                    IconComponent={KeyboardArrowDown}
                    sx={{
                        bgcolor: "#ECFDF5",
                        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: "#10B981",
                        },
                        [`& .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: "#047857",
                        },
                        [`&.${selectClasses.disabled}`]: {
                            bgcolor: "white",
                            [`.${outlinedInputClasses.notchedOutline}`]: {
                                borderColor: "#D8B4FE"
                            },
                            [`.${svgIconClasses.root}`]: {
                                fill: "#D8B4FE"
                            },
                        },
                        [`&.${selectClasses.error}`]: {
                            [`.${outlinedInputClasses.notchedOutline}`]: {
                                borderColor: "#B45309"
                            },
                            [`& .${svgIconClasses.root}`]: {
                                fill: "#B45309",
                            },
                        },
                        [`&.${selectClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: "#6D28D9",
                        },
                        [`& .${inputBaseClasses.input}`]: {
                            margin: "0.5rem",
                        },
                        [`& .${svgIconClasses.root}`]: {
                            fill: "#6D28D9",
                        },
                    }}
                    label={"Plan"}
                    labelId={"plan"}
                    renderValue={(value) => `${value.charAt(0).toUpperCase()}${value.slice(1)} Plan`}
                    value={value}
                    onChange={(event) => { setValue(event.target.value) }}
                >
                    <ListSubheader sx={
                        {
                            bgcolor: "#CCFBF1",
                            fontFamily: "verdana",
                            fontSize: "1rem"
                        }
                    }>Membership Plans</ListSubheader>
                    {options.map((option) => (
                        <MenuItem sx={{
                            fontSize: "1.5rem"
                        }} key={option} value={option} >
                            {`${option.charAt(0).toUpperCase()}${option.slice(1)}`}
                        </MenuItem>
                    ))}
                </Select >
                <FormHelperText sx={{
                    color: "#6D28D9",
                    [`&.${formHelperTextClasses.error}`]: {
                        color: "#B45309"
                    },
                    [`&.${formHelperTextClasses.disabled}`]: {
                        color: "#D8B4FE"
                    }
                }}>{"select your membership plan"}</FormHelperText>
            </FormControl >
        </>
    )
}
