import { Autocomplete, TextField } from "@mui/material";
// import { FRUITS } from "./constants";
import { TOP_TEN_MOVIES } from "./constants";
import { useEffect, useState } from "react";
import { type MovieOption } from "./types";
function ComboBox() {
    const [value, setValue] = useState<MovieOption[] | null>(null)

    useEffect(() => {
        console.log(value);
    }, [value])

    return <div style={{ marginTop: "20px", }}>
        <Autocomplete
            multiple
            // disabled
            size={"small"}
            options={TOP_TEN_MOVIES.sort((a, b) => a.year >= b.year ? 1 : -1)}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            getOptionDisabled={(option) => option.year <= 1960}
            limitTags={2}
            onChange={(_event, newValue) => setValue(newValue)
            }
            getOptionLabel={(option) => `${option.name} - ${option.year} `}
            groupBy={(option) => (option.year < 2000 ? "20 Century" : "21 Century")}
            renderOption={(props, option) => (
                //@ts-ignore
                <div {...props} key={props.key} style={{
                    backgroundColor: option.year >= 2000 ? "#7E22CE" : "",
                    color: option.year >= 2000 ? "white" : "",
                }}>
                    {option.name}
                </div>
            )}
            renderInput={(params) => <TextField {...params} label={"Movies"} placeholder={"Select a Movie..."} />} />
    </div>
}

function FreeSoloAutocomplete() {
    // with custom entered options
    const [value, setValue] = useState<string>()
    useEffect(() => {
        console.log(value);
    }, [value])
    return <Autocomplete
        freeSolo
        size={"small"}
        options={TOP_TEN_MOVIES.sort((a, b) => a.year >= b.year ? 1 : -1)}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        getOptionDisabled={(option) => option.year <= 1960}
        //@ts-ignore
        onBlur={(event) => event.target?.value !== value ? setValue(event.target?.value) : null}
        getOptionLabel={(option) => typeof option === "string" ? option : option.name}
        onChange={(_event, newValue) => typeof newValue === "string" ? setValue(newValue) : setValue(newValue?.name)}
        groupBy={(option) => (option.year < 2000 ? "20 Century" : "21 Century")}
        renderInput={(params) => <TextField {...params} label={"Movies"} placeholder={"Select a Movie..."} />} />

}


export function AutocompleteDemo() {
    return <>
        <ComboBox />
        <FreeSoloAutocomplete />
    </>
}