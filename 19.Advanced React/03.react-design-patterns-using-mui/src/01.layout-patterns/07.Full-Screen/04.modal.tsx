import { Box, Button, Modal } from "@mui/material"
import { useState } from "react"

export function ModalDemo() {
    const [open, setOpen] = useState(false)

    return <>
        <Button variant={"outlined"} sx={{
            width: "fit-content"
        }} onClick={() => { setOpen(true) }}>Open Modal</Button>
        <Modal open={open} keepMounted={true}>
            <Box sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                bgcolor: "lightcoral"
            }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur recusandae velit libero, tempora reiciendis eveniet molestias sunt, sed obcaecati nihil iusto voluptates iure atque amet adipisci veritatis! Soluta, non?

            </Box>
        </Modal>
    </>
}