import React, { Component } from 'react';
import './Output.css';

class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: ""
    }
  }

  componentWillReceiveProps() {

    var t1 = "";
    var t2 = "";
    var op = "";
    var checkFirst = false;
    var operators = ['+', '-', '*', '/', "%", "+/-", "C"];
    var a = this.props.calcArray;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === "=") {

        var result;
        if (op == "+") {
          result = (parseFloat(t1) + parseFloat(t2)).toFixed(4);
        }
        else if (op == "-") {
          result = (parseFloat(t1) - parseFloat(t2)).toFixed(4);

        }
        else if (op == "/") {
          result = (parseFloat(t1) / parseFloat(t2)).toFixed(4);


        }
        else if (op == "*") {
          result = (parseFloat(t1) * parseFloat(t2)).toFixed(4);

        }
        else if (op == "%") {
          result = (parseFloat(t1) / 100).toFixed(4);

        }
        else if (op == "+/-") {
          result = this.state.output * -1;

        }
        else if (op == "") {
          result = t1;
        }
        if (isNaN(result)) {
          this.setState({ output: "Error" })
          return;
        }
        this.setState({ output: result });


      }
      else if (!operators.includes(a[i]) && !checkFirst) {
        t1 = t1 + a[i];
      }
      else if (operators.includes(a[i])) {
        op = a[i];
        checkFirst = true;
      }
      else if (checkFirst && !operators.includes(a[i])) {
        if(t1==""){
          t1=0;
        }
        t2 = t2 + a[i];
      }

    }



  }
  render() {

    return (
      <div className="output">
        <div className="output-data">
          {this.state.output}
        </div>
      </div>
    );
  }
}

export default Output;