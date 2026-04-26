import { useState } from "react";
import { BrightnessHigh as BrightnessHighIcon, BrightnessLow as BrightnessLowIcon } from "@mui/icons-material";
import { Rating } from "@mui/material";

export function RatingCustomization() {
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
                // [`& .MuiRating-icon `]: {
                //     color: "red",
                //     "& > svg": {
                //         fontSize: "2rem",
                //     }
                // },
                "&.MuiRating-root": {
                    gap: 1,
                },
                "& .MuiSvgIcon-root": {
                    fontSize: 30,
                },
                "& .MuiRating-iconFilled": {
                    color: "#86198F"
                },
                "& .MuiRating-iconEmpty": {
                    color: "#E9D5FF"
                }
            }}
        />
    )
}
