import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export class App extends React.Component {
  state = {
    good: 3,
    neutral: 2,
    bad: 2,
  };
  handleIncrement = e => {
    if (e.currentTarget.name === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    }
    if (e.currentTarget.name === 'neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    }
    if (e.currentTarget.name === 'bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
  };
  render() {
    return (
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedbackOptions onLeaveFeedback={this.handleIncrement} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
