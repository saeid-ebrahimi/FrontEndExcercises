import { Autocomplete, Chip, TextField } from "@mui/material";

export function FruitsAutocomplete() {

    const fruitOptions = ["Apple", "Banana", "Pear", "Orange", "Lemon", "Pineapple"]
    return (
        <Autocomplete multiple id="fruits" options={fruitOptions} renderInput={(params) => <TextField {...params} label="Fruit" placeholder={"Favorite Fruits..."} />} />
    )
}