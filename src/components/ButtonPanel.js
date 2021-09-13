import React from 'react';

const ButtonPanel = ({clickHandler}) => {
  const handleClick = (buttonName) => {
    clickHandler(buttonName)
  }
  return(
  <div className="btnContainer">
    <div className="group_1">
      <button type="button" clickHandler = {handleClick}>AC</button>
      <button type="button" clickHandler = {handleClick}>+/-</button>
      <button type="button" clickHandler = {handleClick}>%</button>
      <button type="button" clickHandler = {handleClick}>/</button>
    </div>
    <div className="group_2">
      <button type="button" clickHandler = {handleClick}>7</button>
      <button type="button" clickHandler = {handleClick}>8</button>
      <button type="button" clickHandler = {handleClick}>9</button>
      <button type="button" clickHandler = {handleClick}>*</button>
    </div>
    <div className="group_3">
      <button type="button" clickHandler = {handleClick}>4</button>
      <button type="button" clickHandler = {handleClick}>5</button>
      <button type="button" clickHandler = {handleClick}>6</button>
      <button type="button" clickHandler = {handleClick}>-</button>
    </div>
    <div className="group_4">
      <button type="button" clickHandler = {handleClick}>1</button>
      <button type="button" clickHandler = {handleClick}>2</button>
      <button type="button" clickHandler = {handleClick}>3</button>
      <button type="button" clickHandler = {handleClick}>+</button>
    </div>
    <div className="group_5">
      <button type="button" className="button_zero" clickHandler = {handleClick}>0</button>
      <button type="button" clickHandler = {handleClick}>.</button>
      <button type="button" clickHandler = {handleClick}>=</button>
    </div>
  </div>
);
  }

export default ButtonPanel;
