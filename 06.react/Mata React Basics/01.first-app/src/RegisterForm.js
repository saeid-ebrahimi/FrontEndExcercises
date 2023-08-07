import {useState} from "react";
// useState Hook
export default function RegisterForm(){
    const [form, setForm] = useState({
        firstName: "Luke",
        lastName:"Jones",
        email: "lukeJones@sculpture.com"
    });
    return (
        <>
            <label>
                First Name:
                <input
                    value={form.firstName}
                    onChange={e=>{
                    setForm({
                        ...form,
                        firstName: e.target.value
                    })}
                    }
                    type="text"/>
            </label>
            <label>
                Last Name:
                <input
                    value={form.lastName}
                    onChange={e=> setForm({
                        ...form,
                        lastName: e.target.value
                    })}
                    type="text"
                />
            </label>
            <label >
                Email:
                <input
                    value={form.email}
                    onChange={e=> setForm(
                        {
                            ...form,
                            email:e.target.value
                        })
                    }
                    type="text"/>
            </label>
            <p>
                {form.firstName}{" "}{form.lastName}{" "}({form.email})
            </p>
        </>
    )
}