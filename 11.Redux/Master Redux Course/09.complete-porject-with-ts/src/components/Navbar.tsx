import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from 'react-bootstrap';
import { changeTheme } from '../redux/theme/theme.slice';
import { useAppDispatch } from '../redux/hooks';
import type { ChangeEvent } from 'react';


export default function NavigationBar({ theme }: { theme: "dark" | "light" }) {
    const dispatch = useAppDispatch()
    return (
        <>
            <Navbar bg={theme} data-bs-theme={theme}>
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form.Check type={"switch"}
                        id={"theme-mode"}
                        onChange={(_evt: ChangeEvent<HTMLInputElement>) => {
                            dispatch(changeTheme(theme === "light" ? "dark" : "light"))
                        }}
                        checked={theme === "dark"}
                        label={`${theme} mode`} className={"text-primary"} />
                </Container>
            </Navbar>
        </>
    );
}

