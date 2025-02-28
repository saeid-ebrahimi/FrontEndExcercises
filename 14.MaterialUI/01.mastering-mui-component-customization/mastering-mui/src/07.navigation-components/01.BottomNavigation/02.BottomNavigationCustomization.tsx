import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import {
    AccountBalance as AccountBalanceIcon,
    AccountCircle as AccountCircleIcon,
    AddCard as AddCardIcon,
    AddLocation as AddLocationIcon,
    AddIcCall as AddIcCallIcon
} from "@mui/icons-material";
import { SyntheticEvent, useState } from "react";

export function BottomNavigationCustomization() {
    const [selected, setSelected] = useState("balance")

    const handleChange = (_event: SyntheticEvent, newValue: string) => {
        setSelected(newValue)
    }
    return (
        <>
            <Paper sx={{
                position: "fixed",
                bottom: 100,
                left: 0,
                right: 0,
            }}>
                <BottomNavigation
                    showLabels
                    value={selected}
                    onChange={handleChange}
                    sx={{
                        bgcolor: "#334155",
                        height: "4rem",
                        "& button:not(.Mui-selected)": {
                            color: "#94A3B8",
                            gap: "5px",
                            "& .MuiBottomNavigationAction-label": {
                                color: "#C084FC"
                            }
                        },
                        "& button.Mui-selected": {
                            color: "#F8FAFC",
                            gap: "3px",
                            transform: "scale(1.08)",
                            "& .MuiBottomNavigationAction-label": {
                                color: "#F5D0FE",
                                fontWeight: 600
                            }
                        }
                    }}
                >
                    <BottomNavigationAction
                        label={"Balance"}
                        value={"balance"}
                        icon={<AccountBalanceIcon />}
                    />
                    <BottomNavigationAction
                        label={"Account"}
                        value={"account"}
                        icon={<AccountCircleIcon />}

                    />
                    <BottomNavigationAction
                        label={"Card"}
                        value={"card"}
                        icon={<AddCardIcon />}
                    />
                    <BottomNavigationAction
                        label={"Location"}
                        value={"location"}
                        icon={<AddLocationIcon />}
                    />
                    <BottomNavigationAction
                        label={"Call"}
                        value={"call"}
                        icon={<AddIcCallIcon />}
                    />
                </BottomNavigation>
            </Paper>
        </>
    )
}
