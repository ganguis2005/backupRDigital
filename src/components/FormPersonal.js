import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Route,Link, NavLink, Switch, Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import ButtonLink from './shared/ButtonLink';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class FormPersonal extends React.Component {
  render () {
    return(
      <div className="app">
        <header className="app__header">
          <div class="app__logo app__logo--small"></div>
        </header>
        <div className="app__content">
          <form>
            <TextField id="vorname" label="Vorname" />
            <br />
            <TextField id="nachname" label="Nachname" />
            <br />
            <TextField id="email" label="E-mail" />
          </form>
          <nav>
            <Link>
              <Button  variant="" color="default">
                Datenschutz
              </Button>
            </Link>
            <br /> 
            <ButtonLink title="Weiter" link="/beschaeftigung"/>
            <div class="app__actions">
              <Link to="/registrieren">
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

export default FormPersonal;
