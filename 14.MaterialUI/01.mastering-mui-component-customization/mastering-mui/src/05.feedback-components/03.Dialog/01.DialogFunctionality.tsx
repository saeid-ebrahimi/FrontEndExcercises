import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, useTheme, Zoom } from "@mui/material";
import { useState } from "react";

export function DialogFunctionality() {
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
                scroll="body"
                open={open}
                onClose={(_event: any, reason) => {
                    if (reason !== "backdropClick") {
                        setOpen(false)
                    }
                }}
            >
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
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
                <DialogActions>
                    <Button color={"error"} variant={"outlined"}>Delete</Button>
                    <Button variant={"outlined"} onClick={() => { setOpen(false) }}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
