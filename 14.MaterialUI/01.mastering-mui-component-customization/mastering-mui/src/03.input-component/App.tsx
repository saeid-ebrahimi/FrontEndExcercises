import { AutocompleteDemo } from "./01.Autocomplete/01.AutocompleteDemo";
import { CustomizedAutocomplete } from "./01.Autocomplete/02.CustomizedAutoComplete";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
    }}>
        <AutocompleteDemo />
        <CustomizedAutocomplete />
    </div>
}