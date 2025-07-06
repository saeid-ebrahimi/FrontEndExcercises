import UserTable from "./components/UserTable"
import './App.css'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import { CreatePostModal } from "./components/CreatePostModal";
import NavigationBar from './components/Navbar';
function App() {
  const [mode, setMode] = useState('light')
  return (
    <>
      <NavigationBar mode={mode} setMode={setMode} />
      <div className={`px-3 pt-3 bg-${mode}`}>
        <CreatePostModal />
        <UserTable mode={mode} />
      </div>
    </>
  )
}

export default App
