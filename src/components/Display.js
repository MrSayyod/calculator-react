import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { total } = props;
  return (
    <div>
      <h1>{total}</h1>
    </div>
  );
};

Display.propTypes = {
  total: PropTypes.string,
};

Display.defaultProps = {
  total: '0',
};

export default Display;
