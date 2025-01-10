import { createTheme } from "@mui/material/styles";
import React from "react";

const ARC_BLUE = "#0B72B9";
const ARC_ORANGE = "#FFBA60";

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    blue: string;
    orange: string;
  }
}
declare module "@mui/material/styles" {
  interface TypographyVariants {
    tab: React.CSSProperties;
    estimate: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    tab?: React.CSSProperties;
    estimate: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    tab: true;
    estimate: true;
  }
}

export const theme = createTheme({
  palette: {
    common: {
      blue: `${ARC_BLUE}`,
      orange: `${ARC_ORANGE}`,
    },
    primary: {
      main: `${ARC_BLUE}`,
    },
    secondary: {
      main: `${ARC_ORANGE}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      color: "white",
      textTransform: "none",
      fontWeight: "bold",
      fontSize: "1.5rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      color: "white",
      textTransform: "none",
      fontSize: "1.1rem",
    },
  },
});
