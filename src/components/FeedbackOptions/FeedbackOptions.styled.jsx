import styled from '@emotion/styled';

export const FeedbackList = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
  text-align: center;
`;

export const FeedbackItem = styled.li``;

export const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid #bdbebd;
  border-radius: 10px;
  background-color: #e9e9e9;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: var(--shadow);

  box-shadow: 5px 5px 5px grey;
  transition: all 250ms ease-in-out;

  :hover {
    background-color: #a9a9a9;
  }
`;
