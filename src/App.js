import { useState } from 'react';

import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const getFeedback = e => {
    const { value } = e.currentTarget;
    switch (value) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const getPositivePercentage = total => {
    const percentage = parseInt((good / total) * 100);
    return `${percentage}%`;
  };

  const total = good + neutral + bad;
  const positivePercentage = getPositivePercentage(total);
  return (
    <div className="App">
      <Section title={'Please leave feedback!'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={getFeedback}
        ></FeedbackOptions>
        {total === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        )}
      </Section>
    </div>
  );
}
