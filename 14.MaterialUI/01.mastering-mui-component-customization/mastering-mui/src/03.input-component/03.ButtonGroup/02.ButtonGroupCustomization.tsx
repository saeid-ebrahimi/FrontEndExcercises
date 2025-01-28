import { Button, ButtonGroup, buttonGroupClasses } from '@mui/material'

export function ButtonGroupCustomization() {
    return (
        <>
            <ButtonGroup sx={{
                "& > button": {
                    bgcolor: "#1E293B",
                    color: "#F1F5F9",
                    fontFamily: "Verdana",
                    "&:hover": {
                        bgcolor: "#334155"
                    },
                },
                "& .MuiButtonGroup-grouped:not(:last-of-type)": {
                    borderColor: "wheat",
                    borderWidth: "3px",
                }
            }} orientation={"vertical"} variant={"contained"}>
                <Button>First</Button>
                <Button>Second</Button>
                <Button>Third</Button>
            </ButtonGroup>
            <ButtonGroup sx={{
                "& > button": {
                    borderColor: "#1E293B",
                    color: "#1E293B",
                    bgcolor: "#F8FAFC",
                    fontFamily: "Verdana",
                    "&:hover": {
                        bgcolor: "transparent",
                        color: "black",
                        borderColor: "black"
                    },
                },
            }} variant={"outlined"}>
                <Button>First</Button>
                <Button>Second</Button>
                <Button>Third</Button>
            </ButtonGroup>
            <ButtonGroup sx={{
                "& > button": {
                    color: "#1E293B",
                    fontFamily: "Verdana",
                    "&:hover": {
                    },
                },
                [`& .${buttonGroupClasses.grouped}`]: {
                    borderColor: "#1E293B",
                    borderWidth: "3px",
                },
                // [`& .${buttonGroupClasses.grouped}:not(:last-of-type)`]: {
                //     borderColor: "#1E293B",
                //     borderWidth: "3px",
                // }
            }} variant={"text"}>
                <Button>First</Button>
                <Button>Second</Button>
                <Button>Third</Button>
            </ButtonGroup>
        </>
    )
}
