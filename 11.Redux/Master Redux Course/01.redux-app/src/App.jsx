import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from "react-redux";
import { ChangeCountValue, Child, RetrieveGift } from "./components"

function App() {
  const count = useSelector(state => state.count)
  const gift = useSelector(state => state.gift)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ChangeCountValue count={count} />
        <Child count={count} />
        <RetrieveGift />
        <p>gift is {gift}</p>
      </div>

    </>
  )
}

export default App
