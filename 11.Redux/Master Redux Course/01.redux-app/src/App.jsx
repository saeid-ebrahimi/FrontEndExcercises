import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from "react-redux";
import {
  ChangeCountValue, Child, RetrieveGift, UserProfile,
  ChangeUser, ChangeUserName
} from "./components"

function App() {
  const count = useSelector(state => state.count)
  const gift = useSelector(state => state.gift)

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
      <UserProfile />
    </>
  )
}

export default App
