import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Route,Link, NavLink, Switch, Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import ButtonLink from './shared/ButtonLink';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';




class LoginSignUp extends React.Component {
  render () {
    return(
      <div className="app">
        <header className="app__header">
          <div class="app__logo app__logo--small"></div>
        </header>
        <div className="app__content">
          <nav>
            
              <Link  style={{ textDecoration: 'none' }}>  
                <Button
                    style={{marginTop:'20px', textTransform:'none', width:"200px"}}
                    variant="contained"
                    color="primary"
                    startIcon={<PersonIcon />}
                >
                    Anmelden
                </Button>
              </Link>  
              <br />
              <Link to="/registrieren" style={{ textDecoration: 'none' }}>  
                <Button
                    style={{marginTop:'20px', textTransform:'none', width:"200px"}}
                    variant="contained"
                    startIcon={<PersonAddIcon />}
                >
                    Registrieren
                </Button>
              </Link>  
             
          </nav>  
        </div>
      </div>  
     
        
      
    );
  }
}

export default LoginSignUp;