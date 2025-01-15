import React, { ReactNode } from 'react'
import { Box, Button } from '@mui/material'

function MySpecialBox(props: { label: string; children: ReactNode }) {
    return <Box>
        label: {props.label}
        {props.children}
    </Box>
}
export function App() {
    return (
        <div>
            <Button sx={
                {
                    backgroundColor: "darkgreen",
                }
            } disableElevation onClick={() => {
                console.log("clicked")
            }} variant={"contained"}
            // component="a"
            >My Button</Button>
            <MySpecialBox label="Special Box">
                <Button variant={"outlined"}>My Box</Button>
            </MySpecialBox>
        </div>
    )
}
