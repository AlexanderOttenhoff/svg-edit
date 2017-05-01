import React from 'react';
import PropTypes from 'prop-types';

const Selection = ({ startX, startY, endX, endY }) => <rect
  stroke="black"
  fill="transparent"
  strokeWidth={1}
  strokeDasharray={[5, 5]}
  x={Math.min(startX, endX)}
  y={Math.min(startY, endY)}
  width={Math.abs(endX - startX)}
  height={Math.abs(endY - startY)}
/>;

Selection.propTypes = {
  startX: PropTypes.number,
  startY: PropTypes.number,
  endX: PropTypes.number,
  endY: PropTypes.number,
};

Selection.defaultProps = {
  startX: PropTypes.number,
  startY: PropTypes.number,
  endX: PropTypes.number,
  endY: PropTypes.number,
};

export default Selection;
