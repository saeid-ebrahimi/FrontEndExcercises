import { useState, useEffect, ChangeEvent } from "react";
import {
    TextField, InputAdornment, outlinedInputClasses,
    inputLabelClasses, formHelperTextClasses
} from "@mui/material";
import {
    PhoneAndroid as PhoneIcon,
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon
} from "@mui/icons-material";

export default function TextFieldCustomizationUsingClassesObject() {
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [visible, setVisible] = useState(true)
    useEffect(() => {
        console.log(phoneNumber);
    }, [phoneNumber])
    return (
        <>
            <TextField
                value={phoneNumber}
                label={"Phone Number"}
                autoComplete="off"
                type={visible ? "number" : "password"}
                id={"phone-number"}
                required
                // disabled
                error={phoneNumber.length !== 11 && phoneNumber.length > 0}
                helperText={phoneNumber.length !== 11 && phoneNumber.length > 0 ? "your phone number should be 11 digits" : "enter your emergency phone number"}
                placeholder={"Enter Your Phone Number..."}
                onChange={
                    (event: ChangeEvent<HTMLInputElement>) => {
                        setPhoneNumber(event.target.value);
                    }
                }
                sx={{
                    "& input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button": {
                        appearance: "none",
                    },
                    [`& .${outlinedInputClasses.error}`]: {
                        [`&.${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: "#C2410C"
                        },
                        [`&.${inputLabelClasses.asterisk}`]: {
                            color: "#C2410C"
                        },
                        [`&.${inputLabelClasses.root}`]: {
                            color: "#C2410C"
                        },
                        [`&.${inputLabelClasses.shrink}`]: {
                            color: "#C2410C"
                        },
                        [`&.${formHelperTextClasses.root}`]: {
                            color: "#C2410C"
                        }
                    },
                    [`& .${outlinedInputClasses.disabled}`]: {
                        [`& .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: "#D8B4FE"
                        },
                        [`& .${outlinedInputClasses.input}`]: {
                            "-webkit-text-fill-color": "#D8B4FE"
                        },
                        [`&.${inputLabelClasses.root}`]: {
                            color: "#D8B4FE",
                        },
                        [`& .${inputLabelClasses.asterisk}`]: {
                            color: "#D8B4FE",
                        },
                        [`&.${inputLabelClasses.shrink}`]: {
                            color: "#D8B4FE",
                        },
                        [`&.${formHelperTextClasses.root}`]: {
                            color: "#D8B4FE",
                        },
                        "&::placeholder": {
                            color: "#D8B4FE"
                        }
                    },
                    [`& .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: "#4C1D95",
                    },
                    [`& .${inputLabelClasses.root}`]: {
                        color: "#4C1D95",
                        fontFamily: "Verdana",
                    },
                    [`& .${inputLabelClasses.asterisk}`]: {
                        color: "#4C1D95",
                    },
                    [`& .${inputLabelClasses.shrink}`]: {
                        color: "#4C1D95",
                        fontFamily: "Verdana",
                    },
                    "& ::placeholder": {
                        color: "#4C1D95",
                        opacity: 0.8,
                    },
                    [`& .${formHelperTextClasses.root}`]: {
                        color: "#4C1D95",
                        fontFamily: "Verdana",
                        fontSize: "0.75rem",
                    },
                    "&:hover": {
                        [`& .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: "#6D28D9",

                        },
                    }
                }}
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
                            <InputAdornment onClick={() => { setVisible(prev => !prev) }} position={"end"}>
                                {visible ? <VisibilityOffIcon sx={{
                                    color: "#6B21A8",
                                }} /> : <VisibilityIcon sx={{ color: "#4C1D95" }} />}
                            </InputAdornment>
                    }
                }}
            />
            {/* <TextField
                value={phoneNumber}
                label={"Phone Number"}
                variant={"standard"}
                autoComplete="off"
                type={visible ? "number" : "password"}
                id={"phone-number"}
                sx={{
                    "& input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button": {
                        appearance: "none",
                    },

                }}
            /> */}
        </>
    )
}
