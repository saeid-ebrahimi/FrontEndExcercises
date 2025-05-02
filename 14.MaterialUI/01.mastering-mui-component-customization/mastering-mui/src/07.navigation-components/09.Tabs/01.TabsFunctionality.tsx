import { AppBar, Tab, Tabs, Toolbar, } from "@mui/material";
import { Home as HomeIcon, Store as StoreIcon, Person as PersonIcon, Mail as MailIcon } from "@mui/icons-material"
import { useState } from "react";

const routes = [
    { route: "Home", icon: <HomeIcon /> },
    { route: "Store", icon: <StoreIcon /> },
    { route: "About Us", icon: <PersonIcon /> },
    {
        route: "Contact Us",
        // "Contact Us but actually a lot longer title"
        icon: <MailIcon />
    }
    // "Test 1", "Test 2", "Test 3", "Test 4", "Test 5",
    // "Test 6", "Test 7", "Test 8", "Test 9"
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

export default function TabsFunctionality() {
    const [selectedTab, setSelectedTab] = useState("Home")
    return (
        <div>
            <AppBar color={"transparent"}>
                <Toolbar>
                    <Tabs
                        aria-label={"Main Navigation"}

                        // variant={"scrollable"}
                        variant={"fullWidth"}
                        // allowScrollButtonsMobile
                        scrollButtons={false}
                        // orientation={"vertical"}
                        centered
                        sx={{ width: "100%" }}
                        value={selectedTab}
                        onChange={(_e, newValue) => setSelectedTab(newValue)}>
                        {routes.map(({ route, icon }, index) => <Tab
                            {...a11yProps(index)}
                            wrapped
                            // disabled={route === "Store"}
                            value={route}
                            icon={icon}
                            iconPosition={"start"}
                            label={route}
                            key={route}
                            href={`/${route}`}
                        // LinkComponent={ }
                        />)}
                    </Tabs>
                </Toolbar>
            </AppBar>
            {renderContent(selectedTab)}
        </div>
    )
}
