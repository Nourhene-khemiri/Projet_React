import React from 'react';
import { Nav } from 'react-bootstrap';
import Status from '../../assets/Status.png';
import History from '../../assets/History.png'
import EL from '../../assets/EL.png'
import Authentification from '../../assets/Authentification.png'
import EUSB from '../../assets/EUSB.png'
import SE from '../../assets/SE.png'
import SUpdate from '../../assets/SUpdate.png'
import Maintenance from '../../assets/Maintenance.png'
import SPUpdate from '../../assets/SPUpdate.png'
import Test from '../../assets/Test.png'
import OperatingData from '../../assets/OperatingData.png'
import Version from '../../assets/Version.png'

interface NavigationMenuProps {}

const NavigationMenu: React.FC<NavigationMenuProps> = ({}) => {
  return (

    <Nav 
    className="flex-column" 
    style={{ backgroundColor: 'black', color: 'white', width: '250px', height: '100vh' }}
  >
    <Nav.Link href="/home" className="text-white d-flex align-items-center">
                         
            </Nav.Link>
    
     <br></br>
     <br></br>
     <br></br>
     <br></br>

     <Nav.Link href="/status-info" className="text-white d-flex align-items-center">
     <img src={Status} alt="Logo" 
      style={{ width: '35px' }} />

&nbsp; Status Info
                            
            </Nav.Link>
            <Nav.Link href="/history" className="text-white d-flex align-items-center">
            <img src={History} alt="Logo" 
      style={{ width: '35px'}} />       
      &nbsp;  History
            </Nav.Link>
            <Nav.Link href="/oprating-data" className="text-white d-flex align-items-center">
            <img src={OperatingData} alt="Logo" 
      style={{ width: '35px'}} />  
      &nbsp;  Operating Data
            </Nav.Link>
            <Nav.Link href="/products" className="text-white d-flex align-items-center">
            <img src={Version} alt="Logo" style={{ width: '35px'}} />  
            &nbsp;    Version
            </Nav.Link>
            <Nav.Link href="/customers" className="text-white d-flex align-items-center">
            <img src={Maintenance} alt="Logo" style={{ width: '35px'}} />  

&nbsp;    Maintenance
            </Nav.Link>
            <Nav.Link href="/customers" className="text-white d-flex align-items-center">
            <img src={Test} alt="Logo" style={{ width: '35px'}} />  
            &nbsp;    Test On Demand
            </Nav.Link>
            <Nav.Link href="/customers" className="text-white d-flex align-items-center">
            <img src={SUpdate} alt="Logo" style={{ width: '35px'}} />  

&nbsp;   Software Update
            </Nav.Link>
            <Nav.Link href="/customers" className="text-white d-flex align-items-center">
            <img src={SPUpdate} alt="Logo" style={{ width: '35px'}} />  
            &nbsp;   Security Package <br></br> &nbsp; Update
            </Nav.Link>
            <Nav.Link href="/customers" className="text-white d-flex align-items-center">
            <img src={Authentification} alt="Logo" style={{ width: '35px'}} />  

&nbsp;  Authentication <br></br> &nbsp; &nbsp;Management
            </Nav.Link>
            <Nav.Link href="/customers" className="text-white d-flex align-items-center">
            <img src={SE} alt="Logo" style={{ width: '35px'}} />  

&nbsp;  Security Events
            </Nav.Link>
            <Nav.Link href="/customers" className="text-white d-flex align-items-center">
            <img src={EL} alt="Logo" style={{ width: '35px'}} />  

&nbsp;  Enable Local
            </Nav.Link>
            <Nav.Link href="/customers" className="text-white d-flex align-items-center">
            <img src={EUSB} alt="Logo" style={{ width: '35px'}} />  

&nbsp;  Enable USB
            </Nav.Link>
  </Nav>         
  );
};

export default NavigationMenu;