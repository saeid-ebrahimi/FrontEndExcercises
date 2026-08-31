import { Box, Divider } from "@mui/material";
import { Username } from "../10.observer-pattern/01.simple-example/username";
import { ChangeUser } from "../10.observer-pattern/01.simple-example/change-user";
import { CounterA } from "../10.observer-pattern/02.useSyncExternalStore/counter-a";
import { CounterB } from "../10.observer-pattern/02.useSyncExternalStore/counter-b";
import { Increment } from "../10.observer-pattern/02.useSyncExternalStore/increament";
export default function App() {
    return <Box p={5}>
        <Username />
        <ChangeUser />
        <Divider sx={{ my: 2 }} />
        <Increment />
        <CounterA />
        <CounterB />
    </Box>

};