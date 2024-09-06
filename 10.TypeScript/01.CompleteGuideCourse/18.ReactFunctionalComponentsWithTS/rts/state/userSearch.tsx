import React, {useState} from "react";

const users = [
    {name: "Sarah", age:20},
    {name: "Alex", age:25},
    {name: "Michael", age: 22},
];
const UserSearch: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [user, setUser] = useState<{name:string, age: number} | undefined>({})
    const onClick = (evt) => {
        evt.preventDefault();
        const foundUser = users.find((user) => {
            return user.name === name;
        })
        setUser(foundUser);
    }
    return <div>
        User Search
        <input value={name} onChange={evt => setName(evt.target.value)}/>
        <button onClick={onClick}>Find User</button>
        <p>{user && user.name}</p>
        </div>
};

export default UserSearch;