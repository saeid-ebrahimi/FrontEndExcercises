import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
    AccountBalance as AccountBalanceIcon,
    AccountCircle as AccountCircleIcon,
    AddCard as AddCardIcon,
    AddLocation as AddLocationIcon,
    AddIcCall as AddIcCallIcon
} from "@mui/icons-material";
import { SyntheticEvent, useState } from "react";

export function ButtonNavigationFunctionality() {
    const [selected, setSelected] = useState("balance")

    const handleChange = (_event: SyntheticEvent, newValue: string) => {
        setSelected(newValue)
    }
    return (
        <>
            <BottomNavigation
                showLabels
                value={selected}
                onChange={handleChange}
            >
                <BottomNavigationAction
                    // component={Link}
                    // to="/balance"
                    // component={"a"}
                    // href={"/balance"}
                    label={"Balance"}
                    value={"balance"}
                    icon={<AccountBalanceIcon />}
                />
                <BottomNavigationAction
                    // component={"a"}
                    // href={"/account"}
                    label={"Account"}
                    value={"account"}
                    icon={<AccountCircleIcon />}

                />
                <BottomNavigationAction
                    // component={"a"}
                    // href={"/card"}
                    label={"Card"}
                    value={"card"}
                    icon={<AddCardIcon />}
                />
                <BottomNavigationAction
                    // component={"a"}
                    // href={"/location"}
                    label={"Location"}
                    value={"location"}
                    icon={<AddLocationIcon />}
                />
                <BottomNavigationAction
                    // component={"a"}
                    // href={"/call"}
                    label={"Call"}
                    value={"call"}
                    icon={<AddIcCallIcon />}
                />
            </BottomNavigation>
        </>
    )
}
