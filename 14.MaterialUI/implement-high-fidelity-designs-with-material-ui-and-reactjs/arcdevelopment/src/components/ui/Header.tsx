import React, { PropsWithChildren, useEffect, useState } from "react";
import { AppBar, Toolbar, useScrollTrigger, Typography, Tabs, Tab, makeStyles, styled, Button } from "@mui/material";

import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

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
    const [activeTab, setActiveTab] = useState(0)
    function handleChangeTab(evt: React.SyntheticEvent, value: number) {
        setActiveTab(value)
    }
    const tabStyles = {
        minWidth: 10,
        marginLeft: "25px",
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
    }, [])
    const TABS = [
        { id: 0, link: "/", label: "Home" },
        { id: 1, link: "/services", label: "Services" },
        { id: 2, link: "/revolution", label: "The Revolution" },
        { id: 3, link: "/about", label: "About Us" },
        { id: 4, link: "/contact", label: "Contact Us" }
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
                            {TABS.map(tab => (<Tab sx={(theme) => ({ tabStyles, ...theme.typography.tab })} component={Link} to={tab.link} label={tab.label} key={tab.id} />))}
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
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <ToolbarMargin className={classes.toolbarMargin} />
        </React.Fragment>

    )
}