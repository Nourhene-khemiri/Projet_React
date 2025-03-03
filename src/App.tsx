import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavigationMenu from './components/layout/NavigationMenu';

import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (

    <Router>       
      <NavigationMenu />
      <Header></Header>
    </Router>     
  );
};

export default App;