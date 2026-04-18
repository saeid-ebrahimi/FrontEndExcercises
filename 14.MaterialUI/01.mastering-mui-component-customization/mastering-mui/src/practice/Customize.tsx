import { BrightnessHigh, BrightnessLow } from "@mui/icons-material";
import {
    Box,
    ratingClasses, svgIconClasses,
    Rating,
} from "@mui/material";

import { useState } from "react";

export function Customize() {
    const [brightnessValue, setBrightnessValue] = useState<number>(0.5)

    return <Box sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "1rem",
    }}>
        <Rating
            value={brightnessValue}
            onChange={(_event, newValue) => { newValue && newValue >= 0 && setBrightnessValue(newValue) }}
            emptyIcon={<BrightnessLow />}
            icon={<BrightnessHigh />}
            name={"brightness"}
            onChangeActive={(_event, newValue) => {
                console.log(`Hovered value is ${newValue}`);
            }}
            precision={0.5}
            sx={{
                [`&.${ratingClasses.root}`]: {
                    gap: 1,
                },
                // "& .MuiSvgIcon-root": {
                //     fontSize: "2.7rem",
                // },
                // [`& .${ratingClasses.icon}`]: {
                //     color: "red",
                //     "& > svg": {
                //         fontSize: "2rem",
                //     }
                // },
                [`& .MuiRating-icon `]: {
                    color: "red",
                    "& > svg": {
                        fontSize: "2rem",
                    }
                },
                [`&.${ratingClasses.iconEmpty}`]: {
                    color: "#E9D5FF",
                },
                [`& .${ratingClasses.iconFilled}`]: {
                    color: "#86198F",
                },
            }}
        />
    </Box >
};