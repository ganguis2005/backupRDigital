import React from 'react'
import PropTypes from 'prop-types'
import logo from './mullerLogo.png'
import Button from '@material-ui/core/Button'
import {BrowserRouter as Router, Route,Link, NavLink, Switch, Redirect} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ButtonLink from './shared/ButtonLink';


class Beschaeftigung extends React.Component {
  render () {
    return(
      <div className="app">
        <header className="app__header">
          <div class="app__logo app__logo--small"></div>
        </header>
        <div className="app__content">
          <p>Bitte wähle <br />  deine Beschäftigung</p>
          <nav>
            <ButtonLink title="Schüler" link="/schuler"/>
            <ButtonLink title="Student" link="/student"/>
            <ButtonLink title="Fachangestellter" link="/fachangst"/>
            <ButtonLink title="Absolvent" link="/absolvent"/>
            
            <div class="app__actions">
              <Link to="/formpersonal">
                  <Button class="back-btn" variant="contained" color="default">
                    <span class="back-btn__icon">
                      <ArrowBackIcon />
                    </span>
                  </Button>
              </Link>    
            </div>
          </nav> 
        </div>
    </div>    
    );
  }
}

export default Beschaeftigung;