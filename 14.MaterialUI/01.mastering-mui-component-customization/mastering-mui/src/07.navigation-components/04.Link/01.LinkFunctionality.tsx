import { Link } from "@mui/material";
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps,
    MemoryRouter,
    StaticRouter,
} from 'react-router';

function Router(props: { children?: React.ReactNode }) {
    const { children } = props;
    if (typeof window === 'undefined') {
        return <StaticRouter location="/">{children}</StaticRouter>;
    }

    return <MemoryRouter>{children}</MemoryRouter>;
}

const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, 'to'>>(
    (props, ref) => (
        <RouterLink
            ref={ref}
            to="/material-ui/getting-started/installation/"
            {...props}
        />
    ),
);

export default function LinkFunctionality() {
    return (
        <div>
            <Link underline="hover" target="_blank" rel="noreferrer" color={"secondary"} variant={"h4"} href="https://www.google.com">Google Site</Link>
            <br />
            <Router>
                <Link component={RouterLink} to="/">
                    React router with prop forwarding
                </Link>
                <br />
                <Link component={LinkBehavior}>React router without prop forwarding</Link>
            </Router>
        </div>
    )
}
