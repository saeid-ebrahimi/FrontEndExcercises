import { ChangeEvent, useState } from "react";
import { FormControl, RadioGroup, Radio, FormControlLabel, FormLabel } from "@mui/material";

export function ControlledRadioButtonsGroup() {
    const [value, setValue] = useState("female")

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <FormControl disabled={true}>
            <FormLabel id="gender-label">Gender</FormLabel>
            <RadioGroup sx={
                {
                    "& .MuiFormControlLabel-label": {
                        color: "black",
                        fontFamily: "Verdana",
                        fontSize: "1.2rem"
                    },
                    "& .MuiRadio-root": {
                        "&.Mui-checked": {
                            color: "black",
                        },

                        "&.Mui-disabled": {
                            color: "gray"
                        },
                    }
                }
            }
                aria-labelledby={"gender-label"}
                name={"gender"} onChange={handleChange} value={value}>
                <FormControlLabel value={"female"} control={<Radio />} label={"Female"} />
                <FormControlLabel value={"male"} control={<Radio />} label={"Male"} />
            </RadioGroup>
        </FormControl>
    )

}