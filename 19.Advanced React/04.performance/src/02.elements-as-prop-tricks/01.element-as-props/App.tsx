import Button from "./components/button"
import { Loading, Warning } from "./components/icons"

function App() {
    return <>
        <Button size={"lg"} type={"primary"} icon={<Loading />} />
        <Button size={"lg"} icon={<Warning />} />
    </>
}

export default App
