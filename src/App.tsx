import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from './components/layout/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './components/layout/Sidebar2';
import MaintenancePage2 from './pages/MaintenancePage2';
import TestsOnDemandPage from './pages/TestsOnDemandPage';
import StatusInfoPage from './pages/StatusInfoPage';
import SoftwareUpdatePage from './pages/SoftwareUpdatePage';
import SecurityPackageUpdatePage from './pages/SecurityPackageUpdatePage';
import AuthenticationManagementPage from './pages/AuthenticationManagementPage';
import EnableUSBPage from './pages/EnableUSBPage';
import SecurityEventsPage from './pages/SecurityEventsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Container fluid>
        <Row>
          <Col xs={12} sm={3} lg={2} className="p-0">
            <Sidebar />
          </Col>
          <Col xs={12} sm={9} lg={10} className="p-4 flex-grow-1">
            <Routes>
              <Route path="/status-info" element={<StatusInfoPage />} />
              <Route path="/maintenance2" element={<MaintenancePage2 />} />
              <Route path="/Test" element={<TestsOnDemandPage />} />
              <Route path="/SoftwareUpdatePage" element={<SoftwareUpdatePage />} />
              <Route path="/SecurityPackageUpdatePage" element={<SecurityPackageUpdatePage />} />
              <Route path="/AuthenticationManagementPage" element={<AuthenticationManagementPage />} />
              <Route path="/EnableUSBPage" element={<EnableUSBPage />} />
              <Route path="/SecurityEventsPage" element={<SecurityEventsPage />} />



            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;