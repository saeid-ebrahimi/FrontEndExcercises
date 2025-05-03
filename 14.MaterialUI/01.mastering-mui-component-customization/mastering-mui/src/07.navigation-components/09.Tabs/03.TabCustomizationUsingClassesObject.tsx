import { AppBar, Tab, Tabs, Toolbar, tabClasses, tabsClasses } from "@mui/material";
import { Home as HomeIcon, Store as StoreIcon, Person as PersonIcon, Mail as MailIcon } from "@mui/icons-material"
import { useState } from "react";

const routes = [
    { route: "Home", icon: <HomeIcon /> },
    { route: "Store", icon: <StoreIcon /> },
    { route: "About Us", icon: <PersonIcon /> },
    { route: "Contact Us", icon: <MailIcon /> },
    { route: "Contact Us", icon: <MailIcon /> },
    { route: "Contact Us", icon: <MailIcon /> },
    { route: "Contact Us", icon: <MailIcon /> },
    { route: "Contact Us", icon: <MailIcon /> },
    { route: "Contact Us", icon: <MailIcon /> },
    { route: "Contact Us", icon: <MailIcon /> },
    { route: "Contact Us", icon: <MailIcon /> },
    { route: "Contact Us", icon: <MailIcon /> },
    { route: "Contact Us", icon: <MailIcon /> },
    { route: "Contact Us", icon: <MailIcon /> },
    { route: "Contact Us", icon: <MailIcon /> },

]

function renderContent(route: string) {
    switch (route) {
        case "Home":
            return <div style={{ marginTop: "5rem", textAlign: "center", backgroundColor: "#cad5e2", height: "5rem" }}>Home Content</div>
        case "Store":
            return <div style={{ marginTop: "5rem", textAlign: "center", backgroundColor: "#cad5e2", height: "5rem" }}>Store Content</div>
        case "About Us":
            return <div style={{ marginTop: "5rem", textAlign: "center", backgroundColor: "#cad5e2", height: "5rem" }}>About Us Content</div>
        case "Contact Us":
            return <div style={{ marginTop: "5rem", textAlign: "center", backgroundColor: "#cad5e2", height: "5rem" }}>Contact Us Content</div>
    }
}

function a11yProps(index: number) {
    return {
        id: "simple-tab-" + index,
        'aria-controls': "simple-tabpanel-" + index
    }
}

const scrollButtonStyles = {
    fontSize: "2rem"
}


export default function TabCustomizationUsingClassesObject() {
    const [selectedTab, setSelectedTab] = useState("Home")
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Tabs
                        aria-label={"Main Navigation"}
                        centered
                        // variant={"fullWidth"}
                        variant={"scrollable"}
                        // allowScrollButtonsMobile
                        scrollButtons
                        // orientation={"vertical"}
                        slotProps={{
                            startScrollButtonIcon: {
                                sx: {
                                    fill: "red",
                                    ...scrollButtonStyles
                                }
                            },
                            endScrollButtonIcon: {
                                sx: {
                                    fill: "blue",
                                    ...scrollButtonStyles
                                }
                            }
                        }}
                        sx={{
                            width: "100%",
                            [`& .${tabsClasses.indicator}`]: {
                                bgcolor: "#1d293d",
                            },
                            [`& .${tabsClasses.flexContainer}`]: {
                                // flexDirection: "column",
                                justifyContent: "flex-end",
                                // alignItems: 'center'
                            }
                        }}
                        value={selectedTab}
                        onChange={(_e, newValue) => setSelectedTab(newValue)}>
                        {routes.map(({ route, icon }, index) => <Tab
                            {...a11yProps(index)}
                            wrapped
                            sx={{

                                [`&.${tabClasses.selected}`]: {
                                    color: "#cad5e2",
                                    [`& .${tabClasses.iconWrapper}`]: {
                                        fill: "#cad5e2",
                                        fontSize: "2rem"
                                    },
                                },
                                [`&:not(.${tabClasses.selected})`]: {
                                    color: "#1d293d",
                                    [`& .${tabClasses.iconWrapper}`]: {
                                        fill: "#1d293d",
                                        fontSize: "2rem"
                                    },
                                },
                                mx: (theme) => theme.spacing(2),
                                // my: (theme) => theme.spacing(1),
                                fontFamily: "Verdana",
                                fontSize: '1rem',
                            }}
                            disabled={route === "Store"}
                            value={route}
                            icon={icon}
                            iconPosition={"start"}
                            label={route}
                            key={route}
                        // href={`/${route}`}
                        />)}
                    </Tabs>
                </Toolbar>
            </AppBar>
            {renderContent(selectedTab)}
        </div >
    )
}
