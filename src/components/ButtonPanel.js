import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const handleClick = (buttonName) => {
    props.clickHandler(buttonName);
  };
  return (
    <div className="btnContainer">
      <div className="group_1">
        <Button buttonName="AC" clickHandler={handleClick} />
        <Button buttonName="+/-" clickHandler={handleClick} />
        <Button buttonName="%" clickHandler={handleClick} />
        <Button buttonName="/" clickHandler={handleClick} />
      </div>
      <div className="group_2">
        <Button buttonName="7" clickHandler={handleClick} />
        <Button buttonName="8" clickHandler={handleClick} />
        <Button buttonName="9" clickHandler={handleClick} />
        <Button buttonName="*" clickHandler={handleClick} />
      </div>
      <div className="group_3">
        <Button buttonName="4" clickHandler={handleClick} />
        <Button buttonName="5" clickHandler={handleClick} />
        <Button buttonName="6" clickHandler={handleClick} />
        <Button buttonName="-" clickHandler={handleClick} />
      </div>
      <div className="group_4">
        <Button buttonName="1" clickHandler={handleClick} />
        <Button buttonName="2" clickHandler={handleClick} />
        <Button buttonName="3" clickHandler={handleClick} />
        <Button buttonName="+" clickHandler={handleClick} />
      </div>
      <div className="group_5">
        <Button buttonName="0" className="button_zero" clickHandler={handleClick} />
        <Button buttonName="." clickHandler={handleClick} />
        <Button buttonName="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
