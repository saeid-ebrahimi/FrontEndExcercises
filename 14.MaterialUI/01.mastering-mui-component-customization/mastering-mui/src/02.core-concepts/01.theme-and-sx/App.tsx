import { Box, Button } from "@mui/material";
import { useState } from "react";


export function App() {
    // borderRadius: value => theme.shape.borderRadius * value
    // zIndex: "snackbar" => theme.zIndex["snackbar"]
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={"App"}>
            <h2 style={{
                color: "blue", marginBottom: "50px"
            }}>Start Editing</h2>
            <Box sx={{
                display: "flex",
                gap: "1rem",
                // width: 1 / 5,
                // width: 0.25,
                width: 1,
                margin: "auto",
                maxWidth: "lg"
            }}>
                <Button sx={{
                    color: "warning.main",
                    bgcolor: "whitesmoke",
                    borderWidth: 2,
                    borderStyle: "solid",
                    borderColor: (theme) => theme.palette.secondary.main,
                    mt: "50px",
                    py: "20px",
                    px: 5,
                    typography: "h3",
                    fontFamily: "button.fontfamily",
                    fontSize: 32,
                }} variant={"contained"}>My Button</Button>
                {/* <Button sx={(theme) => ({
                    ...theme.typography.h4,
                    // width: "5rem",
                    width: 1,
                    maxWidth: theme.breakpoints.values["md"],
                    borderRadius: 4,
                    boxShadow: 10,
                    // zIndex: "snackbar",
                    zIndex: theme.zIndex.drawer + 20,
                    backgroundColor: isOpen ? theme.palette.info.main : theme.palette.secondary.main,
                })}
                    variant={"contained"}
                    onClick={() => {
                        setIsOpen(prev => !prev);;
                    }}
                >My Another Button</Button> */}
                <Button sx={[(theme) =>
                ({
                    ...theme.typography.h4,
                    // width: "5rem",
                    width: { xs: 1, lg: 0.5 },
                    maxWidth: theme.breakpoints.values["md"],
                    borderRadius: 4,
                    boxShadow: 10,
                    // zIndex: "snackbar",
                    zIndex: theme.zIndex.drawer + 20,
                    "&:hover": (theme) => ({
                        backgroundColor: theme.palette.success.main
                    }),
                    "&:active": {
                        background: "aliceblue",
                        color: "black"
                    },
                    "& > span": {
                        color: "cyan",
                    }
                }),
                isOpen && ((theme) => ({
                    backgroundColor: theme.palette.secondary.main,
                    textTransform: "capitalize",
                    "&:hover": (theme) => ({
                        backgroundColor: theme.palette.warning.main
                    })
                }))
                ]}
                    variant={"contained"}
                    onClick={() => {
                        setIsOpen(prev => !prev);;
                    }}
                >My Another Button
                    <span>HOT</span>
                </Button>
            </Box>
        </div >
    )
}