import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from 'react-bootstrap';

export default function NavigationBar({ mode, setMode }) {
    return (
        <>
            <Navbar bg={mode} data-bs-theme={mode}>
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form.Check type={"switch"} id={"theme-mode"} onChange={(evt) => {
                        mode === "light" ? setMode("dark") : setMode("light")
                    }} label={'switch mode'} />
                </Container>
            </Navbar>
        </>
    );
}

