import { ErrorButton } from "../08.partial-components/01.basic-example";
import { DeleteButton, PrimaryButton } from "../08.partial-components/02.production-ready";

function ActionPanel() {
    return (
        <div className="flex gap-4 p-4">
            {/* PrimaryButton only requires remaining props like 'children' or 'onClick' */}
            <PrimaryButton onClick={() => console.log('Saved!')}>
                Save Changes
            </PrimaryButton>

            <DeleteButton onClick={() => console.log('Deleted!')}>
                Delete Item
            </DeleteButton>
        </div>
    );
};

export default function App() {

    return <>
        <ErrorButton text={"Hello"} />
        <ActionPanel />
    </>

};