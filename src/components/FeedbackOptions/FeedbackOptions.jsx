import React from 'react';
import './FeedbackOptions.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div>
    <h2>Please leave feedback</h2>
    <button type="button" name="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" name="neutral" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" name="bad" onClick={onLeaveFeedback}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
