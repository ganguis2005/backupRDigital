import React from 'react'
import PropTypes from 'prop-types'
import logo from './mullerLogo.png'
import Button from '@material-ui/core/Button'
import {BrowserRouter as Router, Route,Link, NavLink, Switch, Redirect} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ButtonLink from './shared/ButtonLink';
import SimpleSeltin from './shared/SimpleSeltin';
import TextField from '@material-ui/core/TextField';


const buttonStyle= {
  width: '300px', 
  maxHeight: '40px', 
  minHeight: '40px'
  
}

class Schuler extends React.Component {

  constructor(props){
    super(props);
    this.options1 = [
      {name: "Mathe", value: 18},
      {name: "Biologie", value: 5},
      {name: "Chemie", value: 1},
    ]
    this.options2 = [
      {name: "1 Klasse", value: 18},
      {name: "2 Klasse", value: 5},
      {name: "3 Klasse", value: 1},
    ]
    
  }

  render () {
    return(
      <div className="app">
        <header className="app__header">
          <div className="app__logo app__logo--small"></div>
        </header>
        <div className="app__content">
          <p>Schüler</p>

          <SimpleSeltin label="Schwerpunkt" options={this.options1}/>
          <SimpleSeltin label="Klasse" options={this.options2}/>
          <form>
            <TextField id="schule" label="Schule" />
          </form>
          
          <nav>
            
            <ButtonLink cStyle={{marginTop:'20px', textTransform:'none', width:"200px"}} title="Weiter" link="/passwort2"/>   
            <div className="app__actions">
               
              <Link to="/beschaeftigung">
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

export default Schuler;
