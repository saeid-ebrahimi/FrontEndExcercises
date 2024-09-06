import React, {useState, useRef, useEffect} from 'react';

const users = [
    {name:"Sarah", age: 20},
    {name: "Alex", age: 32},
    {name: "Micheal", age: 20},
];

const UserSearch:React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState<string>('');
    const [user, setUser] = useState<{name: string, age:number} | undefined>({});
    
    useEffect(() => {
        if(inputRef.current)
            inputRef?.current.focus();
        else
            return;
    }, []);

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name ;
        });
        setUser(foundUser);
    }
    return (
        <div>
            User Search
            <input ref={inputRef} value={name} onChange={ (evt) => setName(evt.target)} />
            <button onClick={onClick}>Find User</button>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    )
}
export default UserSearch;