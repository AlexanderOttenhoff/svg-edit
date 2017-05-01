import React from 'react';
import PropTypes from 'prop-types';
import presentation from './presentation';

const Line = props => <line {...props} />;

Line.propTypes = {
  x1: PropTypes.number,
  x2: PropTypes.number,
  y1: PropTypes.number,
  y2: PropTypes.number,
  ...presentation.propTypes,
};

Line.defaultProps = {
  x1: 0,
  x2: 0,
  y1: 0,
  y2: 0,
  ...presentation.defaultProps,
};

export default Line;
