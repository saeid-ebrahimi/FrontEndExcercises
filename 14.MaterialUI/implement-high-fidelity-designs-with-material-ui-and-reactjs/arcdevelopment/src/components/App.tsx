import React from 'react';

import Header from './ui/Header';
import { theme } from './ui/Theme';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={"/"} Component={() => <div>Home</div>} />
            <Route path={"/services"} Component={() => <div>Services</div>} />
            <Route path={"/custom-software"} Component={() => <div>Custom Software</div>} />
            <Route path={"/mobile-apps"} Component={() => <div>Mobile Apps</div>} />
            <Route path={"/revolution"} Component={() => <div>Revolution</div>} />
            <Route path={"/about"} Component={() => <div>About Us</div>} />
            <Route path={"/contact"} Component={() => <div>Contact Us</div>} />
            <Route path={"/estimate"} Component={() => <div>Estimate</div>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

    </div>
  );
}

export default App;
