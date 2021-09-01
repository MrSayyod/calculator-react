import React from 'react';
import PropTypes from 'prop-types';

const Display = function () {
  return (
    <div>
      <h1>{props.result}</h1>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

Display.defaultProps = {
  result: '0',
};

export default Display;