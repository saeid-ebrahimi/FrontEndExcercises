import { AdditionalComplexThings } from "./01.re-rendering/01.redundant-state-in-parent/components/dummy-components"
import { BlaBla } from "./01.re-rendering/02.custom-hook-drawback/components/dummy-components"
import { SlowComponent } from "./01.re-rendering/02.custom-hook-drawback/components/slow-component"
import ToggleButtonWithDialog from "./01.re-rendering/02.custom-hook-drawback/components/toggle-button-with-dialog";

function App() {
  // const { isVisible, show, hide } = useToggleDialog();
  return <>
    {/* <Button onClick={show}>Show Dialog</Button>
    {isVisible ? <ModalDialog onClose={hide} /> : null} */}
    <ToggleButtonWithDialog />
    <SlowComponent />
    <BlaBla />
    <AdditionalComplexThings />
  </>
}

export default App
