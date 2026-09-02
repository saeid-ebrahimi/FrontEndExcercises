import Button from "./02.elements-as-prop-tricks/01.element-as-props/components/button"
import { Loading, Warning } from "./02.elements-as-prop-tricks/01.element-as-props/components/icons"

function App() {
  return <>
    <Button icon={<Loading />} />
    <Button icon={<Warning />} />
  </>
}

export default App
