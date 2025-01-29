import { BrightnessHigh as BrightnessHighIcon, BrightnessLow as BrightnessLowIcon } from "@mui/icons-material";
import { Rating } from "@mui/material";
import { useState } from "react";

export function RatingFunctionality() {
    const [value, setValue] = useState(1.5)
    const [brightnessValue, setBrightnessValue] = useState(0.5)
    const [customerRate, setCustomerRate] = useState(1)
    const labels = ["Bad", "Okay", "Good", "Great", "Amazing"]
    console.log(value);
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", }}>
            <Rating
                max={10}
                value={value}
                onChange={(_event, newValue) => setValue(newValue as number)}
                // readOnly
                // disabled
                highlightSelectedOnly
                size={"large"}
                precision={0.25}
                onChangeActive={(_event, newValue) => {
                    console.log(`Hovered value is ${newValue}`);
                }}
            />
            <Rating
                value={brightnessValue}
                onChange={(_event, newValue) => setBrightnessValue(newValue as number)}
                emptyIcon={<BrightnessLowIcon />}
                icon={<BrightnessHighIcon />}
                name={"brightness"}
                size={"large"}
                precision={0.5}
                onChangeActive={(_event, newValue) => {
                    console.log(`Hovered value is ${newValue}`);
                }}
            />
            <div>
                <Rating
                    value={customerRate}
                    onChange={(_event, newValue) => setCustomerRate(newValue as number)}
                    size={"large"}
                    onChangeActive={(_event, newValue) => {
                        console.log(`Hovered value is ${newValue}`);
                    }}
                />
                <p>{customerRate >= 1 && customerRate <= 5 && labels[customerRate - 1]}</p>
            </div>
        </div>
    )
}
