import { Button } from "@mui/material";
import { counterStore } from "./observable-instance";

export function Increment() {
    return <Button onClick={() => { counterStore.increment() }}>
        Increment
    </Button>
}