import PropTypes from 'prop-types';

const Button = function () {
  return (
    <button>{props.buttonName}</button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired
};

export default Button;