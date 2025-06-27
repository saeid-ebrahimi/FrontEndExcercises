
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from './redux/counter/counter.slice';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value)
  return (
    <>
      <h1>Vite + React + Redux Toolkit</h1>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <button aria-label={"Increment value"} onClick={() => { dispatch(increment()) }}>Increment</button>
        {/* <button aria-label={"Increment value"} onClick={() => { dispatch({ type: "counter/increment" }) }}>Increment</button> */}
        {/* <button aria-label={"Increment value by 10"} onClick={() => { dispatch(incrementByAmount(10)) }}>Increment by 10</button> */}
        <span>{counter}</span>
        <button aria-label={"decrement value"} onClick={() => { dispatch(decrement()) }}>decrement</button>
      </div>
    </>
  )
}

export default App
