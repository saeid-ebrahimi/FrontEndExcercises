import { Autocomplete, Chip, rgbToHex, TextField } from "@mui/material";

export function FruitsAutocomplete() {

    const fruitOptions = ["Apple", "Banana", "Pear", "Orange", "Lemon", "Pineapple"]
    return (
        <Autocomplete open={true} multiple id="fruits" options={fruitOptions} ChipProps={{
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
            ListboxProps={{
                sx: {
                    background: "black",
                    color: "white",
                    "& .MuiAutocomplete-option": {
                        "&:hover": {
                            backgroundColor: "#00cccc"
                        }
                    }
                }
            }}

            renderInput={(params) => <TextField {...params} label="Fruit" placeholder={"Favorite Fruits..."} />} />
    )
}