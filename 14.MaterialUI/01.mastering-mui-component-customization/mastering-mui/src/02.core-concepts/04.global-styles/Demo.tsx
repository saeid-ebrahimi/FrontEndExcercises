
import { Button, buttonClasses, Checkbox, Stack, styled } from '@mui/material'
import { blueTextClass } from '../03.reusable-styles/styles'

const CustomButton = styled(Button)(({ theme, ...ownerState }) => theme.unstable_sx({
    [`&.${buttonClasses.contained}`]: {
        bgcolor: "customColors.royalBlue.main",
        boxShadow: (theme) => theme.shadows[24],
        color: "#FFF",
        fontSize: ownerState.size === "small" ? "0.5rem" : ownerState.size === "medium" ? "1rem" : "2rem",
        mt: {
            xs: 4, sm: 8, md: 10, lg: 12, xl: 18
        },
        "&:hover": {
            bgcolor: "#323232",
        },
        "&.Mui-disabled": {
            color: "#000"
        }
    }
}))

declare module "@mui/material/Button" {
    interface ButtonOwnProps {
        myCustomProp?: string;
    }
}


export default function Demo() {
    return (
        <>
            <Stack spacing={2} direction="column">
                <Button sx={{
                    typography: blueTextClass
                }} variant={"contained"}>Contained with styles</Button>
                <Button variant={"contained"}>Contained </Button>
                <Button variant={"text"}>Text</Button>
                <Button>Default Button</Button>
                <Button variant={"outlined"}>Default Outlined Button</Button>
                <Button sx={{
                    boxShadow: (theme) => theme.shadows[8],
                    "&:hover": {
                        boxShadow: (theme) => theme.shadows[24],
                    }
                }} variant={"contained"}>Shadow</Button>

                <Checkbox />
                <Checkbox sx={{
                    color: "customColors.royalBlue.main",
                    accentColor: "customColors.royalBlue.main",
                }} />
            </Stack>

            <Button sx={{
                display: "block",
                mt: {
                    xs: 4, sm: 8, md: 10, lg: 12, xl: 18
                }
            }} variant={"contained"}>
                My Button
            </Button>
            <CustomButton size={"large"} variant={"contained"}>Hello</CustomButton>
            <br />
            <br />
            <Button variant={"outlined"} size={"small"} myCustomProp="red">Small Customized Outline Button</Button>
            <p>Hello</p>
        </>
    )
}
