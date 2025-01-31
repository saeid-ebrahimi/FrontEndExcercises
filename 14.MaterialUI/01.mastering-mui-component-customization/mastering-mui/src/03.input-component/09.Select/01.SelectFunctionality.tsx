import { FormControl, FormHelperText, InputLabel, ListSubheader, MenuItem, NativeSelect, Select } from "@mui/material";
import { useState } from "react";

export function SelectFunctionality() {
    const [value, setValue] = useState("")
    const [nativeValue, setNativeValue] = useState("")
    const [values, setValues] = useState<string[]>([])
    const options = ["trial", "personal", "community", "enterprise", "largeCompany"]

    return (
        <>
            <FormControl
                // error
                // disabled
                sx={{ minWidth: "400px" }}

            >
                <InputLabel id="plan" >Plan</InputLabel>
                {/* Label will replace the placeholder*/}
                <Select
                    // displayEmpty
                    // renderValue={(value) => (value ? `${value} Plan` : "Please Select Your Plan...")}
                    // variant={"standard"}
                    // variant={"filled"}
                    // disabled
                    // readOnly
                    // error
                    label={"Plan"}
                    labelId={"plan"}
                    renderValue={(value) => `${value.charAt(0).toUpperCase()}${value.slice(1)} Plan`}
                    value={value}
                    color={"secondary"}
                    onChange={(event) => { setValue(event.target.value) }}
                >
                    <ListSubheader>Membership Plans</ListSubheader>
                    {options.map((option) => (
                        <MenuItem key={option} value={option} >
                            {`${option.charAt(0).toUpperCase()}${option.slice(1)}`}
                        </MenuItem>
                    ))}
                </Select >
                <FormHelperText>{"select your membership plan"}</FormHelperText>
            </FormControl>
            <FormControl
                // error
                // disabled
                sx={{ minWidth: "400px" }}

            >
                <InputLabel htmlFor="plan2" >Plan</InputLabel>
                {/* Label will replace the placeholder*/}
                <NativeSelect
                    // disabled
                    // readOnly
                    // error
                    placeholder={"Select The Plan Please..."}
                    id={"plan2"}
                    value={nativeValue}
                    color={"secondary"}
                    onChange={(event) => { setNativeValue(event.target.value) }}
                >
                    <optgroup label={"Membership Plans"}>
                        {options.map((option) => (
                            <option key={option} value={option} >
                                {`${option.charAt(0).toUpperCase()}${option.slice(1)}`}
                            </option>
                        ))}
                    </optgroup>
                </NativeSelect >
                <FormHelperText>{"select your membership plan"}</FormHelperText>
            </FormControl>
            <Select
                displayEmpty
                renderValue={(value) => (value?.length ? `${value} Plan/Plans` : "Please Select The Plan/Plans")}
                multiple
                value={values}
                color={"secondary"}
                onChange={(event) => { event.target.value && setValues(event.target.value as string[]) }}
            >
                {options.map((option) => (
                    <MenuItem key={option} value={option} >
                        {`${option.charAt(0).toUpperCase() + option.slice(1)} Plan`}
                    </MenuItem>
                ))}
            </Select >
        </>
    )
}
