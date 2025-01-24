import { Autocomplete, Paper, PaperProps, TextField, autocompleteClasses, chipClasses, inputClasses, inputLabelClasses, outlinedInputClasses } from "@mui/material";

const textStyles = {
    color: "#fff",
    fontSize: "1rem",
    fontFamily: "Verdana",
}
const CustomPaper = (props: PaperProps) => {
    return (
        <Paper sx={{
            bgcolor: "#020617",
            [`& .${autocompleteClasses.option}`]: {
                ...textStyles,
                borderBottom: "1px solid #fff"
            },
            [`& .${autocompleteClasses.option}:last-child`]: {
                borderBottom: "none"
            },
            [`& .${autocompleteClasses.groupLabel}`]: {
                ...textStyles,
                bgcolor: "#4C0519",
                color: "white"
            }
        }} >
            {props.children}
        </Paper >
    )
}
export function FruitsAutocomplete() {
    const fruitOptions = [
        { name: "Apple", year: 2022 },
        { name: "Banana", year: 2020 },
        { name: "Pear", year: 2020 },
        { name: "Orange", year: 2021 },
        { name: "Lemon", year: 2021 },
        { name: "Pineapple", year: 2022 }
    ]
    return (
        <>
            <Autocomplete
                multiple
                id="fruits"
                sx={{
                    [`& .${autocompleteClasses.tag}`]: {
                        bgcolor: "#020617",
                        color: "white"
                    },

                    [`& .${autocompleteClasses.clearIndicator}`]: {
                        color: "#020617",
                    },
                    [`& .${autocompleteClasses.popupIndicator}`]: {
                        color: "#020617",
                    },
                    [`& .${inputLabelClasses.focused}`]: {
                        color: "#020617",
                    },
                    [`& .${chipClasses}`]: {
                        bgcolor: "#020617",
                        color: "white"
                    },
                    [`& .${chipClasses.deleteIcon}`]: {
                        color: "white"
                    },
                    [`& .${chipClasses.deleteIcon}:hover`]: {
                        color: "#94A3B8",
                    },
                    [`& .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: "#020617",
                    },
                    [`& .${inputClasses}`]: {
                        color: "#020617"
                    },


                }}
                groupBy={(option) => option.year.toString()}
                getOptionLabel={(option) => option.name}
                noOptionsText={<span style={{ ...textStyles }}>Custom Response</span>}
                PaperComponent={CustomPaper}
                options={fruitOptions.sort((a, b) => (a.year - b.year))}
                renderInput={(params) => <TextField {...params} label="Fruit" placeholder={"Favorite Fruits..."} />} />

        </>
    )
}