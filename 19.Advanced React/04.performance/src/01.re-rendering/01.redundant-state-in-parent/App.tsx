import { AdditionalComplexThings, BlaBla } from "./components/dummy-components"
import { SlowComponent } from "./components/slow-component"
import ToggleButtonWithDialog from "./components/toggle-button-with-dialog";


function App() {
    return <>
        <ToggleButtonWithDialog />
        <SlowComponent />
        <BlaBla />
        <AdditionalComplexThings />
    </>
}

export default App
