import React from 'react';

const ButtonPanel = () => (
  <div className='btnContainer'>
    <div className="group_1">
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button">/</button>
    </div>
    <div className="group_2">
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button">X</button>
    </div>
    <div className="group_3">
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button">-</button>
    </div>
    <div className="group_4">
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">+</button>
    </div>
    <div className="group_5">
      <button type="button">0</button>
      <button type="button">.</button>
      <button type="button">=</button>
    </div>
  </div>
);

export default ButtonPanel;
