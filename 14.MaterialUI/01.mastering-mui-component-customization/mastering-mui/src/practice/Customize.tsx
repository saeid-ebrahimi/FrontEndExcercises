import {
    Box,
    FormControl,
    FormHelperText,
    Select,
    MenuItem,
    ListSubheader,
    InputLabel,
    formLabelClasses,
    inputLabelClasses,
} from "@mui/material";

import { useState } from "react";

export function Customize() {
    const [value, setValue] = useState<string[]>([])
    const options = ["trial", "personal", "community", "enterprise", "largeCompany"]

    console.log(value);


    return <Box sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "1rem",
    }}>
        <FormControl
            error
            // disabled
            sx={{
                [`& .${formLabelClasses.root}`]: {
                    color: "#6D28D9",
                    fontFamily: "Verdana",
                    [`&.${formLabelClasses.focused}`]: {
                        color: "#6D28D9",
                    },
                    [`&:not(.Mui-focused).${inputLabelClasses.shrink}`]: {
                        color: "#047857",
                    },
                    [`&.${formLabelClasses.error}`]: {
                        color: "#B45309",
                    },
                    [`&.${formLabelClasses.disabled}`]: {
                        color: "#D8B4FE",
                    },
                },
                "& .MuiSelect-root": {
                    bgcolor: "#ECFDF5",
                    "&.Mui-disabled": {
                        bgcolor: "white"
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#047857",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#10B981",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#6D28D9",
                    },
                }
            }}
        >
            <InputLabel id="plan">Plan</InputLabel>
            <Select
                MenuProps={{
                    PaperProps: {
                        sx: {
                            bgcolor: "#ECFDF5",
                        }
                    }
                }}
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
};