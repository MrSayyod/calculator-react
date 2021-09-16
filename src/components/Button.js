import PropTypes from "prop-types";

const Button = (props) => {
  const { buttonName, clickHandler } = props;
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
