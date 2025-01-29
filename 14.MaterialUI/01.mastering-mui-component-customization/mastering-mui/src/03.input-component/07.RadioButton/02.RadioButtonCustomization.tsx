import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { useState } from "react"

export function RadioButtonCustomization() {
    const [value, setValue] = useState("email")
    return (
        <FormControl
        // disabled
        >
            <RadioGroup sx={{

                "& .MuiRadio-root": {
                    color: "#164E63",
                    "& .MuiSvgIcon-root": {
                        fontSize: 25
                    },
                    "&.Mui-disabled": {
                        color: "#CFFAFE"
                    },
                    "&.Mui-checked:not(.Mui-disabled)": {
                        color: "#164E63",
                    },
                },
                "& .MuiFormControlLabel-label": {
                    color: "#164E63",
                    fontSize: 25,
                    fontFamily: "Verdana",
                    "&.Mui-disabled": {
                        color: "#CFFAFE"
                    }
                },
            }} value={value} onChange={(event) => { setValue(event.target.value) }}>
                <FormControlLabel

                    // sx={{
                    //     "& .MuiFormControlLabel-label": {
                    //         color: "#164E63",
                    //         fontSize: 25,
                    //         fontFamily: "Verdana",
                    //         "&.Mui-disabled": {
                    //             color: "#CFFAFE"
                    //         }
                    //     },

                    // }}
                    value={"email"}
                    aria-label={"Email"}
                    control={
                        <Radio
                        // disabled
                        // sx={{
                        //     "& .MuiSvgIcon-root": {
                        //         fontSize: 25
                        //     },
                        //     "&.Mui-disabled": {
                        //         color: "#CFFAFE"
                        //     },
                        //     "&.Mui-checked:not(.Mui-disabled)": {
                        //         color: "#164E63",
                        //     },
                        //     color: "#164E63"
                        // }}
                        />
                    }
                    label={"Email"}
                />
                <FormControlLabel
                    value={"text"}
                    aria-label={"Text Message"}
                    control={<Radio
                        size={"small"}
                    />} label={"Text Message"} />
                <FormControlLabel
                    value={"newspaper"}
                    aria-label={"Postal Newspaper"}
                    control={<Radio
                        size={"small"}
                    />} label={"Postal Newspaper"} />
            </RadioGroup>
        </FormControl>
    )
}
