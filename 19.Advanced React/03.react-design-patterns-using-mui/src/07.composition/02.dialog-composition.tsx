// Good for
// Tabs
// Accordion
// Dropdown
// Menu
// Select
// Dialog
// Form components


// it is compound component pattern too, we use this pattern when the Header and Title are not reusable and are exists inside the dialog

import {
    Dialog as MuiDialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography
} from "@mui/material";

import type { DialogProps as MuiDialogProps } from "@mui/material";

type ChildrenProps = {
    children: React.ReactNode;
};

type DialogComponent = React.FC<MuiDialogProps> & {
    Header: React.FC<ChildrenProps>;
    Title: React.FC<ChildrenProps>;
    Description: React.FC<ChildrenProps>;
    Body: React.FC<ChildrenProps>;
    Footer: React.FC<ChildrenProps>;
};

export const Dialog: DialogComponent = ({ children, ...props }) => {
    return (
        <MuiDialog {...props}>
            {children}
        </MuiDialog>
    )
}

Dialog.Header = function Header({ children }) {
    return <div>{children}</div>
};

Dialog.Title = function Title({ children }) {
    return <DialogTitle>
        {children}
    </DialogTitle>
};

Dialog.Description = function Description({ children }) {
    return (
        <Typography variant={"body2"} color={"textSecondary"} px={3} pb={2}>{children}</Typography>
    )
};

Dialog.Body = function Body({ children }) {
    return (
        <DialogContent>{children}</DialogContent>
    )
}

Dialog.Footer = function Footer({ children }) {
    return <DialogActions>
        {children}
    </DialogActions>
}