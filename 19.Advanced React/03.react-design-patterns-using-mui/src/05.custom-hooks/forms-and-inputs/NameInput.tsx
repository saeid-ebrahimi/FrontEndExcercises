import { TextField } from "@mui/material";
import { useInput } from "./useInput";

export function NameInput() {
    const name = useInput("");

    return (
        <TextField label={"name"} value={name.value} onChange={name.onChange} />
    )
}