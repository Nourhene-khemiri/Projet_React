import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/layout/Sidebar2';
import StatusInfo from './pages/StatusInfoPage';
import Header from './components/layout/Header';
import MaintenancePage2 from './pages/MaintenancePage2';
import StatusInfoPage from './pages/StatusInfoPage';

function App() {
  return (
    <Router>
      <Container fluid className="p-0" style={{ height: '100vh' }}> 
      <Header></Header>
        <Row className="g-0" style={{ height: '100%' }}>
          <Col xl={1} lg={5} sm={1} xs={1} md={2} style={{ height: '100%',backgroundColor:'red' }}>
            <Sidebar />
          </Col>
          <Col  xl={11} lg={7} sm={11} xs={11} md={10}  className="p-0" style={{ height: '100%', backgroundColor:'blue' }}>
            <div style={{ paddingLeft: '20px', height: '100%' }}>
            <Routes>
          
           
              <Route path="/status-info" element={<StatusInfoPage />} />
              </Routes>
            </div>
          </Col>
        </Row>
       
      </Container>
    </Router>
  );
}

export default App;