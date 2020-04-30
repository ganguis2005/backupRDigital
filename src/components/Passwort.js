import React from 'react'
import PropTypes from 'prop-types'
import logo from './mullerLogo.png'
import Button from '@material-ui/core/Button'
import {BrowserRouter as Router, Route,Link, NavLink, Switch, Redirect} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ButtonLink from './shared/ButtonLink';
import TextField from '@material-ui/core/TextField';
import FormPasswort from './shared/FormPasswort';


class Passwort extends React.Component {
 
  
  render () {
    
    return(
      <div className="app">
        <header className="app__header">
          <div className="app__logo app__logo--small"></div>
        </header>
        <div className="app__content">
          <p>Jetzt brauchst du nur <br /> noch ein Passwort </p>
          
          <form>
            <FormPasswort label="Passwort" />
            <FormPasswort label="wiederholen" />
          </form>
          
          <nav>
            
            <ButtonLink link="/gpartnerauswahl" cStyle={{marginTop:'20px', textTransform:'none', width:"200px"}} title="Weiter" />   
            <div className="app__actions">
              
              
                <Link to={this.props.from}>
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
Passwort.defaultProps = {
  from:"",
};
export default Passwort;


