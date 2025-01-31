import { KeyboardArrowDown } from "@mui/icons-material";
import { FormControl, FormHelperText, InputLabel, ListSubheader, MenuItem, Select } from "@mui/material"
import { useState } from "react"

export function SelectCustomization() {
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
                    "&.Mui-focused": {
                        color: "#6D28D9",
                        my: 0,
                    },
                    "&:not(.Mui-focused).MuiInputLabel-shrink": {
                        color: "#047857",
                        my: 0,
                    },
                    "&.Mui-error": {
                        color: "#B45309"
                    },
                    "&.Mui-disabled": {
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
                        "&.Mui-disabled": {
                            bgcolor: "white"
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#10B981",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#047857",
                        },
                        "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#D8B4FE"
                        },
                        "&.Mui-error .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#B45309"
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#6D28D9",
                        },
                        "& .MuiInputBase-input": {
                            margin: "0.5rem",
                        },
                        "& .MuiSvgIcon-root": {
                            fill: "#6D28D9",
                            "&.Mui-disabled": {
                                fill: "#D8B4FE"
                            }
                        },
                        "&.Mui-error .MuiSvgIcon-root": {
                            fill: "#B45309"
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
                    "&.Mui-error": {
                        color: "#B45309"
                    },
                    "&.Mui-disabled": {
                        color: "#D8B4FE"
                    }
                }}>{"select your membership plan"}</FormHelperText>
            </FormControl >
            {/* <FormControl
                // error
                disabled
                sx={{ minWidth: "300px" }}
            >
                <InputLabel sx={{
                    color: "#6D28D9",
                    my: "0.5rem",
                    fontFamily: "Verdana",
                    "&.Mui-focused": {
                        color: "#6D28D9",
                        my: 0,
                    },
                    "&:not(.Mui-focused).MuiInputLabel-shrink": {
                        color: "#047857",
                        my: 0,
                    },
                    "&.Mui-error": {
                        color: "#B45309"
                    }
                }} id="plan3" >Plan</InputLabel>
                <Select
                    // disabled
                    // readOnly
                    // error
                    variant={"standard"}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                bgcolor: "#FAF5FF",
                            }
                        }
                    }}

                    IconComponent={KeyboardArrowDown}
                    sx={{
                        // variant - Standard Or Filled
                        bgcolor: "#FAF5FF",
                        "&:before": {
                            borderColor: "#6D28D9"
                        },
                        "&:not(.Mui-disabled):hover::before": {
                            borderColor: "#D8B4FE"
                        },
                        "& .MuiInputBase-input": {
                            margin: "0.5rem",
                        },
                        "& .MuiSvgIcon-root": {
                            fill: "#6D28D9",
                        },
                        "&.Mui-error .MuiSvgIcon-root": {
                            fill: "#B45309"
                        },
                        "&.Mui-focused::after": {
                            borderColor: "#6B21A8"
                        }

                    }}
                    label={"Plan"}
                    labelId={"plan3"}
                    renderValue={(value) => `${value.charAt(0).toUpperCase()}${value.slice(1)} Plan`}
                    value={value}
                    onChange={(event) => { setValue(event.target.value) }}
                >
                    <ListSubheader sx={
                        {
                            bgcolor: "#F3E8FF",
                            fontFamily: "verdana",
                            fontSize: "0.9rem"
                        }
                    }>Membership Plans</ListSubheader>
                    {options.map((option) => (
                        <MenuItem sx={{
                            fontSize: "0.8rem"
                        }} key={option} value={option} >
                            {`${option.charAt(0).toUpperCase()}${option.slice(1)}`}
                        </MenuItem>
                    ))}
                </Select >
                <FormHelperText sx={{
                    color: "#6D28D9",
                    "&.Mui-error": {
                        color: "#B45309"
                    }
                }}>{"select your membership plan"}</FormHelperText>
            </FormControl > */}
        </>
    )
}
