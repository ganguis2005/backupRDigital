import React from 'react';
import Routing from './components/Routing';
import LandingPage from './components/LandingPage'
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from 'react-router-dom';

import './App.css';

function App() {

    return (
      <div className="app-container">
        <Routing />
      </div>  
    );

}

export default App;
