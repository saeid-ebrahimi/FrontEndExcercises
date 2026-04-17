import { Autocomplete, PaperProps, Paper, TextField, Typography, autocompleteClasses, inputLabelClasses } from "@mui/material";
import { useEffect, useState } from "react"
import { TOP_TEN_MOVIES } from "../03.input-component/01.Autocomplete/constants";
import { DeleteForeverRounded, KeyboardArrowDown } from "@mui/icons-material";

export type MovieOption = {
    name: string;
    year: number;
};

const textStyles = {
    color: "#2E1065",
    fontFamily: "verdana",
    fontSize: "1.1rem",
}

function CustomPaper(props: PaperProps) {
    return <Paper sx={{
        bgcolor: "#EDE9FE",
        [`& .${autocompleteClasses.groupLabel}`]: {
            bgcolor: "#8B5CF6",
            ...textStyles,
            color: "white",

        },
        [`& .${autocompleteClasses.option}`]: {
            borderBottom: "1px solid #2E1065",
            "&:last-child": {
                border: "none",
            },
            "&:hover": {
                bgcolor: "#2E1065",
                color: "white"
            }
        }

    }} {...props} />
}

export function CustomizeUsingComponentClasses() {
    const [value, setValue] = useState<MovieOption[] | null>(null)

    useEffect(() => {
        console.log(value);
    }, [value])

    return <>
        <Autocomplete
            multiple
            size={"medium"}
            options={TOP_TEN_MOVIES.sort((a, b) => a.year - b.year)}
            noOptionsText={<Typography component={"span"} sx={textStyles}>No item found</Typography>}
            onChange={(event, newValue) => {
                console.log(event)
                setValue(newValue)
            }}
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
                    deleteIcon: <DeleteForeverRounded />
                }
            }}
            slots={{
                paper: CustomPaper,
            }}
            sx={{
                bgcolor: "#EDE9FE",
                borderRadius: "1rem",
                [`& .${autocompleteClasses.input}`]: {
                    "&::placeholder": {
                        color: "#2E1065",
                    }
                },
                [`& .${autocompleteClasses.clearIndicator}`]: {
                    "& > svg": {
                        fill: "#6D28D9",
                    },
                    "&:hover": {
                        bgcolor: "#C4B5FD"
                    }
                },
                [`& .${autocompleteClasses.popupIndicator}`]: {
                    "& > svg": {
                        fill: "#6D28D9",
                    },
                    "&:hover": {
                        bgcolor: "#C4B5FD"
                    }
                },

                [`& .${inputLabelClasses.outlined}`]: {
                    ...textStyles,
                    [`&.${inputLabelClasses.focused}`]: {
                        ...textStyles,
                    },
                },

                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#5B21B6",
                    borderRadius: "1rem",
                    "& > legend > span": {
                        mb: "1rem",
                    },
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#6D28D9"
                },

            }}
            isOptionEqualToValue={
                (option, value) => option.name === value.name
            }
            limitTags={2}
            getOptionDisabled={(option) => option.year < 1980}
            getOptionLabel={(option) => `${option.name} - ${option.year}`}
            groupBy={(option) => (option.year < 2000 ? "20th Century" : "21 Century")}
            renderOption={(props, option) => (
                <li role="option" {...props} key={props.key}>
                    {option.name}
                </li>
            )}
            clearIcon={<DeleteForeverRounded />}
            popupIcon={<KeyboardArrowDown />}
            renderInput={(params) =>
                <TextField {...params} label={"Movies"} placeholder={"Select a Movie..."} />}
        />
    </>
    return <></>
}