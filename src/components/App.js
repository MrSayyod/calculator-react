// import React, { Component } from 'react';
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       total: null,
//       next: null,
//       operation: null,
//     };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick =(buttonName) => {
//     const newResult = calculate(this.state, buttonName);
//     this.setState(newResult);
//   }

//   render() {
//     const { total, next } = this.state;
//     return (
//       <div className="displayResult">
//         <Display total={next || total || '0'} />
//         <ButtonPanel handleClick={this.handleClick} />
//       </div>
//     );
//   }
// }

const App = () => {
  const [total, setTotal] = useState('0');
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    // Number(total);
    const newResult = calculate({ total, next, operation }, buttonName);
    setTotal(newResult.total);
    setNext(newResult.next);
    setOperation(newResult.operation);
  };

  return (
    <div className="displayResult">
      {/* <Display total={total || next || '0'} /> */}
      <Display total={total} next={next} operation={operation} />
      <ButtonPanel handleClick={(buttonName) => handleClick(buttonName)} />
    </div>
  );
};

export default App;
