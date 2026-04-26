import { Brightness1, Brightness2, BrightnessHigh, BrightnessLow, ListSharp } from "@mui/icons-material";
import {
    Box,
    FormControl,
    FormControlLabel,
    FormHelperText,
    InputAdornment,
    InputLabel,
    ListSubheader,
    MenuItem,
    Rating,
    Select,
    Slider,
    Switch,
    TextField

} from "@mui/material";
import { ChangeEvent, useState } from "react";

import { PhoneAndroid as PhoneIcon, Visibility as VisibilityIcon, VisibilityOff as VisibilityOffIcon } from "@mui/icons-material";

export function Demo() {
    const [textValue, setTextValue] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [visible, setVisible] = useState(true)
    return <Box sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "1rem",
    }}>
        <TextField
            value={phoneNumber}
            label={"Full Name"}
            id={"full-name"}
            type={visible ? "number" : "password"}
            sx={{
                "& input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button": {
                    appearance: "none",
                },
                "& .Mui-error": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C2410C"
                    },
                    "& .MuiInputLabel-asterisk": {
                        color: "#C2410C"
                    }
                },
                "& .Mui-disabled": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#D8B4FE !important",
                    },
                    "& .MuiOutlinedInput-input": {
                        "-webkit-text-fill-color": "#D8B4FE",
                        "& .Mui-error": {
                            color: "wheat"
                        }
                    },
                    "&.MuiInputLabel-root": {
                        color: "#D8B4FE",
                    },
                    "&.MuiFormHelperText-root": {
                        color: "#D8B4FE",
                    },
                    "&::placeholder": {
                        color: "red !important"
                    }

                },
                "&:hover": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#6D28D9",

                    },
                    "& .Mui-error .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#F97316"
                    },
                    "& .Mui-disabled": {
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#D8B4FE"
                        },
                    },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#4C1D95",
                },
                "& .MuiInputLabel-root": {
                    color: "#0E7490",
                    fontFamily: "Verdana",
                    "&.Mui-error": {
                        color: "#C2410C"
                    }
                },
                "& ::placeholder": {
                    color: "#4C1D95",
                    opacity: 0.8,
                },
                "& .MuiInputLabel-shrink": {
                    color: "#4C1D95",
                    "&.Mui-error": {
                        color: "#C2410C"
                    }
                },
                "& .MuiFormHelperText-root": {
                    color: "#4C1D95",
                    fontFamily: "Verdana",
                    fontSize: "0.75rem",
                    "&.Mui-error": {
                        color: "#C2410C"
                    }
                },

            }}
            placeholder={"Enter Your Phone Number..."}

            required
            slotProps={{
                input: {
                    sx: {
                        bgcolor: "#EDE9FE",
                        color: "#4C1D95",
                        fontFamily: "Verdana",
                        height: "4rem",
                        "&.Mui-error": {
                            bgcolor: "#FFF7ED",
                            color: "#C2410C"
                        },
                        "&.Mui-disabled": {
                            bgcolor: "white",
                        },


                    },
                    startAdornment:
                        <InputAdornment sx={{
                            "& > svg": {
                                color: "#4C1D95",
                            },
                        }} position={"start"}>
                            <PhoneIcon />
                        </InputAdornment>,
                    endAdornment:
                        <InputAdornment sx={{
                            "& > svg": {
                                color: "#4C1D95",
                            },
                        }} position={"end"} onClick={() => { setVisible(prev => !prev) }}>
                            {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </InputAdornment>
                }
            }}
            onChange={
                (event: ChangeEvent<HTMLInputElement>) => {
                    setPhoneNumber(event.target.value)
                }
            }
            error={phoneNumber.length !== 11 && phoneNumber.length > 0}
            helperText={phoneNumber.length !== 11 && phoneNumber.length > 0 ? "your phone number should be 11 digits" : "enter your emergency phone number"}

        />
    </Box >
}