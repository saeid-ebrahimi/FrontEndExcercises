import { AutocompleteDemo } from "./01.AutocompleteDemo";
import { CustomizedAutocomplete } from "./02.CustomizedAutoComplete";
import { CustomizedAutocompleteUsingComponentClasses } from "./03.CustomizedAutocompleteUsingComponentClasses";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
    }}>
        <AutocompleteDemo />
        <CustomizedAutocomplete />
        <CustomizedAutocompleteUsingComponentClasses />
    </div>
}