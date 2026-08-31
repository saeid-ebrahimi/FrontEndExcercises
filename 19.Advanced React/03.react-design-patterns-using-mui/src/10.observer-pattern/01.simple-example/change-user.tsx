import Button from "@mui/material/Button";
import { userObservable } from "./observable-instance";

export function ChangeUser() {
    return (
        <Button variant={"contained"} onClick={() => userObservable.emit("Saeid")}>
            Change User
        </Button>
    );
}