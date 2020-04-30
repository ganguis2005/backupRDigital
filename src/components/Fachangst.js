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

class Fachangst extends React.Component {

  constructor(props){
    super(props);
    this.options1 = [
      {name: "opt 1", value: 18},
      {name: "opt 2", value: 5},
      {name: "opt 3", value: 1},
    ]
    this.options2 = [
      {name: "opt 1", value: 18},
      {name: "opt 2", value: 5},
      {name: "opt 3", value: 1},
    ]
    
  }

  render () {
    return(
      <div className="app">
        <header className="app__header">
          <div className="app__logo app__logo--small"></div>
        </header>
        <div className="app__content">
          <p>Fachangestellter</p>

          <SimpleSeltin label="Fachausbildung" options={this.options1}/>
          <SimpleSeltin label="Betrieb" options={this.options2}/>
        
          <TextField  
              style={{marginTop:'20px'}}
              id="outlined-multiline-static"
              label="Arbeitserfahrung"
              multiline
              rows={4}
              defaultValue=""
              variant="outlined" 
          />  
          
          
          <nav>
            <ButtonLink cStyle={{marginTop:'20px', width:'200px', textTransform:'none'}} title="Weiter" link="/passwort4"/>  
            <div class="app__actions">
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

export default Fachangst;