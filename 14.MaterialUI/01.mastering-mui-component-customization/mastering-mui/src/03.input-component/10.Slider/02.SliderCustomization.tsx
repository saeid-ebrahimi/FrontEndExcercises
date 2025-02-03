import { Slider } from "@mui/material";
import { type KeyboardEvent, useState } from "react";

export function SliderCustomization() {
    const [value, setValue] = useState<number[]>([10, 20])
    function preventHorizontalKeyboardNavigation(event: KeyboardEvent) {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault()
        }
    }

    const marks = [
        {
            label: "very dissatisfied", value: 10,
        },
        {
            label: "somewhat dissatisfied", value: 20,
        },
        {
            label: "neutral", value: 30,
        },
        {
            label: "satisfied", value: 40,
        },
        {
            label: "very satisfied", value: 50
        }
    ]
    return (
        <>
            <Slider
                // disabled
                min={10}
                max={50}
                step={10}
                aria-label={"Product Review Feedback"}
                getAriaValueText={(value) => (`${value}% Satisfied`)}
                onKeyDown={preventHorizontalKeyboardNavigation}
                value={value}
                marks={marks}
                disableSwap
                onChange={(_event, newValue) => { setValue(newValue as number[]) }}
                sx={{
                    color: "warning.main",
                    height: 13,
                    width: "80%",
                    "&.Mui-disabled": {
                        color: "#64748B",
                        "& .MuiSlider-thumb": {
                            bgcolor: "#CBD5E1"

                        },
                        "& .MuiSlider-rail": {
                            bgcolor: "#64748B"
                        },


                    },
                    "&:not(.Mui-disabled)": {
                        "& .MuiSlider-rail": {
                            color: "primary.main",
                            opacity: 0.5,
                            height: 8,
                        },
                        "& .MuiSlider-markActive": {
                            bgcolor: "primary.main",
                            height: "15px !important",
                            width: "3px !important",
                        },
                        "& .MuiSlider-mark": {
                            borderRadius: 0,
                            height: 10,
                            width: 2,
                            ":not(.MuiSlider-markActive)": {
                                bgcolor: "secondary.main"
                            }
                        },
                        "& .MuiSlider-thumb[data-index='0']": {
                            bgcolor: "success.main",
                            width: 25,
                            height: 25,
                        },

                        "& .MuiSlider-thumb[data-index='1']": {
                            bgcolor: "secondary.main",
                            width: 25,
                            height: 25,
                        },
                        "& .MuiSlider-markLabelActive": {
                            color: "primary.main",
                            fontFamily: "Verdana",
                            fontSize: 14
                        },
                        "& .MuiSlider-markLabel:not(.MuiSlider-markLabelActive)": {
                            color: "#334155",
                            fontFamily: "verdana",
                            fontSize: 12
                        }
                    },

                }}
            />
        </>
    )
}
