import React from 'react'
import {NavLink} from 'react-router-dom'
import {Stack} from "@mui/material"
import Logo from "../assets/images/Logo.png"
const Navbar = () => {
    return (
        <Stack
            direction={"row"}
            justifyContent={"space-around"}
            sx={{gap: {sm: '122px', xs:"40px"}, mt: {sm: "32px", xs: "20px"} , justifyContent: "none"}}
            px={"20px"}
        >
            <NavLink to={"/"}>
                <img src={Logo} alt="Logo" style={{width:"48px", height:"48px", margin: "0 20px"}}/>
            </NavLink>
            <Stack direction={"row"} gap={"40px"} fontSize={"24px"} alignItems={"flex-end"}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"#exercises"} style={ {color: "#3A1212", borderBottom: "3px solid #ff2625"}}>Exercises</NavLink>
            </Stack>
        </Stack>
    )
}
export default Navbar;