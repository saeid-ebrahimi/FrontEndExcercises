
import React, {useEffect, useState} from "react";
// app wide state
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});
export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const storedLoggedInInfo = localStorage.getItem('isLoggedIn');
        if(storedLoggedInInfo === '1'){
            setIsLoggedIn(true);
        }
    }, [])
    const logoutHandler = () => {
        setIsLoggedIn(false)
        localStorage.removeItem("isLoggedIn")
    }
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', "1")
        setIsLoggedIn(true)
    }
    return( <AuthContext.Provider
        value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>
        {props.children}
    </AuthContext.Provider>)
}
export default AuthContext;
