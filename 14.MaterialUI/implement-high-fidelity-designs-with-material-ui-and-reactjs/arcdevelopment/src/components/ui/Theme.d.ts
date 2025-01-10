declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    blue: string;
    orange: string;
  }
}
declare module "@mui/material/styles" {
  interface TypographyVariants {
    tab: {
      fontFamily: React.CSSProperties;
      color: React.CSSProperties;
      textTransform: React.CSSProperties;
      fontWeight: React.CSSProperties;
      fontSize: React.CSSProperties;
    };
  }
  interface TypographyVariantsOptions {
    tab?: {
      fontFamily?: React.CSSProperties;
      color?: React.CSSProperties;
      textTransform?: React.CSSProperties;
      fontWeight?: React.CSSProperties;
      fontSize?: React.CSSProperties;
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    tab: true;
  }
}
