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


export default App;
