import { Brightness1, Brightness2, BrightnessHigh, BrightnessLow } from "@mui/icons-material";
import {
    Box,
    Rating

} from "@mui/material";
import { useState } from "react";


export function Demo() {
    const [value, setValue] = useState<number | null>(1)
    console.log(value);
    const labels = ["Bad", "Okay", "Good", "Great", "Amazing"]

    return <Box sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "1rem",
    }}>
        <Rating
            max={5}
            // readOnly
            // highlightSelectedOnly
            emptyIcon={<BrightnessLow />}
            icon={<BrightnessHigh />}
            size={"large"}
            value={value}
            precision={0.5}
            onChangeActive={(_event, newValue) => {
                console.log(`Hovered value is ${newValue}`);
            }}
            onChange={(_event, newValue) => setValue(newValue)} />
        {value !== null && <p>{value >= 1 && value <= 5 && labels[value - 1]}</p>}

    </Box>
}