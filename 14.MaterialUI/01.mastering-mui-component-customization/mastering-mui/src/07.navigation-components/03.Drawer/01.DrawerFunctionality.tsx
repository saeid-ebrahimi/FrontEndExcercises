import { Button, Drawer, Box, SwipeableDrawer } from "@mui/material";
import { SyntheticEvent, useState } from "react";

export default function DrawerFunctionality() {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }

    const [openPermanentDrawer, setOpenPermanentDrawer] = useState(false)
    const handleClosePermanentDrawer = () => {
        setOpenPermanentDrawer(false)
    }

    const [openSwipeableDrawer, setOpenSwipeableDrawer] = useState(false)
    const drawerWidth = 150
    const IOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent)
    return (
        <div>
            <Drawer anchor={"right"} sx={{
                width: drawerWidth, "& .MuiDrawer-paper": {
                    width: drawerWidth
                }
            }} open={open} onClose={handleClose} >
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


            <div style={{ display: "flex" }}>
                {/* <Drawer
                    // variant={"permanent"}
                    variant={"persistent"}
                    // for seo purpose
                    ModalProps={{ keepMounted: true }}
                    anchor={"left"} sx={{
                        flexShrink: 0,
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            width: drawerWidth
                        }
                    }} open={openPermanentDrawer} onClose={handleClosePermanentDrawer} >
                    <ul>
                        <li>
                            <a href={""}>First</a>
                        </li>
                        <li>
                            <a href={""}>Second</a>
                        </li>
                        <li>
                            <a href={""}>Third</a>
                        </li>
                    </ul>
                </Drawer> */}
                <SwipeableDrawer
                    // variant={"permanent"}
                    variant={"persistent"}
                    // for seo purpose
                    ModalProps={{ keepMounted: true }}
                    disableBackdropTransition={!IOS}
                    disableDiscovery={IOS}
                    anchor={"left"} sx={{
                        flexShrink: 0,
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            width: drawerWidth
                        }
                    }} open={openSwipeableDrawer} onClose={handleClosePermanentDrawer} onOpen={function (event: SyntheticEvent<{}, Event>): void {
                        throw new Error("Function not implemented.");
                    }} >
                    <ul>
                        <li>
                            <a href={""}>First</a>
                        </li>
                        <li>
                            <a href={""}>Second</a>
                        </li>
                        <li>
                            <a href={""}>Third</a>
                        </li>
                    </ul>
                </SwipeableDrawer>
                <Box sx={{ flexGrow: 1, marginLeft: openPermanentDrawer || openSwipeableDrawer ? 0 : `-${drawerWidth}px`, transition: 'margin 0.3s ease' }}>
                    <Button onClick={() => setOpen(prev => !prev)} >Toggle Drawer</Button>
                    <h1>Adding permanent/persistent drawer</h1>
                    <Button onClick={() => setOpenPermanentDrawer(prev => !prev)}>Open Permanent Drawer</Button>
                    <h2>Add Swipeable Drawer for better mobile experience</h2>
                    <Button onClick={() => setOpenSwipeableDrawer(prev => !prev)}>Open Swipeable Drawer</Button>
                </Box>
            </div>
        </div>
    )
}
