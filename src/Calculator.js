import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        result: 0,
        num1: '',
        num2: ''
    }
  }

  handleFirstNum = e => {
      this.setState({
          num1: Number.parseInt(e.target.value)
      })
  }

 handleSecondNum = e => {
      this.setState({
           num2: Number.parseInt(e.target.value)
          })
  }

  add = () => {
    this.setState({
      result: this.state.num1 + this.state.num2
    })
  }

  subtract = () => {
    this.setState({
      result: this.state.num1 - this.state.num2
    })
  }

  multiply = () => {
    this.setState({
      result: this.state.num1 * this.state.num2
    })
  }

  divide = () => {
    this.setState({
      result: this.state.num1 / this.state.num2
    })
  }

  clearInput = () => {
    this.setState({
        result: 0,
        num1: '',
        num2: ''
    })
  }

  render () {
    return (
      <div>
        <div>
          <h1>Result: {this.state.result}</h1>
          <input onChange={this.handleFirstNum} placeholder="First Number" value={this.state.num1}/>
          <input onChange={this.handleSecondNum} placeholder="Second Number" value={this.state.num2}/>
          <button onClick={this.clearInput}>Clear</button>
        </div>
        <div>
          <button onClick={this.add}>+</button>
          <button onClick={this.subtract}>-</button>
          <button onClick={this.multiply}>x</button>
          <button onClick={this.divide}>/</button>
        </div>
      </div>
    );
  }
}

export default Calculator;