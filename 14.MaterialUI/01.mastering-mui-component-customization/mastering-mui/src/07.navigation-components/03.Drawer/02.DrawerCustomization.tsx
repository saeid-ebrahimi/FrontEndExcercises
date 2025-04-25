import { Button, Drawer } from "@mui/material"
import { useState } from "react"

export default function DrawerCustomization() {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const drawerWidth = 150
    return (
        <div>
            <Drawer anchor={"right"} sx={{
                width: drawerWidth,
                height: "50%",
                "& li": {
                    color: "#FFF",
                    fontSize: "1.2rem",
                    fontFamily: "Verdana"
                },
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    bgcolor: "blueviolet",
                    height: "50%"
                }
            }} open={open} onClose={handleClose} >
                <ul>
                    <li onClick={handleClose}>
                        First
                    </li>
                    <li onClick={handleClose}>
                        Second
                    </li>
                    <li onClick={handleClose}>
                        Third
                    </li>
                </ul>
            </Drawer>
            <Button onClick={() => setOpen(prev => !prev)} >Toggle Drawer</Button>

        </div>
    )
}
