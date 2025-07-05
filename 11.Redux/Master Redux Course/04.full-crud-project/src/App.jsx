import UserTable from "./components/UserTable"
import './App.css'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const request = await axios.get('http://localhost:3000/posts')
    setPosts(request.data)
  }
  useEffect(() => {
    getPosts()
  }, [])
  return (
    <div className={"px-3 mt-3"}>
      <CreatePostModal posts={posts} setPosts={setPosts} />
      <UserTable posts={posts} setPosts={setPosts} />
    </div>
  )
}

export default App
