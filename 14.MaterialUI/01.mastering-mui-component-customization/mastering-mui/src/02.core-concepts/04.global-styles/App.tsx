import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import Demo from './Demo'


declare module "@mui/material/styles" {
    interface TypographyVariants {
        blueTextClass: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        blueTextClass?: React.CSSProperties
    }
    interface Palette {
        customColors: {
            royalBlue: {
                main: string;
            }
        }
    }
    interface PaletteOptions {
        customColors?: {
            royalBlue?: {
                main?: string;
            }
        }
    }
}


const theme = createTheme({
    components: {
        "MuiButton": { // component name
            styleOverrides: {
                root: { // Rule name in component API
                    borderRadius: "0.5rem",
                    height: "48px",
                },
                text: {
                    fontWeight: "900",
                    letterSpacing: "2px",
                    color: "black"
                },
                contained: {
                    color: "white",
                    backgroundColor: "black",
                },
                outlined: ({ theme, ownerState }) => (
                    {
                        borderColor: theme.palette.secondary.main,
                        background: "wheat",
                        fontSize: ownerState.size === "small" ? "0.75rem" : "1.2rem",
                        color: ownerState.myCustomProp ? "red" : theme.palette.customColors.royalBlue.main,
                    }
                )
            }
        },
    },
    palette: {
        primary: {
            main: "#008000"
        },
        secondary: {
            main: "#FFA500"
        },
        customColors: {
            royalBlue: {
                main: "#4169E1"
            }
        }
    },
    typography: {
        blueTextClass: {
            color: "blue",
            backgroundColor: "white",
            border: "1px solid blue",
            height: "5rem",
            width: "10rem",
        }
    }
})
export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Demo />
        </ThemeProvider>
    )
}
