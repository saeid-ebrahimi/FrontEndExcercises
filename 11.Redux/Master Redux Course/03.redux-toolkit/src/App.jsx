
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from './redux/counter/counter.slice';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.count.value)
  return (
    <>
      <h1>Vite + React + Redux Toolkit</h1>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <button aria-label={"Increment value"} onClick={() => { dispatch(increment()) }}>Increment</button>
        <span>{counter}</span>
        <button aria-label={"decrement value"} onClick={() => { dispatch(decrement()) }}>decrement</button>
      </div>
    </>
  )
}

export default App
