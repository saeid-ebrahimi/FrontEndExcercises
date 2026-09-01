import { AdditionalComplexThings } from "./components/dummy-components"
import { BlaBla } from "./components/dummy-components"
import { SlowComponent } from "./components/slow-component"
import ToggleButtonWithDialog from "./components/toggle-button-with-dialog";

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
