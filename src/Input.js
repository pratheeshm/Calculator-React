import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);


  }


  render() {

    return (

      <div className="input">
        <div className="input-data">
          {this.props.inputArray}
        </div>

      </div>
    );
  }
}

export default Input;