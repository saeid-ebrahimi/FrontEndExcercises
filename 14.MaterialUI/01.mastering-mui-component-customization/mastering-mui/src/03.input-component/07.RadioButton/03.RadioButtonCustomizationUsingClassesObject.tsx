import { useState } from "react"
import { FormControl, FormControlLabel, Radio, RadioGroup, radioClasses, svgIconClasses, formControlLabelClasses } from "@mui/material"

export function RadioButtonCustomizationUsingClassesObject() {
    const [value, setValue] = useState("email")
    return (
        <FormControl
            disabled
        >
            <RadioGroup sx={{
                [`& .${radioClasses.root}`]: {
                    color: "#86198F",
                    [`& .${svgIconClasses.root}`]: {
                        fontSize: 30
                    },
                    [`&.${radioClasses.disabled}`]: {
                        color: "#F5D0FE"
                    },
                    [`&.${radioClasses.checked}:not(.${radioClasses.disabled})`]: {
                        color: "#86198F",
                    },
                },
                [`& .${formControlLabelClasses.label}`]: {
                    color: "#86198F",
                    fontSize: 25,
                    fontFamily: "Verdana",
                    [`&.${formControlLabelClasses.disabled}`]: {
                        color: "#F5D0FE"
                    }
                },
            }} value={value} onChange={(event) => { setValue(event.target.value) }}>
                <FormControlLabel
                    value={"email"}
                    aria-label={"Email"}
                    control={<Radio />}
                    label={"Email"}
                />
                <FormControlLabel
                    value={"text"}
                    aria-label={"Text Message"}
                    control={<Radio />}
                    label={"Text Message"} />
                <FormControlLabel
                    value={"newspaper"}
                    aria-label={"Postal Newspaper"}
                    control={<Radio />}
                    label={"Postal Newspaper"} />
            </RadioGroup>
        </FormControl>
    )
}
