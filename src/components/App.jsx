import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Container } from './App.styled';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = key => {
    switch (key) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const percentGood = () => {
    const total = countTotalFeedback();
    return Math.round((total ? good / total : 0) * 100);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleClick}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={percentGood()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Container>
  );
};
