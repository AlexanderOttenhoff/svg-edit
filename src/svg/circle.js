import React from 'react';
import PropTypes from 'prop-types';
import presentation from './presentation';

const Circle = props => <circle {...props} />;

Circle.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
  r: PropTypes.number,
  ...presentation.propTypes,
};

Circle.defaultProps = {
  cx: 0,
  cy: 0,
  r: 0,
  ...presentation.defaultProps,
};

export default Circle;
