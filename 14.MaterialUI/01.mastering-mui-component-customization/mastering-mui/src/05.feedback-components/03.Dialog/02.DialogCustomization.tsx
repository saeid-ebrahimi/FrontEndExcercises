import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, useTheme, Zoom } from "@mui/material";
import { useState } from "react";

export function DialogCustomization() {
    const [open, setOpen] = useState(false)
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <Button onClick={() => setOpen(true)}>Open Dialog</Button>
            <Dialog
                fullScreen={fullScreen}
                fullWidth
                maxWidth={"md"}
                TransitionComponent={Zoom}
                keepMounted
                // scroll="body"
                open={open}
                onClose={(_event: any, reason) => {
                    if (reason !== "backdropClick") {
                        setOpen(false)
                    }
                }}
                sx={{
                    "& .MuiPaper-root": {
                        bgcolor: "rgb(219, 234, 254)",
                        height: "30rem",
                        // width: "15rem"
                    }
                }}
            >
                <DialogTitle
                    sx={{ color: "rgb(30, 58, 138)", height: "2.5rem", fontFamily: "verdana", fontSize: "1.4rem" }}
                >
                    Are you sure?
                </DialogTitle>
                <DialogContent dividers sx={{ color: "#fff", borderColor: "rgb(100, 116, 139)" }}>
                    <DialogContentText sx={{ color: "rgb(30, 64, 175)", fontFamily: "verdana", fontSize: "1rem", py: 2 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ justifyContent: "space-around", height: "2.8rem" }}>
                    <Button color={"error"} variant={"outlined"}>Delete</Button>
                    <Button variant={"outlined"} onClick={() => { setOpen(false) }}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
