import Button from "./components/button"
import { Loading, Warning } from "./components/icons"

function App() {
    return <>
        <Button type={"primary"} size={"lg"} icon={<Loading size={"14px"} />} />
        <br />
        <br />
        <Button icon={<Warning />} />
    </>
}

export default App
