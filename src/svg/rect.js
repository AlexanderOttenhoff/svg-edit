import React from 'react';
import PropTypes from 'prop-types';
import presentation from './presentation';

const Rect = props => <rect {...props} />;

Rect.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  rx: PropTypes.number,
  ry: PropTypes.number,
  ...presentation.propTypes,
};

Rect.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  rx: 0,
  ry: 0,
  ...presentation.defaultProps,
};

export default Rect;
