import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="box">
    <p className="text">Good: {good}</p>
    <p className="text">Neutral: {neutral}</p>
    <p className="text">Bad: {bad}</p>
    <p className="text">Total: {total}</p>
    <p className="text">Positive feedback: {positivePercentage} %</p>
  </div>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
