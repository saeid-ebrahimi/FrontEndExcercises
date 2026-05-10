import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from "@mui/material";
import { useState } from "react";

export function UnControlledDialog() {
    const [open, setOpen] = useState(true)
    return <Dialog
        fullWidth
        sx={{ bgcolor: "lightblue" }}
        keepMounted
        scroll={"paper"} open={open}
        onClose={() => { setOpen(false) }}

    >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
            This is Dialog title
            <IconButton onClick={() => { setOpen(false) }}>
                X
            </IconButton>
        </DialogTitle>
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
        <DialogActions>
            <Button onClick={() => { setOpen(false) }}>Close</Button>
        </DialogActions>
    </Dialog>
}