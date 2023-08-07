import {createContext, useContext, useState} from "react";

const UserContext = createContext(undefined);
export const UserProvider = ({ children })=> {
    const [user] = useState({
        name:"John",
        email:"john@example.com",
        dob:"01/01/2001"}
    )
    return <UserContext.Provider value={{user}}></UserContext.Provider>
    };
export const useUser = () => useContext(UserContext);
