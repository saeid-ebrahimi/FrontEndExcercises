import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from "./store/auth-context";

function App() {

  useEffect(() => {
      const storedLoggedInInfo = localStorage.getItem('isLoggedIn');
      if(storedLoggedInInfo === '1'){
          setIsLoggedIn(true);
      }
  }, [])
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo any-ways
      localStorage.setItem('isLoggedIn', "1")
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn")
  };

  return (
    <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn , onLogout: logoutHandler}
    }>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
