// Good for
// Cards
// Modals
// Layouts
// Panels
// Containers
// Dialogs

import { Card as MuiCard, CardContent, CardActions, CardHeader } from "@mui/material";

type Props = {
    children: React.ReactNode
};

export function Card({ children }: Props) {
    return <MuiCard>{children}</MuiCard>
};

function Header({ children }: Props) {
    return <CardHeader>{children}</CardHeader>;
};

function Content({ children }: Props) {
    return <CardContent>{children}</CardContent>
};

function Actions({ children }: Props) {
    return <CardActions>{children}</CardActions>
};

Card.Header = Header;
Card.Content = Content;
Card.Actions = Actions;