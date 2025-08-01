import { useState, type ChangeEvent, type Dispatch, type FormEvent, type FormEventHandler, type SetStateAction } from "react"
import type { TUserFormProps } from "./types"

export default function UserForm({ users, setUsers }: TUserFormProps) {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    function handleChangeFieldValue(event: ChangeEvent<HTMLInputElement>, dispatch: Dispatch<SetStateAction<string>>) {
        dispatch(event.target.value);
    }

    function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const user = {
            id: Date.now(),
            name,
            email,
        }
        setUsers([...users, user])
    }

    return <form onSubmit={handleSubmitForm}>
        <input placeholder={"Name"} type={"text"} value={name} onChange={(evt) => { handleChangeFieldValue(evt, setName) }} />
        <input placeholder={"Name"} type={"email"} value={email} onChange={(evt) => { handleChangeFieldValue(evt, setEmail) }} />
        <button type="submit">Add User</button>
    </form>
}