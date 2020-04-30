import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Route,Link, NavLink, Switch, Redirect} from 'react-router-dom';

const buttonStyle= {
    width: '200px', 
    maxHeight: '40px', 
    minHeight: '40px',
    textTransform: 'none'
}

class ButtonLink extends React.Component {
  render () {

    return(
      <div>
        {this.props.cStyle === ''       
        ? <Link to={this.props.link} style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle}  variant="contained" color="default">
              {this.props.title}
            </Button>
          </Link>
        : <Link to={this.props.link} style={{ textDecoration: 'none' }}>
            <Button style={this.props.cStyle}  variant="contained" color="default">
             {this.props.title}
            </Button>
          </Link>   
        }
      </div>   
    
    );
  }
  
}
ButtonLink.defaultProps = {
  cStyle:'',
};
export default ButtonLink;