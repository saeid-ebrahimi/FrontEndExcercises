import {
    Checkbox, FormControl, FormControlLabel, FormGroup,
    FormHelperText, FormLabel, formControlLabelClasses,
    formLabelClasses, formHelperTextClasses
} from "@mui/material";

export function FormComponentsCustomization() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <FormControl
                // required
                component={"fieldset"}
                margin={"dense"}
                sx={{
                    "& .MuiFormControlLabel-label": {
                        color: "#1E293B",
                        fontSize: "1.2rem",
                        "&.Mui-focused": {
                            color: "#16A34A"
                        },
                        "&.Mui-disabled": {
                            color: "#94A3B8"
                        }
                    },
                    "& .MuiFormLabel-root": {
                        color: "#4338CA",
                        fontSize: "1.5rem",
                        fontFamily: "Verdana",
                    },
                    "& .MuiFormLabel-asterisk": {
                        color: "red",
                    },
                    "& .MuiFormHelperText-root": {
                        color: "#4338CA",
                        fontFamily: "verdana",
                    },
                    "& .Mui-error": {
                        color: "#C2410C"
                    },
                    "& .Mui-disabled": {
                        color: "#94A3B8",
                        "& .MuiFormLabel-asterisk": {
                            color: "#94A3B8",
                        }
                    }

                }}
                required
                // error
                disabled
            >
                <FormLabel sx={{
                    // color: "#4338CA",
                    // fontSize: "1.5rem",
                    // fontFamily: "Verdana",
                    // "& .MuiFormLabel-asterisk": {
                    //     color: "red",
                    //     // "&.Mui-error": {
                    //     //     color: "#C2410C"
                    //     // }
                    // },
                    // "&.Mui-focused": {
                    //     color: "#16A34A"
                    // },
                    // "&.Mui-error": {
                    //     color: "#C2410C"
                    // },
                    // "&.Mui-disabled": {
                    //     color: "#94A3B8"
                    // }


                }}>My Favorite Movies</FormLabel>
                <FormGroup sx={{
                    // "& .MuiFormControlLabel-label": {
                    //     color: "#1E293B",
                    //     fontSize: "1.2rem",
                    //     "&.Mui-focused": {
                    //         color: "#16A34A"
                    //     },
                    //     "&.Mui-disabled": {
                    //         color: "#94A3B8"
                    //     }
                    // },
                }}>
                    <FormControlLabel control={<Checkbox />} label={"Save Private Ryan"} />
                    <FormControlLabel control={<Checkbox />} label={"The God Father"} />
                    <FormControlLabel control={<Checkbox />} label={"The Oppenheimer"} />
                </FormGroup>
                <FormHelperText
                    sx={{
                        // color: "#4338CA",
                        // fontFamily: "verdana",
                        // "&.Mui-error": {
                        //     color: "#C2410C"
                        //  }
                        // "&.Mui-disabled": {
                        //     color: "#94A3B8"
                        // }
                    }}
                >Please select your favorite movies</FormHelperText>
            </FormControl>
            <FormControl
                // required
                component={"fieldset"}
                margin={"dense"}
                sx={{
                    [`& .${formControlLabelClasses.label}`]: {
                        color: "#1E293B",
                        fontSize: "1.2rem",
                        [`&.${formControlLabelClasses.disabled}`]: {
                            color: "#94A3B8"
                        }
                    },
                    [`& .${formLabelClasses.root}`]: {
                        color: "#4338CA",
                        fontSize: "1.5rem",
                        fontFamily: "Verdana",
                    },
                    [`& .${formLabelClasses.focused}`]: {
                        color: "#16A34A",
                    },
                    [`& .${formLabelClasses.asterisk}`]: {
                        color: "red",
                    },
                    [`& .${formHelperTextClasses.root}`]: {
                        color: "#4338CA",
                        fontFamily: "verdana",
                    },
                    [`& .${formControlLabelClasses.error}`]: {
                        color: "#C2410C"
                    },
                    [`& .${formControlLabelClasses.disabled}`]: {
                        color: "#94A3B8",
                        [`& .${formLabelClasses.asterisk}`]: {
                            color: "#94A3B8",
                        }
                    },

                }}
                required
            // error
            // disabled
            >
                <FormLabel>My Favorite Movies</FormLabel>
                <FormGroup >
                    <FormControlLabel control={<Checkbox />} label={"Save Private Ryan"} />
                    <FormControlLabel control={<Checkbox />} label={"The God Father"} />
                    <FormControlLabel control={<Checkbox />} label={"The Oppenheimer"} />
                </FormGroup>
                <FormHelperText
                >Please select your favorite movies</FormHelperText>
            </FormControl>
        </div >
    )
}