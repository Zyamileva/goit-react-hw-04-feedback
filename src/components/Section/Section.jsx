import React from 'react';
import PropTypes from 'prop-types';
import { Title, Container } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
