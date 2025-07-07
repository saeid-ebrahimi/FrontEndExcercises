import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Navbar bg={"dark"} data-bs-theme={"dark"}>
            <Container>
                <Link to={"/"} className={"navbar-brand"}>Home</Link>
                <Navbar.Toggle aria-controls={"basic-navbar-nav"} />
                <Navbar.Collapse id={"basic-navbar-nav"}>
                    <Nav className="me-auto">
                        <Link className={"nav-link"} to="/post">Post</Link>
                        <NavDropdown title={"Account"} id={"basic-nav-dropdown"}>
                            <Link className={"dropdown-item"} to={"/register"}>Register</Link>
                            <Link className={"dropdown-item"} to={"/login"}>Login</Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}
