import React from 'react';
import styled from 'styled-components';
import HeroBust from './HeroBust';
import { useSelector } from 'react-redux';

export default function Heroes() {
  const theme = useSelector((state) => state.theme);

  return (
    <HUD>
      <HeroesList theme={theme}>
        {[...Array(4)].map((i, index) => (
          <HeroBust key={index}></HeroBust>
        ))}
      </HeroesList>
    </HUD>
  );
}

const HUD = styled.div`
  grid-column: 1 / 40;
  grid-row: 28 / -1;
`;

const HeroesList = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 5%;

  ${({ theme }) =>
    theme &&
    `
        border-color: ${theme.borderColor};
        background-color: ${theme.backgroundColor};
    `}
`;
