import { Box } from "@mui/material";
import { AutocompleteDemo } from "./01.AutocompleteDemo";
import { CustomizedAutocomplete } from "./02.CustomizedAutoComplete";
import { CustomizedAutocompleteUsingComponentClasses } from "./03.CustomizedAutocompleteUsingComponentClasses";

export default function App() {
    return <Box sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "1rem",
    }}>
        <AutocompleteDemo />
        <CustomizedAutocomplete />
        <CustomizedAutocompleteUsingComponentClasses />
    </Box>
}