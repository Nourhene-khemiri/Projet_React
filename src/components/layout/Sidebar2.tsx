import { Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Status from '../../assets/Status.png';
import History from '../../assets/History.png'
import EL from '../../assets/EL.png'
import Authentification from '../../assets/Authentification.png'
import SE from '../../assets/SE.png'
import SUpdate from '../../assets/SUpdate.png'
import Maintenance from '../../assets/Maintenance.png'
import SPUpdate from '../../assets/SPUpdate.png'
import Test from '../../assets/Test.png'
import OperatingData from '../../assets/OperatingData.png'
import Version from '../../assets/Version.png'
import EUSB from '../../assets/EUSB.png'


const Sidebar: React.FC = () => {
  return (
    <Container fluid className="p-0">
      <div className="d-flex flex-column bg-dark text-white vh-100 p-3 position-fixed ">
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/status-info" className="text-white d-flex align-items-center">
            <img src={Status} alt="Status" style={{ width: '35px', marginRight: '8px' }} />
            <span className="d-none d-lg-inline">Status Info</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/history" className="text-white d-flex align-items-center">
            <img src={History} alt="Status" style={{ width: '35px', marginRight: '8px' }} />
            <span className="d-none d-lg-inline">History</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/oprating-data" className="text-white d-flex align-items-center">
            <img src={OperatingData} alt="Logo" style={{ width: '35px', marginRight: '8px' }} />
            <span className="d-none d-lg-inline">Operating Data</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/maintenance2" className="text-white d-flex align-items-center">
            <img src={Version} alt="Logo" style={{ width: '35px', marginRight: '8px' }} />
            <span className="d-none d-lg-inline">Version</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/maintenance" className="text-white d-flex align-items-center">
            <img src={Maintenance} alt="Logo" style={{ width: '35px', marginRight: '8px' }} />
            <span className="d-none d-lg-inline">Maintenance</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/maintenance" className="text-white d-flex align-items-center">
            <img src={Test} alt="Logo" style={{ width: '35px', marginRight: '8px' }} />
            <span className="d-none d-lg-inline">Test On Demand</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/SoftwareUpdatePage" className="text-white d-flex align-items-center">
            <img src={SUpdate} alt="Logo" style={{ width: '35px', marginRight: '8px' }} />
            <span className="d-none d-lg-inline">Software Update</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/SecurityPackageUpdatePage" className="text-white d-flex align-items-center">
            <img src={SPUpdate} alt="Logo" style={{ width: '35px', marginRight: '8px' }} />
            <span className="d-none d-lg-inline">Security Package Update</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/AuthenticationManagementPage" className="text-white d-flex align-items-center">
            <img src={Authentification} alt="Logo" style={{ width: '35px', marginRight: '8px' }} />
            <span className="d-none d-lg-inline">Authentication Management</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/SecurityEventsPage" className="text-white d-flex align-items-center">
            <img src={SE} alt="Logo" style={{ width: '35px', marginRight: '8px' }} />
            <span className="d-none d-lg-inline">Security Events</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/maintenance" className="text-white d-flex align-items-center">
            <img src={EL} alt="Logo" style={{ width: '35px', marginRight: '8px' }} />
            <span className="d-none d-lg-inline">Enable Local</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/EnableUSBPage" className="text-white d-flex align-items-center">
            <img src={EUSB} alt="Logo" style={{ width: '35px', marginRight: '8px' }} />
            <span className="d-none d-lg-inline">Enable USB</span>
          </Nav.Link>
        </Nav>
      </div>
    </Container>
  );
};

export default Sidebar;