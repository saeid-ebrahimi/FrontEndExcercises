import { useState, useEffect, ChangeEvent } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { PhoneAndroid as PhoneIcon, Visibility as VisibilityIcon, VisibilityOff as VisibilityOffIcon } from "@mui/icons-material";


export function TextFieldCustomization() {
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
                    "& .MuiInputLabel-shrink": {
                        color: "#4C1D95",
                        "&.Mui-error": {
                            color: "#C2410C"
                        }
                    },
                    "& ::placeholder": {
                        color: "#4C1D95",
                        opacity: 0.8,
                    },
                    "& .MuiFormHelperText-root": {
                        color: "#4C1D95",
                        fontFamily: "Verdana",
                        fontSize: "0.75rem",
                        "&.Mui-error": {
                            color: "#C2410C"
                        }
                    }
                }}
                placeholder={"Enter Your Phone Number..."}
                margin={"normal"}
                slotProps={{
                    input: {
                        // readOnly: true,
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
                required
                disabled
                error={phoneNumber.length !== 11 && phoneNumber.length > 0}
                helperText={phoneNumber.length !== 11 && phoneNumber.length > 0 ? "your phone number should be 11 digits" : "enter your emergency phone number"}

                onChange={
                    (event: ChangeEvent<HTMLInputElement>) => {
                        setPhoneNumber(event.target.value);
                    }
                }
            />
            <TextField
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
                    "& .Mui-error": {

                        "& .MuiInputLabel-asterisk": {
                            color: "#C2410C"
                        }
                    },
                    "& .Mui-disabled": {
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
                        "& .Mui-disabled": {

                        },
                    },
                    "& .MuiInputLabel-root": {
                        color: "#0E7490",
                        fontFamily: "Verdana",
                        "&.Mui-error": {
                            color: "#C2410C"
                        }
                    },
                    "& .MuiInputLabel-shrink": {
                        color: "#4C1D95",
                        "&.Mui-error": {
                            color: "#C2410C"
                        }
                    },
                    "& ::placeholder": {
                        color: "#4C1D95",
                        opacity: 0.8,
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
                margin={"normal"}
                slotProps={{
                    input: {
                        // readOnly: true,
                        sx: {
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
                            "&:before": {
                                borderColor: "#4C1D95",

                            },
                            "&:after": {
                                borderColor: "#4C1D95",
                            },
                            "&:not(.Mui-disabled):hover::before": {
                                borderColor: "#4C1D95",
                            }

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
                required
                // disabled
                error={phoneNumber.length !== 11 && phoneNumber.length > 0}
                helperText={phoneNumber.length !== 11 && phoneNumber.length > 0 ? "your phone number should be 11 digits" : "enter your emergency phone number"}

                onChange={
                    (event: ChangeEvent<HTMLInputElement>) => {
                        setPhoneNumber(event.target.value);
                    }
                }
            />
            <TextField
                value={phoneNumber}
                label={"Phone Number"}
                variant={"filled"}
                autoComplete="off"
                type={visible ? "number" : "password"}
                id={"phone-number"}
                sx={{
                    "& input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button": {
                        appearance: "none",
                    },
                    "& .Mui-error": {

                        "& .MuiInputLabel-asterisk": {
                            color: "#C2410C"
                        }
                    },
                    "& .Mui-disabled": {
                        "&.MuiInputLabel-root": {
                            color: "#D8B4FE",
                        },
                        "&.MuiFormHelperText-root": {
                            color: "#D8B4FE",
                        },
                        "&:before": {
                            borderColor: "#4C1D95",
                        }
                    },
                    "& .MuiInputLabel-root": {
                        color: "#0E7490",
                        fontFamily: "Verdana",
                        "&.Mui-error": {
                            color: "#C2410C"
                        }
                    },
                    "& .MuiInputLabel-shrink": {
                        color: "#4C1D95",
                        "&.Mui-error": {
                            color: "#C2410C"
                        },

                    },
                    "& .MuiFilledInput-underline::placeholder": {
                        color: "#4C1D95",
                        opacity: 0.8,
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
                margin={"normal"}
                slotProps={{
                    input: {
                        // readOnly: true,
                        sx: {
                            color: "#4C1D95",
                            fontFamily: "Verdana",
                            height: "4rem",
                            bgcolor: "#FAF5FF",
                            "&:hover": {
                                bgcolor: "#F3E8FF",
                            },
                            "&.Mui-focused": {
                                bgcolor: "#F3E8FF",
                            },
                            "&.Mui-error": {
                                bgcolor: "#FFF7ED",
                                color: "#C2410C"
                            },
                            "&.Mui-disabled": {
                                bgcolor: "white",
                            },
                            "&:before": {
                                borderColor: "#4C1D95",

                            },
                            "&:after": {
                                borderColor: "#4C1D95",
                            },
                            "&:not(.Mui-disabled):hover::before": {
                                borderColor: "#4C1D95",
                            }

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
                required
                // disabled
                error={phoneNumber.length !== 11 && phoneNumber.length > 0}
                helperText={phoneNumber.length !== 11 && phoneNumber.length > 0 ? "your phone number should be 11 digits" : "enter your emergency phone number"}

                onChange={
                    (event: ChangeEvent<HTMLInputElement>) => {
                        setPhoneNumber(event.target.value);
                    }
                }
            />
        </>
    )
}
