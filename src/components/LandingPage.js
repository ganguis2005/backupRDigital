import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {BrowserRouter as Router, Route,Link, NavLink, Switch, Redirect} from 'react-router-dom';
import './LandingPage.css';
import logo from './mullerLogo.png'
import ButtonLink from './shared/ButtonLink';


class LandingPage extends React.Component {
  render () {
    return(
      <div className="app">
        <header className="app__header">
          <div class="app__logo app__logo--medium"></div>
        </header>
        <nav className="app__content">
          <ButtonLink title="Weiter" link="/loginsignup"/>
        </nav>  
      </div>
    
    );
  }
}

export default LandingPage;
