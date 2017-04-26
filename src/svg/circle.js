import React from 'react';
import PropTypes from 'prop-types';

const Circle = ({ cx, cy, r }) => (
  <circle
    cx={cx}
    cy={cy}
    r={r}
  />
);

Circle.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
  r: PropTypes.number,
};

Circle.defaultProps = {
  cx: 0,
  cy: 0,
  r: 0,
};

export default Circle;
