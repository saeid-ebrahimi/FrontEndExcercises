import { AdditionalComplexThings } from "./01.re-rendering/01.redundant-state-in-parent/components/dummy-components"
import { ModalDialog } from "./01.re-rendering/01.redundant-state-in-parent/components/modal-dialog";
import { Button } from "./01.re-rendering/02.custom-hook-drawback/components/button";
import { BlaBla } from "./01.re-rendering/02.custom-hook-drawback/components/dummy-components"
import { SlowComponent } from "./01.re-rendering/02.custom-hook-drawback/components/slow-component"
import { useToggleDialog } from "./01.re-rendering/02.custom-hook-drawback/hooks/useDialog"

function App() {
  const { isVisible, show, hide } = useToggleDialog();
  return <>
    <Button onClick={show}>Show Dialog</Button>
    {isVisible ? <ModalDialog onClose={hide} /> : null}
    <SlowComponent />
    <BlaBla />
    <AdditionalComplexThings />
  </>
}

export default App
