import { useState } from "react";
import { BrightnessHigh as BrightnessHighIcon, BrightnessLow as BrightnessLowIcon } from "@mui/icons-material";
import { Rating, ratingClasses, svgIconClasses } from "@mui/material";

export function RatingCustomizationUsingClassesObject() {
    const [brightnessValue, setBrightnessValue] = useState<number>(0.5)

    return (
        <Rating
            value={brightnessValue}
            onChange={(_event, newValue) => { newValue && newValue >= 0 && setBrightnessValue(newValue) }}
            emptyIcon={<BrightnessLowIcon />}
            icon={<BrightnessHighIcon />}
            name={"brightness"}
            onChangeActive={(_event, newValue) => {
                console.log(`Hovered value is ${newValue}`);
            }}
            precision={0.5}
            sx={{
                [`& .${svgIconClasses.root}`]: {
                    fontSize: 30,
                    margin: "0 4px",
                },
                [`& .${ratingClasses.iconFilled}`]: {
                    color: "#86198F"
                },
                [`& .${ratingClasses.iconEmpty}`]: {
                    color: "#E9D5FF"
                }
            }}
        />
    )
}
