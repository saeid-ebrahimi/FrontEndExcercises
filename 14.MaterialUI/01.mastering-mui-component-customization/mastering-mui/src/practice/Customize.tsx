import {
    Box, FormControl, FormControlLabel,
    Radio, RadioGroup,
} from "@mui/material";
import { useState } from "react";

export function Customize() {
    const [value, setValue] = useState("email")

    return <Box sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "1rem",
    }}>
        <FormControl>
            <RadioGroup sx={{
                "& .MuiRadio-root": {
                    color: "#164E63",
                    "& .MuiSvgIcon-root": {
                        fontSize: "1.7rem"
                    },
                    "&.Mui-disabled": {
                        color: "#CFFAFE"
                    },
                    "& .Mui-checked:not(.Mui-disabled)": {
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
                }
            }}
                value={value} onChange={(event) => { setValue(event.target.value) }}
            >
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
    </Box >
};