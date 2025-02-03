import { Slider, sliderClasses } from "@mui/material"
import { type KeyboardEvent, useState } from "react"


export function SliderCustomizationUsingClassesObject() {
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
                    minWidth: "600px",
                    [`&.${sliderClasses.disabled}`]: {
                        color: "#64748B",
                        [`& .${sliderClasses.thumb}`]: {
                            bgcolor: "#CBD5E1"
                        },
                        [`& .${sliderClasses.rail}`]: {
                            bgcolor: "#64748B",
                            opacity: 0.5
                        }
                    },
                    [`&:not(.${sliderClasses.disabled})`]: {
                        [`& .${sliderClasses.rail}`]: {
                            color: "primary.main",
                            opacity: 0.5,
                            height: 8,
                        },
                        [`& .${sliderClasses.markActive}`]: {
                            bgcolor: "primary.main",
                            height: "15px !important",
                            width: "3px !important",
                        },
                        [`& .${sliderClasses.mark}`]: {
                            borderRadius: 0,
                            height: 10,
                            width: 2,
                            [`&:not(.${sliderClasses.markActive})`]: {
                                bgcolor: "secondary.main"
                            }
                        },
                        [`& .${sliderClasses.thumb}[data-index='0']`]: {
                            bgcolor: "success.main",
                            width: 25,
                            height: 25,
                        },
                        [`& .${sliderClasses.thumb}[data-index='1']`]: {
                            bgcolor: "secondary.main",
                            width: 25,
                            height: 25,
                        },
                        [`& .${sliderClasses.markLabelActive}`]: {
                            color: "primary.main",
                            fontFamily: "Verdana",
                            fontSize: 14
                        },
                        [`& .${sliderClasses.markLabel}:not(.${sliderClasses.markLabelActive})`]: {
                            color: "#334155",
                            fontFamily: "verdana",
                            fontSize: 12
                        }
                    }
                }}
            />
        </>
    )
}
