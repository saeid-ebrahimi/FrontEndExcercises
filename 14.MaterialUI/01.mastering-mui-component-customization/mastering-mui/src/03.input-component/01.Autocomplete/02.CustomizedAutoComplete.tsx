import { Autocomplete, TextField, Paper, type PaperProps } from "@mui/material";
import { useEffect, useState } from "react";
import { TOP_TEN_MOVIES } from "./constants";
import { DeleteForever as DeleteForeverIcon, KeyboardArrowDown as KeyboardArrowDownIcon } from "@mui/icons-material";
import { MovieOption } from "./types";
const textStyles = {
    color: "#2E1065",
    fontFamily: "verdana",
    fontSize: "1.1rem",
}

function CustomPaper(props: PaperProps) {
    return <Paper
        sx={{
            bgcolor: "#EDE9FE",
            "& .MuiAutocomplete-option": {
                borderBottom: "1px solid #2E1065",
                "&:last-child": {
                    borderBottom: "none",
                },
                "&:hover": {
                    bgcolor: "#2E1065",
                    color: "white"
                },
                ...textStyles,
            },
            "& .MuiAutocomplete-groupLabel": {
                bgcolor: "#8B5CF6",
                ...textStyles,
                color: "white",
            }
        }}
        {...props} />
}


export function CustomizedAutocomplete() {
    const [value, setValue] = useState<MovieOption[]>([])
    useEffect(() => {
        console.log(value);
    }, [value])
    return <Autocomplete
        multiple
        noOptionsText={<span style={textStyles}>Item Not found!</span>}
        slotProps={{
            chip: {
                sx: {
                    bgcolor: "#C4B5FD",
                    color: "#2E1065",
                    fontFamily: "verdana",
                    "& > svg": {
                        fill: "#2E1065"
                    }
                },
                deleteIcon: <DeleteForeverIcon />
            }
        }}
        slots={{
            paper: CustomPaper,
        }}
        sx={{
            width: "30rem",
            bgcolor: "#EDE9FE",
            borderRadius: "1rem",
            "& .MuiAutocomplete-input": {
                height: "3rem",
                "&::placeholder": {
                    color: "#2E1065",
                }
            },
            "& > div > label": {
                ...textStyles,
                "&.Mui-focused": {
                    pt: 0,
                    ...textStyles
                },
            },
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#5B21B6",
                borderRadius: "1rem",
                "& > legend > span": {
                    mb: "1rem",
                }
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#6D28D9"
            },
            "& .MuiAutocomplete-clearIndicator": {
                "& > svg": {
                    fill: "#6D28D9"
                }
            },
            "& .MuiAutocomplete-popupIndicator": {
                "& > svg": {
                    fill: "#6D28D9",
                }
            }

        }}
        groupBy={(option) => (option.year < 2000 ? "20 Century" : "21 Century")}
        options={TOP_TEN_MOVIES.sort((a, b) => a.year >= b.year ? 1 : -1)}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        getOptionDisabled={(option) => option.year <= 1960}
        clearIcon={< DeleteForeverIcon />}
        popupIcon={< KeyboardArrowDownIcon />}
        //@ts-ignore
        onBlur={(event) => event.target?.value !== value ? setValue(event.target?.value) : null}
        getOptionLabel={(option) => typeof option === "string" ? option : option.name}
        onChange={(_event, newValue) => setValue(newValue)}
        renderInput={
            (params) => <TextField {...params} label={"Movies"} placeholder={"Select a Movie..."} />} />
}