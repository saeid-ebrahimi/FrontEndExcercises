import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "../App"
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  typography: {
    h6: {
      fontFamily: "Verdana",
      color: "#1E293B",
      fontSize: "2.5rem"
    },
    link: {
      color: "blue",
      fontSize: "1.3rem",
      fontFamily: "verdana",
      fontWeight: 900,
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h6: "h3",
          link: "a"
        }
      }
    }
  }
})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
