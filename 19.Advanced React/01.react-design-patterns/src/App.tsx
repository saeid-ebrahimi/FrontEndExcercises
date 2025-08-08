
import './App.css'
import { SplitScreen } from './compnents/layout/split-screen'

export function Left() {
  return <>
    <h2 style={{ backgroundColor: "crimson" }}>I am left</h2>
  </>
}
export function Middle() {
  return <h2 style={{ backgroundColor: "lightblue" }}>I am middle</h2>
}
export function Right() {
  return <>
    <h2 style={{ backgroundColor: "burlywood" }}>I am right</h2>
  </>
}

function App() {

  return (
    <>
      <SplitScreen children={[<Left />, <Right />, <Middle />] as const} childrenWidths={[1, 3, 2,] as const} />
    </>
  )
}

export default App
