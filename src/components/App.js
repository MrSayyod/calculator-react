import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

// const App = () => (
//   <>
//     <Display />
//     <ButtonPanel />
//   </>
// );

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: null,
      next: null,
      operation: null
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(buttonName) {
    const newResult = calculate(this.state, buttonName)
    this.setState(newResult)
  }

  render() {
    const {total, next, operation} = this.state
    return (
      <div className="displayResult">
        <Display result={{total}||{next}} />
        <ButtonPanel clickHandler = {this.handleClick} />
      </div>
    )
  }
}

export default App;
