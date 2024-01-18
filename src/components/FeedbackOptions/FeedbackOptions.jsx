import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackList, FeedbackItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKey = Object.keys(options);
  console.log(onLeaveFeedback);
  return (
    <FeedbackList>
      {optionsKey.map((element, index) => {
        const title = element.replace(element[0], element[0].toUpperCase());
        return (
          <FeedbackItem key={index}>
            <Button
              type="button"
              name={element}
              onClick={() => onLeaveFeedback(element)}
            >
              {title}
            </Button>
          </FeedbackItem>
        );
      })}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
