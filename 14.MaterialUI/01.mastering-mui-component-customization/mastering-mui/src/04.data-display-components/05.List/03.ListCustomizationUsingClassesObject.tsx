import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemAvatar,
    ListItemText,
    ListSubheader,
    IconButton,
    Avatar,
    listSubheaderClasses,
    listItemClasses,
    listItemTextClasses,
    listItemIconClasses,
    avatarClasses,
    iconButtonClasses,
    touchRippleClasses,
} from "@mui/material";
import { Add as AddIcon, Person as PersonIcon } from "@mui/icons-material";


export function ListCustomizationUsingClassesObject() {
    return (
        <Box sx={{
            bgcolor: "#1E293B",
            [`& .${listSubheaderClasses.root}`]: {
                width: "100%",
                bgcolor: "#0F172A",
                fontFamily: "verdana",
                color: "#F1F5F9",
                fontSize: "1.2rem",
            },
            [`& .${listItemClasses.divider}`]: {
                borderColor: "#94A3B8",
                borderWidth: "2px"
            },
            [`& .${listItemTextClasses.primary}`]: {
                color: "#CBD5E1",
                fontFamily: "verdana",
                fontSize: "1rem"
            },
            [`& .${listItemTextClasses.secondary}`]: {
                color: "#94A3B8",
                fontFamily: "verdana",
                fontSize: "0.8rem"
            },
            [`& .${listItemIconClasses.root} > svg`]: {
                fill: "#1E293B",
                bgcolor: "#94A3B8",
                padding: "5px",
                borderRadius: "100%",
                width: "35px",
                height: "35px"
            },
            [`& .${avatarClasses.root}`]: {
                fontFamily: "verdana",
                color: "#1E293B",
                fontSize: "1.5rem",
                fontWeight: 600,
                bgcolor: "#94A3B8",
            },
            [`& .${iconButtonClasses.root}`]: {
                bgcolor: "#94A3B8",
                "& > svg": {
                    fill: "#1E293B",
                    fontSize: "1.5rem",
                },
                [`& .${touchRippleClasses.root}`]: {
                    color: "#1E293B",
                    opacity: 0.9
                }
            },
            [`& .${touchRippleClasses.root}`]: {
                color: "#94A3B8",
                opacity: 0.9
            },

        }}>
            <List dense subheader={<ListSubheader sx={{ textAlign: "left" }}>List Items</ListSubheader>} sx={{
                width: 300
            }}>
                <ListItem

                    // disableGutters
                    // disablePadding
                    divider
                >
                    <ListItemText inset primary="My first item" secondary={"An Item"} />
                </ListItem>
                <ListItemButton
                    component="a" href={"https://www.google.com"}
                    divider
                // disableRipple
                >
                    <ListItemText inset primary="My second item" secondary={"An Item"} />
                </ListItemButton>
                <ListItem divider secondaryAction={<IconButton onClick={() => { console.log("icon clicked!") }}><AddIcon /></IconButton>}>
                    <ListItemButton onClick={() => { console.log("clicked!") }}>
                        <ListItemText sx={{
                            pl: 5,
                        }} inset primary="My third item" secondary={"An Item"} />
                    </ListItemButton>
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
        </Box>

    )
}
