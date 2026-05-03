import { Box, Button, Drawer } from "@mui/material";
import { useState } from "react";

export function DrawerDemo() {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const drawerWidth = 350
    return <>
        <Button onClick={() => setOpen(prev => !prev)} >Toggle Drawer</Button>
        <Box sx={{
            width: "100%",
            bgcolor: "wheat",
            height: "100%"
        }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sint possimus vero id deleniti obcaecati dolorem, debitis commodi saepe nostrum. Accusantium magnam voluptatibus unde inventore mollitia est dignissimos tempore ex!
        </Box>
        <Drawer
            anchor={"left"}
            // variant={"permanent"}
            variant={"persistent"}
            ModalProps={{ keepMounted: true }}
            open={open} onClose={handleClose} sx={{
                width: drawerWidth,
                "& .MuiDrawer-paper": {
                    width: drawerWidth
                }
            }} >
            <ul>
                <li onClick={handleClose}>
                    <a href={""}>First</a>
                </li>
                <li onClick={handleClose}>
                    <a href={""}>Second</a>
                </li>
                <li onClick={handleClose}>
                    <a href={""}>Third</a>
                </li>
            </ul>
        </Drawer>
    </>
}