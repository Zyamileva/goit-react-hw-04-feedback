import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsItems,
  StatisticsList,
  VoiteRate,
  Voite,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItems>
        <Voite>Good: </Voite>
        <VoiteRate>{good}</VoiteRate>
      </StatisticsItems>
      <StatisticsItems>
        <Voite>Neutral: </Voite>
        <VoiteRate>{neutral}</VoiteRate>
      </StatisticsItems>
      <StatisticsItems>
        <Voite>Bad: </Voite>
        <VoiteRate>{bad}</VoiteRate>
      </StatisticsItems>
      <StatisticsItems>
        <Voite>Total: </Voite>
        <VoiteRate>{total}</VoiteRate>
      </StatisticsItems>
      <StatisticsItems>
        <Voite>Positive feedback: </Voite>
        <VoiteRate>{positivePercentage} %</VoiteRate>
      </StatisticsItems>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
