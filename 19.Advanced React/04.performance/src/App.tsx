import { AdditionalComplexThings, BlaBla } from "./01.re-rendering/01.redundant-state-in-parent/components/dummy-components"
import { SlowComponent } from "./01.re-rendering/01.redundant-state-in-parent/components/slow-component"
import ToggleButtonWithDialog from "./01.re-rendering/01.redundant-state-in-parent/components/toggle-button-with-dialog";

function App() {
  return <>
    <ToggleButtonWithDialog />
    <SlowComponent />
    <BlaBla />
    <AdditionalComplexThings />
  </>
}

export default App
