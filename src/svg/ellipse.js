import React from 'react';
import PropTypes from 'prop-types';
import presentation from './presentation';

const Ellipse = props => <ellipse {...props} />;

Ellipse.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
  rx: PropTypes.number,
  ry: PropTypes.number,
  ...presentation.propTypes,
};

Ellipse.defaultProps = {
  cx: 0,
  cy: 0,
  rx: 0,
  ry: 0,
  ...presentation.defaultProps,
};

export default Ellipse;
