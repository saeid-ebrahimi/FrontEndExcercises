
import { Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

export default function MenuDemo() {
    const [anchorMenuEl, setAnchorMenuEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorMenuEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorMenuEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorMenuEl(null)
    }
    return (
        <div>
            <Button id={"dashboard-trigger"}
                aria-controls={open ? "dashboard-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                Dashboard
            </Button>
            <Menu
                id="dashboard-menu"
                anchorEl={anchorMenuEl}
                open={open}
                sx={{
                    "& > .MuiMenu-paper": {
                        backgroundColor: "#E17222",
                        color: "white"
                    }
                }}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "dashboard-trigger"
                }}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    )
}