import React, { FormEvent, useState } from "react"


function UserForm() {
    const [email, setEmail] = useState<string>()
    const [name, setName] = useState<string>()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(name, email);
    }

    return <form onSubmit={handleSubmit} >
        <div>
            <label>Name</label>
            <input value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
            <label>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <button>Add User</button>
    </form>
}

export default UserForm;