import React, { Component } from 'react';
import './App.css';
import Buttons from './Buttons';
import Input from './Input';
import Output from './Output';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFromButtons: null,
      calcArray: [],
      inputArray: [],
      checkOperator: false,
      func: this.callFromButton
    }
    this.callFromButton = this.callFromButton.bind(this);
  }
  callFromButton(data) {

    var operators = ['+', '-', '*', '/', "%", "+/-"];

    if (!operators.includes(data) || (!operators.includes(data) && this.state.checkOperator) || (operators.includes(data) && !this.state.checkOperator)) {

      this.setState({ dataFromButtons: data });
      if (data != "C" && data != "+/-") {
        if (this.state.calcArray.includes("=")) {
          this.state.calcArray.pop();
        }
        this.state.calcArray.push(data);
      }
      if (data != "C" && data != "+/-" && data != "=") {
        this.state.inputArray.push(data);

      }
      if (data == "C") {
        var tempArray = this.state.inputArray;
        var lenInput = this.state.inputArray.length;
        var lenCal = this.state.calcArray.length;
        if (operators.includes(tempArray[lenInput - 1])) {
          this.setState({ checkOperator: false });
        }
        var del = this.state.inputArray.splice(-1, 1);
        if (this.state.calcArray[lenCal - 1] == "=") {
          this.state.calcArray.splice(-2, 2);
        }
        else {
          this.state.calcArray.splice(-1, 1);
        }
      }

    }
    if (operators.includes(data) && !this.state.checkOperator) {
      this.setState({ checkOperator: true });
    }
  }
  render() {
    return (
      <div>
        <Input inputArray={this.state.inputArray} />
        <Output calcArray={this.state.calcArray} />
        <Buttons func={this.callFromButton} />
      </div>
    );
  }
}

export default App;
