import { useEffect, useState } from "react";

export function ControlledForm() {
    const [error, setError] = useState("")
    const [name, setName] = useState("");
    const [age, setAge] = useState("")

    useEffect(() => {
        if (name.length < 1) {
            console.log("name cannot be empty");
            setError("name cannot be empty")
        } else {
            setError("")
        }
        if (age.length < 1) {
            console.log("age cannot be empty");
            setError("age cannot be empty")
        } else {
            setError("")
        }
    }, [name, age])

    return <form >
        {error && <p>{error}</p>}
        <input name={"name"} type={"text"} placeholder={"Name"}
            onChange={(evt) => setName(evt.target.value)} />
        <input name={"age"} type={"number"} placeholder={"Name"}
            onChange={(evt) => setAge(evt.target.value)} />
    </form>
}