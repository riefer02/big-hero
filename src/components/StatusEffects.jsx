import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function StatusEffects() {
  const theme = useSelector((state) => state.theme);

  return <StatusBar theme={theme}></StatusBar>;
}

const StatusBar = styled.div`
  grid-column: 40/ -1;
  grid-row: 19/24;

  border-left: 1px solid;

  ${({ theme }) =>
    theme &&
    `
        border-color: ${theme.borderColor};
        background-color: ${theme.backgroundColor};
    `}
`;
