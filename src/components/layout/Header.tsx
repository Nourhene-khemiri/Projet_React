import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/Logo.jpg';
import Authentification from '../../assets/Authentification.png';
import logoutt from '../../assets/logoutt.png';
import { Navbar, Nav, Container } from 'react-bootstrap';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Container fluid>
          <div className="row mr-auto p-2">
            <div className="col-12 col-md-8 d-flex align-items-center">
              <Navbar.Brand href="/">
                <img src={Logo} alt="Logo" style={{ width: '180px' }} />
              </Navbar.Brand>
            </div>
            <div className="col-12 col-md-4 d-flex align-items-center" >
              <div className="d-flex justify-content-end w-100">
                <Nav className="d-flex align-items-center">
                  <Nav.Link href="#logout" className="text-white d-flex align-items-center p-2">
                    <img src={logoutt} alt="Logout" style={{ width: '35px' }} className="me-2" />
                    Logout
                  </Nav.Link>
                  <Nav.Link href="#proadmin" className="text-white d-flex align-items-center ms-3 p-2">
                    <img src={Authentification} alt="Authentification" style={{ width: '35px' }} className="me-2" />
                    ProAdmin
                  </Nav.Link>
                </Nav>
                {/* Suppression de <Navbar /> car il ne sert à rien ici */}
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;