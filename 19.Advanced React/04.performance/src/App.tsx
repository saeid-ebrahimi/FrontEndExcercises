import Button from "./02.elements-as-prop-tricks/components/button"
import { Loading, Warning } from "./02.elements-as-prop-tricks/components/icons"

function App() {
  return <>
    <Button type={"primary"} size={"lg"} icon={<Loading size={"14px"} />} />
    <br />
    <br />
    <Button icon={<Warning />} />
  </>
}

export default App
