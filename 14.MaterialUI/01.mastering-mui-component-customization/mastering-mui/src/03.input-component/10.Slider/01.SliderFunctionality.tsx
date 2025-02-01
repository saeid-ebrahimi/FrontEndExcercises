import { Slider } from "@mui/material";
import { type KeyboardEvent, useState } from "react";

export function SliderFunctionality() {
    const [value, setValue] = useState(20)
    const [rangedValue, setRangedValue] = useState([10, 30, 70])
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

    function preventHorizontalKeyboardNavigation(event: KeyboardEvent) {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault()
        }
    }
    return (
        <>
            <Slider
                // disabled
                // size="small"
                valueLabelDisplay={"auto"}
                // valueLabelFormat={}
                // step={10}
                // min={10}
                // marks
                max={50}
                sx={{
                    height: 500,
                    [`& input[type="range"]`]: {
                        WebkitAppearance: "slider-vertical"
                    }
                }}
                aria-label={"Product Review Feedback"}
                getAriaValueText={(value) => (`${value}% Satisfied`)}
                onKeyDown={preventHorizontalKeyboardNavigation}
                marks={marks}
                step={10}
                value={value}
                color={"success"}
                orientation={"vertical"}
                onChange={(_event, newValue) => { setValue(newValue as number) }}

            />
            <Slider
                valueLabelDisplay={"auto"}
                max={50}
                marks
                disableSwap
                track={false}
                // track={"inverted"}
                step={10}
                // scale is used just for view

                scale={(value) => (3 * value)}
                value={rangedValue}
                color={"success"}
                onChange={(_event, newValue) => { setRangedValue(newValue as number[]) }}

            />
        </>
    )
}
