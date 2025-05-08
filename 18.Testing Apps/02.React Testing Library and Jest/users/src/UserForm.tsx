import { FormEvent, useState } from "react"
import { User } from "./App"


function UserForm({ onAddUser }: { onAddUser: (user: User) => void }) {
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onAddUser({ name, email })
        setEmail("")
        setName("")
    }

    return <form className={"form"} onSubmit={handleSubmit} >
        <div>
            <label>Name:</label>
            <input value={name} style={{ marginLeft: 10 }} onChange={e => setName(e.target.value)} />
        </div>
        <div>
            <label>Email:</label>
            <input value={email} style={{ marginLeft: 10 }} onChange={e => setEmail(e.target.value)} />
        </div>
        <button style={{ width: "100%" }}>Add User</button>
    </form>
}

export default UserForm;