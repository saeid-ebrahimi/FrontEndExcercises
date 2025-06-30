import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { store } from "./redux/store"
import NavigationBar from './components/Navbar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <NavigationBar />
      <App />
    </Provider>
  </StrictMode>,
)
