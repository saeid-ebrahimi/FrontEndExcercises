import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from "@mui/material";

export function FormComponentsCustomization() {
    return (
        <div>
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
            // disabled
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

                }}>My Favorite Movies</FormLabel>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label={"Save Private Ryan"} />
                    <FormControlLabel control={<Checkbox />} label={"The God Father"} />
                    <FormControlLabel control={<Checkbox />} label={"The Oppenheimer"} />
                </FormGroup>
                <FormHelperText
                // sx={{
                // color: "#4338CA",
                // fontFamily: "verdana",
                // "&.Mui-error": {
                //     color: "#C2410C"
                //  }
                // }}
                >Please select your favorite movies</FormHelperText>
            </FormControl>
        </div >
    )
}