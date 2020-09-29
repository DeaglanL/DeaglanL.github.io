import React from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';



function Layout(props) {
    return (
        <div>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/CV">CV</Nav.Link>
                        <Nav.Link href="#features">Projects</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                    </Nav>
                </Navbar>
            </header>
            {props.children}
            <footer>
                <Container fluid className="bg-dark">
                    <Row>
                        <Col className="d-flex justify-content-center py-3"><SocialIcon url="https://www.linkedin.com/in/deaglan-lynch" /></Col>
                        <Col className="d-flex justify-content-center py-3"><SocialIcon url="https://github.com/DeaglanL" /></Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}
export default Layout;