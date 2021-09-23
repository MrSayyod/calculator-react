import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const renderButton = (props) => {
  const {
    buttonName, clickHandler, color, wide,
  } = props;
  return (
    <Button
      onClick={() => {
        clickHandler(buttonName);
      }}
      className={wide ? 'zeroBtn' : 'otherBtn'}
      style={{ background: color }}
    >
      {buttonName}
    </Button>
  );
};

renderButton.defaultProps = {
  color: 'orange',
  wide: false,
};

renderButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default renderButton;
