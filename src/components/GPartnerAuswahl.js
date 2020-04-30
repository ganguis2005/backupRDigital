import React from 'react'
import PropTypes from 'prop-types'
import logo from './mullerLogo.png'
import Button from '@material-ui/core/Button'
import {BrowserRouter as Router, Route,Link, NavLink, Switch, Redirect} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ButtonLink from './shared/ButtonLink';
import TextField from '@material-ui/core/TextField';
import FormPasswort from './shared/FormPasswort';
import AlignListItems from './shared/AlignListItems';


class GPartnerAuswahl extends React.Component {
 
  
  render () {
    
    return(
      <div className="app">
        <header className="app__header">
          <div className="app__logo app__logo--small"></div>
        </header>
        <div className="app__content">
          <p>Bitte waehle dir einen<br /> Gespreachspartner aus</p>
          
          <AlignListItems />
          
          
        </div>
      </div>    
    );

  }
}

export default GPartnerAuswahl;


