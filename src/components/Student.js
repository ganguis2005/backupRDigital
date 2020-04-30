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

class Student extends React.Component {

  constructor(props){
    super(props);
    this.options = [
      {name: "Wirtschaftsinformatik", value: 1},
      {name: "Bwl", value: 2},
      {name: "Informatik", value: 3},
      {name: "Sozialwissenschaften", value: 4},
      {name: "Naturwissenschaften", value: 5},
      {name: "Sonstiges", value: 6},
    ]
    
  }

  render () {
    return(
      <div className="app">
        <header className="app__header">
          <div className="app__logo app__logo--small"></div>
        </header>
        <div className="app__content">
          <p>Student</p>

          <SimpleSeltin label="Studiengang" options={this.options}/>
          
          <nav>
            <ButtonLink cStyle={{marginTop:'20px',width:'200px', textTransform:'none'}} title="Weiter" link="/passwort3"/>  
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

export default Student;
