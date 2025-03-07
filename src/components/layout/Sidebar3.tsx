import { Navbar, Nav } from 'react-bootstrap';

function Sidebar3() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="flex-column">
      <Navbar.Brand href="#home">Mon App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">
          <Nav.Link href="#link1">Lien 1</Nav.Link>
          <Nav.Link href="#link2">Lien 2</Nav.Link>
          <Nav.Link href="#link3">Lien 3</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar3;