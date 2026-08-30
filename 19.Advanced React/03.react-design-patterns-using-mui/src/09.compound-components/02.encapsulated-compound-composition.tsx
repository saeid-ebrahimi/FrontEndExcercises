import { Box } from "@mui/material";
import { ReactNode } from "react"


type ChildrenProps = {
    children: ReactNode;
}

type PanelComponent = React.FC<ChildrenProps> & {
    Header: React.FC<ChildrenProps>;
    Content: React.FC<ChildrenProps>;
    Footer: React.FC<ChildrenProps>;
};

export const Panel: PanelComponent = ({ children }) => {
    return <Box sx={{ border: "1px solid #ddd", padding: 2, borderRadius: 2 }}>
        {children}
    </Box>
}

Panel.Header = ({ children }: ChildrenProps) => {
    return <Box sx={{ py: 2, borderBottom: "1px solid #ddd" }}>
        {children}
    </Box>
}

Panel.Content = ({ children }: ChildrenProps) => {
    return <Box sx={{ py: 2 }}>{children}</Box>
}

Panel.Footer = ({ children }: ChildrenProps) => {
    return <Box sx={{ py: 2, borderTop: "1px solid #ddd" }}>
        {children}
    </Box>
}