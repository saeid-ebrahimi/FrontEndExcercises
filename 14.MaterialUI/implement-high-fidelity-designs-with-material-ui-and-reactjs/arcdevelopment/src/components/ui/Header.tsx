import React, { PropsWithChildren, useEffect, useState } from "react";
import { AppBar, Toolbar, useScrollTrigger, Typography, Tabs, Tab, makeStyles, styled, Button, Menu, MenuItem } from "@mui/material";

import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { theme } from "./Theme";

interface Props {
    window?: () => Window;
    children?: React.ReactElement<{ elevation?: number }>;
}

function ElevationScroll(props: Props) {
    const { children, window } = props
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });
    return children ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    }) : null;
}
// useStyles is deprecated from MUI v5
// const useStyles = makeStyles((theme: { mixins: { toolbar: any; }; }) => ({
//     toolbarMargin: {
//         ...theme.mixins.toolbar
//     }
// }))
const PREFIX = 'Header'
const classes = {
    toolbarMargin: `${PREFIX}-toolbarMargin`,
    logo: `${PREFIX}-logo`,
}
const ToolbarMargin = styled('div')(({ theme }) => ({
    [`&.${classes.toolbarMargin}`]: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
}))

const Logo = styled('img')(({ theme }) => ({
    [`&.${classes.logo}`]: {
        height: "8em",
    }
}))


export default function Header(props: PropsWithChildren) {
    // const classes = useStyles()
    const [activeTab, setActiveTab] = useState(0);
    const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
    const [openMenu, setOpenMenu] = useState(false)
    const [selectedSubMenu, setSelectedSubMenu] = useState<number>(0)
    function handleChangeTab(evt: React.SyntheticEvent, value: number) {
        setActiveTab(value)
    }

    function handleClick(evt: React.MouseEvent<HTMLElement>) {
        setMenuAnchorEl(evt.currentTarget)
        setOpenMenu(true)
    }

    function handleMenuItemClick(evt: React.MouseEvent<HTMLElement>, id: number) {
        setMenuAnchorEl(evt.currentTarget)
        setOpenMenu(false)
        setSelectedSubMenu(id)
        setActiveTab(TABS.filter(tab => tab.label === "Services")?.[0]?.id)
        handleClose(evt)

    }
    function handleClose(evt: React.MouseEvent<HTMLElement>) {
        setMenuAnchorEl(evt.currentTarget)
        setOpenMenu(false)
        setActiveTab(TABS.filter(tab => tab.label === "Services")?.[0]?.id)
    }

    const tabStyles = {
        minWidth: 10,
        marginLeft: "25px",
    }
    const menuItemStyles = {
        opacity: 0.7,
        "&:hover":
        {
            opacity: 1,
        }
    }
    useEffect(() => {
        TABS.forEach(tab => {
            if (window.location.pathname.includes(tab.link)) {
                setActiveTab(tab.id)
            }
            if (window.location.pathname === "/") {
                setActiveTab(0)
            }
        })
        SERVICES_SUBMENUS.forEach(tab => {
            if (window.location.pathname.includes(tab.link)) {
                setSelectedSubMenu(tab.id)
            }
        })
    }, [])
    const TABS = [
        { id: 0, link: "/", label: "Home" },
        { id: 1, link: "/services", label: "Services" },
        { id: 2, link: "/revolution", label: "The Revolution" },
        { id: 3, link: "/about", label: "About Us" },
        { id: 4, link: "/contact", label: "Contact Us" }
    ]
    const SERVICES_SUBMENUS = [
        { id: 1, link: "/services", label: "Services" },
        { id: 5, link: "/services/custom-software", label: "Custom Software Development" },
        { id: 6, link: "/services/mobile-apps", label: "Mobile App Development" },
        { id: 7, link: "/services/websites", label: "Website Development" },
    ]
    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar >
                    <Toolbar disableGutters>
                        {/* <Typography variant={"h3"} color={"textPrimary"}> Arc Development</Typography> */}
                        <Button disableRipple sx={{
                            padding: "0",
                            "&:hover": {
                                backgroundColor: "transparent",
                            }
                        }} component={Link} to={"/"} onClick={() => { setActiveTab(0) }}>
                            <Logo className={classes.logo} src={logo} height={65} alt={"Arc Development logo"} />
                        </Button>
                        <Tabs value={activeTab} indicatorColor={"primary"} textColor={"inherit"} onChange={handleChangeTab} sx={{
                            marginLeft: "auto"
                        }}>
                            {TABS.map(tab => {
                                if (tab.label === "Services") {
                                    return <Tab sx={(theme) => ({ tabStyles, ...theme.typography.tab })}
                                        onMouseOver={handleClick}
                                        onClick={() => { }}
                                        aria-owns={menuAnchorEl ? "simple-menu" : undefined}
                                        aria-haspopup={menuAnchorEl ? "true" : undefined}
                                        // component={Link} to={tab.link}
                                        label={tab.label}
                                        key={tab.id} />
                                } else {
                                    return <Tab sx={(theme) => ({ tabStyles, ...theme.typography.tab })} component={Link} to={tab.link} label={tab.label} key={tab.id} />
                                }
                            })}
                        </Tabs>
                        <Button variant={"contained"} color={"secondary"} sx={(theme) => ({
                            ...theme.typography.estimate,
                            borderRadius: "50px",
                            ml: "50px",
                            mr: "25px",
                            height: "45px",
                        })}>
                            Free Estimate
                        </Button>
                        <Menu id={"simple-menu"} elevation={0} keepMounted={true} anchorEl={menuAnchorEl} slotProps={{
                            paper: {
                                style: {
                                    background: theme.palette.primary.main,
                                    color: "white",
                                    margin: "-1rem",
                                    borderRadius: 0,
                                }
                            }
                        }} open={openMenu} onClose={handleClick} MenuListProps={{ onMouseLeave: handleClose }}>
                            {SERVICES_SUBMENUS.map(
                                submenu => <MenuItem
                                    selected={(submenu.id === selectedSubMenu) && (activeTab === TABS.filter(tab => tab.label === "Services")?.[0]?.id)}
                                    key={submenu.id}
                                    sx={(theme) => ({ ...theme.typography.tab, ...menuItemStyles })}
                                    onClick={(evt) => { handleMenuItemClick(evt, submenu.id) }}
                                    component={Link}
                                    to={submenu.link}>
                                    {submenu.label}
                                </MenuItem>)}
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <ToolbarMargin className={classes.toolbarMargin} />
        </React.Fragment>

    )
}