import PropTypes from 'prop-types';

const Button = ({ buttonName, clickHandler }) => {
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };
  return (
    <button type="button" onClick={handleClick}>
      {buttonName}
    </button>
  );
};
Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
