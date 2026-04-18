import { Brightness1Sharp, BrightnessHigh, BrightnessLow } from "@mui/icons-material";
import {
    Box, Checkbox, FormControl, FormControlLabel,
    FormGroup, FormHelperText, FormLabel,
    Radio,
    RadioGroup
} from "@mui/material";

import { useEffect, useState } from "react";

export function Demo() {
    const [value, setValue] = useState("email")
    useEffect(() => {
        console.log(value);

    }, [value])

    return <Box sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "1rem",
    }}>
        <Radio
            // disabled
            icon={<BrightnessLow />}
            checkedIcon={<BrightnessHigh />}
        />
        <FormControl>
            <RadioGroup>
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
    </Box>
}