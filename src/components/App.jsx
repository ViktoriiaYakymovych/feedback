import { Component } from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    good: 3,
    neutral: 3,
    bad: 3,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  leaveFeedback = e => {
    console.log(e.target);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please, leave feedback">
          <FeedbackOptions onLeaveFeedback={this.leaveFeedback} />
          {/* options={} onLeaveFeedback={} */}
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
        <Notification message="There is no feedback" />
        <GlobalStyle />
      </>
    );
  }
}