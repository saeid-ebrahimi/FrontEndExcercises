import { Box } from "@mui/material";
import { Username } from "../10.observer-pattern/01.simple-example/username";
import { ChangeUser } from "../10.observer-pattern/01.simple-example/change-user";
export default function App() {
    return <Box p={5}>
        <Username />
        <ChangeUser />
    </Box>

};