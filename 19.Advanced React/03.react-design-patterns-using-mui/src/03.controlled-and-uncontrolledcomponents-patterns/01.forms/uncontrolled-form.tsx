import { TextField } from "@mui/material";

export function UnControlledForm() {
    async function submitHandler() {

    }
    return <>
        <form onSubmit={submitHandler}>
            <TextField name={"name"} placeholder={"name"} />
        </form>
    </>
}