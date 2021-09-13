import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };
  return (
    <div className="btnContainer">
      <div className="group_1">
        <Button buttonName="AC" clickHandler={handleClick} />
        <Button buttonName="+/-" clickHandler={handleClick} />
        <Button buttonName="%" clickHandler={handleClick} />
        <Button buttonName="/" clickHandler={handleClick} />
        {/* <button type="button" clickHandler={handleClick}>
          AC
        </button>
        <button type="button" clickHandler={handleClick}>
          +/-
        </button>
        <button type="button" clickHandler={handleClick}>
          %
        </button>
        <button type="button" clickHandler={handleClick}>
          /
        </button> */}
      </div>
      <div className="group_2">
        <Button buttonName="7" clickHandler={handleClick} />
        <Button buttonName="8" clickHandler={handleClick} />
        <Button buttonName="9" clickHandler={handleClick} />
        <Button buttonName="*" clickHandler={handleClick} />
        {/* <button type="button" clickHandler={handleClick}>
          7
        </button>
        <button type="button" clickHandler={handleClick}>
          8
        </button>
        <button type="button" clickHandler={handleClick}>
          9
        </button>
        <button type="button" clickHandler={handleClick}>
          *
        </button> */}
      </div>
      <div className="group_3">
        <Button buttonName="4" clickHandler={handleClick} />
        <Button buttonName="5" clickHandler={handleClick} />
        <Button buttonName="6" clickHandler={handleClick} />
        <Button buttonName="-" clickHandler={handleClick} />
        {/* <button type="button" clickHandler={handleClick}>
          4
        </button>
        <button type="button" clickHandler={handleClick}>
          5
        </button>
        <button type="button" clickHandler={handleClick}>
          6
        </button>
        <button type="button" clickHandler={handleClick}>
          -
        </button> */}
      </div>
      <div className="group_4">
        <Button buttonName="1" clickHandler={handleClick} />
        <Button buttonName="2" clickHandler={handleClick} />
        <Button buttonName="3" clickHandler={handleClick} />
        <Button buttonName="+" clickHandler={handleClick} />
        {/* <button type="button" clickHandler={handleClick}>
          1
        </button>
        <button type="button" clickHandler={handleClick}>
          2
        </button>
        <button type="button" clickHandler={handleClick}>
          3
        </button>
        <button type="button" clickHandler={handleClick}>
          +
        </button> */}
      </div>
      <div className="group_5">
        <Button buttonName="0" className="button_zero" clickHandler={handleClick} />
        <Button buttonName="." clickHandler={handleClick} />
        <Button buttonName="=" clickHandler={handleClick} />
        {/* <button
          type="button"
          className="button_zero"
          clickHandler={handleClick}
        >
          0
        </button>
        <button type="button" clickHandler={handleClick}>
          .
        </button>
        <button type="button" clickHandler={handleClick}>
          =
        </button> */}
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
