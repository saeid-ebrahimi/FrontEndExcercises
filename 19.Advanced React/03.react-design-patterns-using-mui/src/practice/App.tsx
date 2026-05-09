import { ControlledForm } from "../03.controlled-and-uncontrolled-components-patterns/01.forms/controlled-form"
import { UnControlledForm } from "../03.controlled-and-uncontrolled-components-patterns/01.forms/uncontrolled-form"
import { UnControlledDialog } from "../03.controlled-and-uncontrolled-components-patterns/02.dialog/uncontrlled-dialog"
import "../App.css"

export default function App() {
    return <>
        <UnControlledForm />
        <ControlledForm />
        <UnControlledDialog />
    </>
}