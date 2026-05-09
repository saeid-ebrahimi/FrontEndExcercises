import { Button, TextField } from "@mui/material";
import { FormEvent, useRef } from "react";

export function UnControlledForm() {
    const nameInputRef = useRef<HTMLInputElement>(null)
    const ageInputRef = useRef<HTMLInputElement>(null)
    async function submitHandler(event: FormEvent) {
        event.preventDefault();
        console.log(nameInputRef?.current?.value);
        console.log(ageInputRef?.current?.value);
    }
    return <>
        <form style={{
            margin: 50,
            display: "flex",
            flexDirection: "column",
            gap: 16,
        }} onSubmit={submitHandler}>
            <TextField name={"name"} placeholder={"name"} slotProps={{
                htmlInput: {
                    ref: nameInputRef
                }
            }} />
            <TextField name={"age"} placeholder={"age"} slotProps={{
                htmlInput: {
                    ref: nameInputRef
                }
            }} />
            <Button variant={"contained"} type={"submit"}>Submit</Button>
        </form>
    </>
}