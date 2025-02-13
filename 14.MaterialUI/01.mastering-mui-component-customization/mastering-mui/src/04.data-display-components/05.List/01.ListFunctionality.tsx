import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemAvatar,
    ListItemText,
    ListSubheader,
    IconButton,
    Avatar
} from "@mui/material";
import { Add as AddIcon, Person as PersonIcon } from "@mui/icons-material";

export function ListFunctionality() {
    return (
        <>
            <List dense subheader={<ListSubheader sx={{ textAlign: "left" }}>List Items</ListSubheader>} sx={{
                width: 300
            }}>
                <ListItem
                    // disableGutters
                    // disablePadding
                    divider
                >
                    <ListItemText primary="My first item" secondary={"An Item"} />
                </ListItem>
                <ListItemButton
                    component="a" href={"https://www.google.com"}
                    divider
                // disableRipple
                >
                    <ListItemText primary="My second item" secondary={"An Item"} />
                </ListItemButton>
                <ListItem divider secondaryAction={<IconButton onClick={() => { alert("icon clicked!") }}><AddIcon /></IconButton>}>
                    <ListItemButton onClick={() => { alert("clicked!") }}><ListItemText primary="My third item" secondary={"An Item"} /></ListItemButton>
                </ListItem>
                <ListItem divider>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText>
                        <ListItemText primary="John Elder" secondary={"Craft"} />
                    </ListItemText>
                </ListItem>
                <ListSubheader sx={{ textAlign: "left" }}>Avatar Section</ListSubheader>
                <ListItem
                    divider
                // alignItems={"flex-start"}
                >
                    <ListItemAvatar ><Avatar>C</Avatar></ListItemAvatar>
                    <ListItemText primary={"Carl Johnson"} secondary={"Employer"} />
                </ListItem>
            </List>
        </>
    )
}
