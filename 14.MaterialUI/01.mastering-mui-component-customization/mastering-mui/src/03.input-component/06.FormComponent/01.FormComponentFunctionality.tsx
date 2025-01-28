import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from "@mui/material";

export function FormComponentFunctionality() {
    return (
        <div>
            <FormControl
                // required
                component={"fieldset"}
                margin={"dense"}
                color={"secondary"}
            // error
            >
                <FormLabel>My Favorite Movies</FormLabel>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label={"Save Private Ryan"} />
                    <FormControlLabel control={<Checkbox />} label={"The God Father"} />
                    <FormControlLabel control={<Checkbox />} label={"The Oppenheimer"} />
                </FormGroup>
                <FormHelperText>Please select your favorite movies</FormHelperText>
            </FormControl>
        </div>
    )
}