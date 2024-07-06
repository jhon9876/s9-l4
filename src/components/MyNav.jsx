import { Component } from "react";
import { Col, Container, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";

class MyNav extends Component {
  render() {
    return (
      <Container fluid className="d-flex justify-content-center">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#">Home</Nav.Link>
                  <Nav.Link href="#">About</Nav.Link>
                  <Nav.Link href="#">Browse</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MyNav;
