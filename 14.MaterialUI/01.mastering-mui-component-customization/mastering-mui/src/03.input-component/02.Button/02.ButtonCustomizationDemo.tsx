import { Button, buttonClasses } from '@mui/material'

export function ButtonCustomizationDemo() {
    return (
        <div>
            <p>Customizing Button</p>
            <Button
                disabled
                sx={{
                    bgcolor: "#FBBF24",
                    color: "#0F172A",
                    fontFamily: "Verdana",
                    fontSize: "1.5rem",
                    // "&.Mui-disabled": {
                    //     bgcolor: "#FFFBEB",
                    // }
                    [`&.${buttonClasses.disabled}`]: {
                        bgcolor: "#FFFBEB",
                    }
                }}
                variant={"contained"}>
                Contained
            </Button>
            <br />
            <br />
            <Button
                sx={
                    {
                        color: "#78350F",
                        fontFamily: "Verdana",
                        fontSize: "1.5rem",
                        borderColor: "#78350F",
                        borderWidth: 2,
                        borderRadius: "0.8rem",
                        "&:hover": {
                            transform: "scale(1.05)"
                        }
                    }}
                variant={"outlined"}>
                Outlined
            </Button>
        </div>
    )
}
