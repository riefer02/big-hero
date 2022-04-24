import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function OptionsPanel() {
  const theme = useSelector((state) => state.theme);

  return (
    <Options theme={theme}>
      {[...Array(12)].map((i, index) => (
        <OptionButton theme={theme} key={index}></OptionButton>
      ))}
    </Options>
  );
}

const Options = styled.div`
  grid-column: 40 / -1;
  grid-row: 27 / -1;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0% 5%;

  border-top: 1px solid;
  border-left: 1px solid;

  ${({ theme }) =>
    theme &&
    `
        border-color: ${theme.borderColor};
        background-color: ${theme.backgroundColor};
    `}
`;

const OptionButton = styled.div`
  border: 1px solid;
  height: 19%;
  width: 19%;

  ${({ theme }) =>
    theme &&
    `
        border-color: ${theme.borderColor};
        background-color: ${theme.backgroundColor};
    `}
`;
