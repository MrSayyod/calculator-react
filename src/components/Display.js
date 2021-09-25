import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { total, next, operation } = props;
  return (
    <div className="display" data-testid="display-test">
      { total }
      { ' ' }
      { operation }
      { ' ' }
      { next }
    </div>
  );
};

Display.propTypes = {
  total: PropTypes.string,
  operation: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = {
  total: '0',
  operation: null,
  next: null,
};

export default Display;
