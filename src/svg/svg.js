import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({ children, x, y, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width={width}
    height={height}
    viewBox={`${x} ${y} ${width} ${height}`}
  >
    {children}
  </svg>
);

Svg.propTypes = {
  children: PropTypes.node,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

Svg.defaultProps = {
  children: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

export default Svg;
