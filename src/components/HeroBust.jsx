import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function HeroBust() {
  const theme = useSelector((state) => state.theme);

  return (
    <HeroPanel theme={theme}>
      <HealthBar theme={theme} />
      <ManaBar theme={theme} />
    </HeroPanel>
  );
}

const HeroPanel = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(8, 1fr);

  ${({ theme }) =>
    theme &&
    `
        border-color: ${theme.borderColor};
        background-color: ${theme.backgroundColor};
        background-image: url(${theme.stoneTexture});
        background-position: center center;
    `}
`;

const HealthBar = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / -1;

  background-color: #b22929;

  border-left: 1px solid;
  border-right: 1px solid;

  ${({ theme }) => theme && `border-color: ${theme.borderColor};`}
`;

const ManaBar = styled.div`
  grid-column: 10 / -1;
  grid-row: 1 / -1;

  background-color: #2222ea;

  border-left: 1px solid;
  border-right: 1px solid;

  ${({ theme }) => theme && `border-color: ${theme.borderColor};`}
`;
