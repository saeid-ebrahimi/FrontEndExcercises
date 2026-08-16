import { TextField } from "@mui/material";
import { useField } from "./useField"

export function UserNameField() {
    const name = useField({
        initialValue: "",
        validate: (value) => {
            if (!value.trim()) {
                return "Name is required";
            }

            if (value.length < 3) {
                return "Name must be at least 3 characters";
            }

            return undefined;
        }
    })
    return (
        <TextField
            label={"name"}
            value={name.value}
            onChange={name.onChange}
            onBlur={name.onBlur}
            error={Boolean(name.error)}
            helperText={name.error}
        />
    )
}
