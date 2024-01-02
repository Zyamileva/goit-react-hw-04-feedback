import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackList, FeedbackItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map((element, index) => {
        const title = element.replace(element[0], element[0].toUpperCase());
        return (
          <FeedbackItem key={index}>
            <Button type="button" onClick={() => onLeaveFeedback(element)}>
              {title}
            </Button>
          </FeedbackItem>
        );
      })}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
