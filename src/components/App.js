import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import Navbar from '../layouts/Navbar';

const App = () => {
  const [total, setTotal] = useState('0');
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    const newResult = calculate({ total, next, operation }, buttonName);
    setTotal(newResult.total);
    setNext(newResult.next);
    setOperation(newResult.operation);
  };

  return (
    <>
      <Navbar />
      <div className="displayResult">
        <Display total={total} next={next} operation={operation} />
        <ButtonPanel handleClick={(buttonName) => handleClick(buttonName)} />
      </div>
    </>
  );
};

export default App;
