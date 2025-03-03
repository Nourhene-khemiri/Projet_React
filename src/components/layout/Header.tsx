import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/Logo.jpg'
import Authentification from '../../assets/Authentification.png'
import logoutt from '../../assets/logoutt.png'


interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
 
<>
<Navbar bg="dark" variant="dark"  style={{ width: '1910px' , marginTop:'-1800px', height:'80px' }}>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="mr-auto">
   
      <Nav.Link href="#features"><img src={Logo} alt="Logo" 
      style={{ width: '180px' ,marginLeft:'-20px' }} /></Nav.Link>
            <Nav.Link href="#features" className="text-white d-flex align-items-center mt-3"><img src={Authentification} alt="Logo" 
      style={{ width: '40px' ,marginLeft:'1300px'}} />  &nbsp; ProAdmin</Nav.Link>

<Nav.Link href="#features" className="text-white d-flex align-items-center mt-3"><img src={logoutt} alt="Logo" 
      style={{ width: '40px' }} />   Logout</Nav.Link>
 
    </Nav>
   
  </Navbar>

</>

  );
};

export default Header;