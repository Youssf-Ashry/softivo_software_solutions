import { Button, Container, Nav, Navbar } from "react-bootstrap";

function MyNav() {
  return (
    <Navbar expand="lg" className="softivo-nav" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          soft<span>ivo</span>
          <i />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navigation" />
        <Navbar.Collapse id="main-navigation">
          <Nav className="mx-auto nav-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#solutions">Solutions</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
          <Button href="#contact" className="nav-button">
            Start a Project
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
