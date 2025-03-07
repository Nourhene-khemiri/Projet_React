import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/Logo.jpg';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand d-none d-sm-block" href="#"> 
        <img src={Logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
      </a>

      {/* Contenu de la navbar (visible en permanence, sans collapse) */}
      <div className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item active">
          <a className="nav-link" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
      </div>
    </nav>
  );
};

export default Header;