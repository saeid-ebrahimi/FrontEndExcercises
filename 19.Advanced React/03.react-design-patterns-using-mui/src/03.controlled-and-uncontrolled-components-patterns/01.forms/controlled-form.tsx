import { Button, TextField } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
export function ControlledForm() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [nameError, setNameError] = useState("");
    const [ageError, setAgeError] = useState("");

    async function submitHandler(event: FormEvent) {
        event.preventDefault();
        console.log(name);
        console.log(age);
    }

    useEffect(() => {
        if (name.trim()?.length < 1) {
            setNameError("name cannot be empty")
        } else {
            setNameError("")
        }
        if (age.trim()?.length < 1) {
            setAgeError("age cannot be empty")
        } else {
            setAgeError("")
        }
    }, [name, age])

    return <>
        <form style={{
            margin: 50,
            display: "flex",
            flexDirection: "column",
            gap: 16,
        }} onSubmit={submitHandler}>
            <TextField name={"name"} helperText={nameError} placeholder={"name"} value={name} onChange={(evt) => setName(evt.target.value)} />
            <TextField helperText={ageError} name={"age"} placeholder={"age"} value={age} onChange={(evt) => setAge(evt.target.value)} />
            <Button variant={"contained"} type={"submit"}>Submit</Button>
        </form>
    </>

}