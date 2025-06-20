import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeCountValue, Child, RetrieveGift, UserProfile,
  ChangeUser, ChangeUserName
} from "./components"
import { useEffect } from 'react';

function App() {
  const count = useSelector(state => state.count)
  const gift = useSelector(state => state.gift)
  const user = useSelector(state => state.user)
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  const getUsers = async () => {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users")
      const status = await resp.status()
      console.log(status);
      const data = await resp.json();
      dispatch({
        type: "ADD_USERS",
        payload: data
      })
    } catch (error) {
      // console.error(error);
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h1>Vite + React + Redux</h1>
      <div className="card">
        <ChangeCountValue count={count} />
        <Child count={count} />
        <RetrieveGift />
        <p>gift is {gift}</p>
      </div>
      <ChangeUser />
      <ChangeUserName />
      <UserProfile user={user} />
      {users.map((user, index) => {
        <UserProfile key={index} user={user} />
      })}
    </>
  )
}

export default App
