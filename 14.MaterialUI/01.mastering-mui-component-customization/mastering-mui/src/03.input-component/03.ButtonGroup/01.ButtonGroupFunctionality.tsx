import { Button, ButtonGroup } from '@mui/material'
import React from 'react'

export function ButtonGroupFunctionality() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
            <ButtonGroup>
                <Button>First</Button>
                <ButtonGroup orientation={"vertical"}>
                    <Button>2.1</Button>
                    <Button>2.2</Button>
                </ButtonGroup>
                <Button>Second</Button>
                <Button>Third</Button>
            </ButtonGroup>
            <ButtonGroup orientation={"vertical"} disableElevation variant={"contained"}>
                <Button>First</Button>
                <Button>Second</Button>
                <Button disabled>Third</Button>
            </ButtonGroup>
            <ButtonGroup disabled color={"secondary"} variant={"text"}>
                <Button>First</Button>
                <Button>Second</Button>
                <Button>Third</Button>
            </ButtonGroup>

        </div>
    )
}
