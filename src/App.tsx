import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavigationMenu from './components/layout/NavigationMenu';

import './App.css';
import Header from './components/layout/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import StatusInfoPage from './pages/StatusInfoPage';
import HistoryPage from './pages/HistoryPage';
import OperatingDataPage from './pages/OperatingDataPage';
import VersionPage from './pages/VersionPage';
import MaintenancePage from './pages/MaintenancePage';

const App: React.FC = () => {
  return (

    <Router>
    <Header />
    <div className="d-flex">
      <NavigationMenu/>
      <div className="container-fluid">
        <div>
          <div >
            <Routes>
              <Route path="/status-info" element={<StatusInfoPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/oprating-data" element={<OperatingDataPage />} />
              <Route path="/version" element={<VersionPage />} />
              <Route path="/maintenance" element={<MaintenancePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  </Router>
  );
};

export default App;