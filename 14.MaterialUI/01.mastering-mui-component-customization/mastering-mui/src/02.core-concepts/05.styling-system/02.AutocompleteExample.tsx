import { Autocomplete, Chip, Paper, PaperProps, rgbToHex, TextField } from "@mui/material";
import { PropsWithChildren } from "react";

const CustomPaper = (props: PaperProps) => {
    const { sx, ...otherProps } = props
    return (
        <Paper {...otherProps} sx={{
            ...sx,
            bgcolor: "black",
            color: "white",
            "& .MuiAutocomplete-option": {
                fontFamily: "cursive",
            },
        }}>
            {props.children}
        </Paper >
    )
}
export function FruitsAutocomplete() {

    const fruitOptions = ["Apple", "Banana", "Pear", "Orange", "Lemon", "Pineapple"]
    return (
        <>
            <Autocomplete
                multiple
                id="fruits"
                options={fruitOptions}
                ChipProps={{
                    sx:
                    {
                        background: "black",
                        "& .MuiChip-label": {
                            color: "white",
                            fontFamily: "Verdana",
                            fontSize: "0.9rem"
                        },
                        "& .MuiChip-deleteIcon": {
                            color: "white",
                        },
                    }
                }}
                // ListboxProps={{
                //     sx: {
                //         background: "black",
                //         color: "white",
                //         "& .MuiAutocomplete-option": {
                //             "&:hover": {
                //                 backgroundColor: "#00cccc"
                //             }
                //         }
                //     }
                // }}
                PaperComponent={CustomPaper}
                renderInput={(params) => <TextField {...params} label="Fruit" placeholder={"Favorite Fruits..."} />} />

        </>
    )
}