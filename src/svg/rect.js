import React from 'react';
import PropTypes from 'prop-types';

const Rect = ({ x, y, width, height, rx, ry }) => (
  <rect
    x={x}
    y={y}
    width={width}
    height={height}
    rx={rx}
    ry={ry}
  />
);

Rect.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  rx: PropTypes.number,
  ry: PropTypes.number,
};

Rect.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  rx: 0,
  ry: 0,
};

export default Rect;
