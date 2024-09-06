
import React, {useState} from "react";


const GuestList: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [guests, setGuests] = useState<string[]>([]);
    const onClick = () => {
        setName("");
        setGuests([...guests, name])
    }
    return ( <div>
            <h3>Guest List</h3>
            <ul>
                {guests.map((guest => (<li>{guest}</li>)))}
            </ul>
            <input value={name} onChange={(e)=> setName(e.target.value)} />
            <button onClick={onclick}>Add Guest</button>
        </div>
    )
}

export default GuestList;