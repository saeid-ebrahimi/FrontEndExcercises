import { Radio, FormControlLabel, RadioGroup, FormControl } from "@mui/material";
import {
    BrightnessLow as BrightnessLowIcon,
    BrightnessHigh as BrightnessHighIcon
} from "@mui/icons-material";
import { useEffect, useState } from "react";

export function RadioButtonFunctionality() {
    const [value, setValue] = useState("email")
    useEffect(() => {
        console.log(value);

    }, [value])
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", }}>
            <Radio
                // disabled
                icon={<BrightnessLowIcon />}
                checkedIcon={<BrightnessHighIcon />}
                size={"small"}
                color="secondary"
            />
            <FormControl
            // disabled
            >
                <RadioGroup value={value} onChange={(event) => { setValue(event.target.value) }} row>
                    <FormControlLabel
                        // labelPlacement={"top"}
                        value={"email"}
                        aria-label={"Email"}
                        control={<Radio
                            size={"small"}
                            color="secondary"
                        />}
                        label={"Email"}
                    />
                    <FormControlLabel
                        value={"text"}
                        aria-label={"Text Message"}
                        control={<Radio
                            size={"small"}
                            color="secondary"
                        />} label={"Text Message"} />
                    <FormControlLabel
                        value={"newspaper"}
                        aria-label={"Postal Newspaper"}
                        control={<Radio
                            size={"small"}
                            color="secondary"
                        />} label={"Postal Newspaper"} />
                </RadioGroup>
            </FormControl>

        </div>
    )
}
