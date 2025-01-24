import { Autocomplete, TextField, Paper, type PaperProps } from "@mui/material";
import { useEffect, useState } from "react";
import { TOP_TEN_MOVIES } from "./constants";

function CustomPaper(props: PaperProps) {
    return <Paper sx={{
        bgcolor: "#EDE9FE",
    }} {...props} />
}
export function CustomizedAutocomplete() {
    const [value, setValue] = useState<string>()
    useEffect(() => {
        console.log(value);
    }, [value])
    return <Autocomplete
        freeSolo
        slots={{
            paper: CustomPaper,
        }}
        sx={{
            width: "20rem",
            bgcolor: "#EDE9FE",
            borderRadius: "1rem",
            "& .MuiAutocomplete-input": {
                height: "3rem",
            },
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#5B21B6",
                borderRadius: "1rem",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#6D28D9"
            }

        }}
        options={TOP_TEN_MOVIES.sort((a, b) => a.year >= b.year ? 1 : -1)}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        getOptionDisabled={(option) => option.year <= 1960}
        //@ts-ignore
        onBlur={(event) => event.target?.value !== value ? setValue(event.target?.value) : null}
        getOptionLabel={(option) => typeof option === "string" ? option : option.name}
        onChange={(_event, newValue) => typeof newValue === "string" ? setValue(newValue) : setValue(newValue?.name)}
        groupBy={(option) => (option.year < 2000 ? "20 Century" : "21 Century")}
        renderInput={
            (params) => <TextField {...params} label={"Movies"} placeholder={"Select a Movie..."} />} />
}