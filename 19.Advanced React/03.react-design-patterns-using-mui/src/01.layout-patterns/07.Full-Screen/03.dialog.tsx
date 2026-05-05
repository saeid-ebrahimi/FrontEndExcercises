import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { useState } from "react"

export function DialogDemo() {
    const [open, setOpen] = useState(false)

    return <>
        <Button variant={"outlined"} onClick={() => { setOpen(true) }}>Open Dialog</Button>
        <Dialog
            fullWidth
            sx={{ bgcolor: "lightblue" }}
            fullScreen={true}
            open={open}
            onClose={() => { setOpen(false) }}
            keepMounted
            scroll={"paper"}
        >
            <DialogTitle>This is Dialog title</DialogTitle>
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
                </DialogContentText>
            </DialogContent>
            <DialogActions >
                <Button color={"error"} variant={"outlined"}>Delete</Button>
                <Button variant={"outlined"} onClick={() => { setOpen(false) }}>Cancel</Button>
            </DialogActions>
        </Dialog>
    </>
}