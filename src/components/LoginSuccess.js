import React from 'react'
import PropTypes from 'prop-types'
import BasicStyle from './BasicStyle.css'
import {BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';

class LoginSuccess extends React.Component {
  render () {
    return(
      <div className="BasicStyle">
        <h1>LoginSuccess</h1>
        <nav>
          <Link to="/passwort">
            <button renderAs="button">
              <span>weiter</span>
            </button>
          </Link>
        </nav>   
      </div>  
    );
  }
}

export default LoginSuccess;
