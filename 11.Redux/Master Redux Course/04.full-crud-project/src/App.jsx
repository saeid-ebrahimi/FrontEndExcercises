import UserTable from "./components/UserTable"
import './App.css'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import { CreatePostModal } from "./components/CreatePostModal";
function App() {
  return (
    <div className={"px-3 mt-3"}>
      <CreatePostModal />
      <UserTable />
    </div>
  )
}

export default App
