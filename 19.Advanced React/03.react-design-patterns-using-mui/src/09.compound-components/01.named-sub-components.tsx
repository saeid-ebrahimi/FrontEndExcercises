import { Box } from "@mui/material"
import { ReactNode } from "react"

// we use this approach when we have separate reusable components, I mean We can use Header and Content and Actions in Other places

type Props = {
    children: ReactNode
}

export const Panel = ({ children }: Props) => {
    return <Box sx={{ border: "1px solid #ddd", padding: 2, borderRadius: 2 }}>
        {children}
    </Box>
}

export const Header = ({ children }: Props) => {
    return <Box sx={{ py: 2, borderBottom: "1px solid #ddd" }}>
        {children}
    </Box>
}

export const Footer = ({ children }: Props) => {
    return <Box sx={{ py: 2, borderTop: "1px solid #ddd" }}>
        {children}
    </Box>
}

export const Content = ({ children }: Props) => {
    return <Box sx={{ py: 2 }}>{children}</Box>
}

Panel.Header = Header;
Panel.Footer = Footer;
Panel.Content = Content;