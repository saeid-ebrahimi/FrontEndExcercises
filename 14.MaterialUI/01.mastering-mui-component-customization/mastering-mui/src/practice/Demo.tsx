import { Brightness1, Brightness2, BrightnessHigh, BrightnessLow, ListSharp } from "@mui/icons-material";
import {
    Box,
    FormControl,
    FormHelperText,
    InputLabel,
    ListSubheader,
    MenuItem,
    Rating,
    Select

} from "@mui/material";
import { useState } from "react";


export function Demo() {
    const [value, setValue] = useState<string[]>([])
    const options = ["trial", "personal", "community", "enterprise", "largeCompany"]

    console.log(value);
    const labels = ["Bad", "Okay", "Good", "Great", "Amazing"]

    return <Box sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "1rem",
    }}>
        <FormControl
        // error
        // disabled
        >
            <InputLabel id="plan">Plan</InputLabel>
            <Select
                sx={{ minWidth: "400px" }}
                displayEmpty
                multiple
                label={"Plan"}
                labelId={"plan"}
                renderValue={(value) => (value?.length ? `${value.toString()} Plan/Plans` : "Please Select The Plan/Plans")}
                color="secondary"
                value={value}
                onChange={(event) => { setValue(event.target.value as string[]) }}
            >
                <ListSubheader>Membership Plans</ListSubheader>
                {options.map((option) =>
                    <MenuItem key={option} value={option}>
                        {`${option.charAt(0).toUpperCase()}${option.slice(1)}`}
                    </MenuItem>
                )}
            </Select>
            <FormHelperText>{"select your membership plan"}</FormHelperText>
        </FormControl>

    </Box>
}