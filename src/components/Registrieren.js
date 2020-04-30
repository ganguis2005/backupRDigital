import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Route,Link, NavLink, Switch, Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import ButtonLink from './shared/ButtonLink';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


class Registrieren extends React.Component {
  
  render () {
    return(
      <div className="app">
        <header className="app__header">
          <div class="app__logo app__logo--small"></div>
        </header>
        <div className="app__content">
          <h3>Registrieren</h3>
          <nav>
           
            <Link to="/passwort1"  style={{ textDecoration: 'none' }}>
                <Button 
                      style={{
                          width: '165.8px', 
                          height: '50px',
                          margin:'5px',
                          textTransform: 'none'
                      }} 
                      variant="contained" 
                      color=""
                      startIcon={<LinkedInIcon />}
                  >
                      <p style={{fontSize: '10px'} }>Mit Xing oder LinkedIn Registrieren</p>
                  </Button>
            
            </Link>
            
            <br />
            <Link to="/formpersonal"  style={{ textDecoration: 'none' }}>
                <Button 
                    style={{marginTop:'10px', textTransform:'none', width:'165.8px',fontSize:'10px'}} 
                    variant="contained" 
                    color=""
                >
                    Manuelles Registrierung
                </Button>
            </Link>
            <div class="app__actions">
              <Link to="/">
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

export default Registrieren;