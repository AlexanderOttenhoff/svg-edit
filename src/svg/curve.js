import React from 'react';
import PropTypes from 'prop-types';
import presentation from './presentation';

const Curve = ({ points: [mx, my, ...points], ...props }) => <path d={`M${mx}${my}C${points}Z`} {...props} />;

Curve.propTypes = {
  points: PropTypes.arrayOf(PropTypes.number),
  ...presentation.propTypes,
};

Curve.defaultProps = {
  points: 0,
  ...presentation.defaultProps,
};

export default Curve;
