
import React, {useState} from "react";

// app wide state
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLoggedOut: null
});
export default AuthContext;
