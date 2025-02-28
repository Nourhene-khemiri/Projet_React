import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import AuthenticationManagementPage from './pages/AuthenticationManagementPage';
import AuthenticationPage from './pages/AuthenticationPage';
import HistoryPage from './pages/HistoryPage';
import MaintenancePage from './pages/MaintenancePage';
import OperatingDataPage from './pages/OperatingDataPage';
import SecurityEventsPage from './pages/SecurityEventsPage';
import SecurityPackageUpdatePage from './pages/SecurityPackageUpdatePage';
import SoftwareUpdatePage from './pages/SoftwareUpdatePage';
import StatusInfoPage from './pages/StatusInfoPage';
import VersionPage from './pages/VersionPage';
import TestsOnDemandPage from './pages/TestsOnDemandPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/AuthenticationManagementPage" element={<AuthenticationManagementPage />} />
        <Route path="/AuthenticationPage" element={<AuthenticationPage />} />
        <Route path="/HistoryPage" element={<HistoryPage />} />
        <Route path="/MaintenancePage" element={<MaintenancePage />} />
        <Route path="/OperatingDataPage" element={<OperatingDataPage />} />
        <Route path="/SecurityEventsPage" element={<SecurityEventsPage />} />
        <Route path="/SecurityPackageUpdatePage" element={<SecurityPackageUpdatePage />} />
        <Route path="/SoftwareUpdatePage" element={<SoftwareUpdatePage />} />
        <Route path="/StatusInfoPage" element={<StatusInfoPage />} />
        <Route path="/TestsOnDemandPage" element={<TestsOnDemandPage />} />
        <Route path="/Version" element={<VersionPage />} />
      </Routes>
    </Router>
  );
}

export default App;