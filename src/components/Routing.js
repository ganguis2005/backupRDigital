import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect, withRouter} from 'react-router-dom';
import Auth from './Auth';
import FormPersonal from './FormPersonal';
import Beschaeftigung from './Beschaeftigung'
import Schuler from './Schuler';
import Student from './Student';
import Fachangst from './Fachangst';
import Absolvent from './Absolvent';
import LoginSuccess from './LoginSuccess';
import Passwort from './Passwort';
import GPartnerAuswahl from './GPartnerAuswahl';
import Vermittlung from './Vermittlung';
import Rating from './Rating';
import LoginSignUp from './LoginSignUp';
import Registrieren from './Registrieren'



class Routing extends React.Component {
  render () {
   return(
     <Router>
       <Route path="/" exact component={LoginSignUp} />
       <Route path="/registrieren" component={Registrieren} />
       <Route path="/auth" component={Auth} />
       <Route path="/formpersonal" component={withRouter(FormPersonal)} />
       <Route path="/beschaeftigung" component={withRouter(Beschaeftigung)} />

       <Route path="/schuler" component={Schuler} />
       <Route path="/student" component={Student} />
       <Route path="/fachangst" component={Fachangst} />
       <Route path="/absolvent" component={Absolvent} />
       <Route path="/loginsuccess" component={LoginSuccess} />
       
     
       <Route
          path='/passwort1'
          render={(props) => <Passwort {...props} from={"/registrieren"} />}
        />
        
       <Route 
          path='/passwort2'
          render={(props) => <Passwort {...props} from={"/schuler"} />}
       />
      
       <Route   
          path='/passwort3'
          render={(props) => <Passwort {...props} from={"/student"}/>}
       />
       
       <Route 
          path="/passwort4" 
          render={(props) => <Passwort {...props} from={"/fachangst"}/>} 
       />
       
       <Route 
          path="/passwort5" 
          render={(props) => <Passwort {...props} from={"/absolvent"}/>} 
       />

       <Route path="/gpartnerauswahl" component={GPartnerAuswahl} />
       <Route path="/vermittlung" component={Vermittlung} />
       <Route path="/rating" component={Rating} />

     </Router>
   );

  }
}

export default Routing;
