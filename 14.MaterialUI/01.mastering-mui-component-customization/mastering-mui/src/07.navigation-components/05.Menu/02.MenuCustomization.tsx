import { Button, Menu, MenuItem, Avatar, Zoom, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Apple as AppleIcon } from '@mui/icons-material'

export default function MenuCustomization() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
    const [selected, setSelected] = useState<string | null>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)
    const handleSelect = (option: string) => {
        setSelected(selected === option ? null : option)
        handleClose()
    }
    const thirdOptionText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quo autem placeat consectetur fugiat voluptatibus. Et ducimus excepturi officiis corrupti, quidem provident maxime unde non itaque culpa modi, nemo quis."
    return (
        <div>
            {/* transform origin set anchorOrigin should apply to which corner of menu */}
            <br />
            <br />
            <br />

            <Button onClick={handleClick}>Open Menu</Button>
            <Menu open={open} anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "center", horizontal: "left" }}
                TransitionComponent={Zoom}
                MenuListProps={{
                    disablePadding: true,
                }}
                slotProps={{
                    paper: {
                        sx: {
                            maxHeight: "150px",
                            maxWidth: "300px",
                            backgroundColor: "#1447e6",
                            "& .MuiMenuItem-root, & .MuiTypography-root": {
                                color: "white",
                                fontFamily: "Verdana",
                                fontSize: "1.5rem",
                                borderColor: "#fff",
                                borderWidth: 2,
                                "&:hover": {
                                    bgcolor: "#155dfc",
                                },
                                "&.Mui-selected": {
                                    bgcolor: "#2b7fff",
                                    color: "#dbeafe"
                                },
                                "&.Mui-disabled": {
                                    bgcolor: "#51a2ff",
                                    opacity: 0.9,
                                    "& .MuiTypography-root": {
                                        color: "#62748e"
                                    }
                                }
                            }
                        },
                    },
                }}
                onClose={handleClose}>
                <MenuItem divider selected={selected === "option 1"} onClick={() => handleSelect("option 1")} ><Avatar sx={{ marginLeft: "-0.25rem" }}>Z</Avatar></MenuItem>
                <MenuItem divider selected={selected === "option 2"} onClick={() => handleSelect("option 2")} ><AppleIcon sx={{ fontSize: "2.5rem", marginLeft: "-0.5rem" }} /></MenuItem>
                <MenuItem divider selected={selected === "option 3"} onClick={() => handleSelect("option 3")} disabled={selected === "option 1"} >
                    <Typography
                        title={thirdOptionText}
                        noWrap
                    // whiteSpace={"normal"}
                    >{thirdOptionText}</Typography>
                </MenuItem>
            </Menu>
        </div>
    )
}