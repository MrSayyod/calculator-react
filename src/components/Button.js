import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const renderButton = (props) => {
  const { buttonName, clickHandler } = props;
  return (
    <Button onClick={() => {
      clickHandler(buttonName);
    }}
    >
      {buttonName}
    </Button>
  );
};
renderButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default renderButton;
