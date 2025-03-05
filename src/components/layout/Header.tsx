import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/Logo.jpg'


interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#"> <span className="sr-only"><img src={Logo} alt="Logo" 
      style={{ width: '200px' }} />

</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
      </ul>
      <span className="navbar-text">
       
      </span>
    </div>
  </nav>
  );
};

export default Header;