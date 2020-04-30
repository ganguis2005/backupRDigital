import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

const formControl = {
  
  minWidth: 200,
}

class SimpleSeltin extends React.Component {


  constructor(props){
    super(props);
    
    this.state = ({
        opcion: "",
    });
    // Set Init State
    this.setState({opcion: this.props.label});

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log('selected:', event.target.value);
    this.setState({opcion: event.target.value})
  }
  
  

  render(){
    return (
      <div>
        <FormControl style={formControl}>
        <InputLabel id="demo-simple-select-label">{this.props.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.opcion}
            onChange={this.handleChange}
          >
            {this.props.options.map(function(option){
                return <MenuItem value={option.value}>{option.name}</MenuItem>
            })}
          </Select>
        </FormControl>
    </div>
    );
  }
}
export default SimpleSeltin;