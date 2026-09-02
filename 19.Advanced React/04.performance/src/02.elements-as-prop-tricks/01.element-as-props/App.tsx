import Button from "./components/button"
import { Loading, Warning } from "./components/icons"

function App() {
    return <>
        <Button icon={<Loading />} />
        <Button icon={<Warning />} />
    </>
}

export default App
