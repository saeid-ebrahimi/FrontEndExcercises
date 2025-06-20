import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeCountValue, Child, RetrieveGift, UserProfile,
  ChangeUser, ChangeUserName
} from "./components"
import { useEffect } from 'react';
import { getUsers } from './redux/users/users.action';

function App() {
  const count = useSelector(state => state.count)
  const gift = useSelector(state => state.gift)
  const user = useSelector(state => state.user)
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <>
      <h1>Vite + React + Redux Thunk</h1>
      <h2>Redux basic store uses for simple synchronous updates by dispatching actions</h2>
      <h2>Thunks are recommended middleware to basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple logic like AJAX requests</h2>
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
