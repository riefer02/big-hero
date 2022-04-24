import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function HeroBust() {
  return (
    <HeroPanel>
      <HealthBar />
      <ManaBar />
    </HeroPanel>
  );
}

const HeroPanel = styled.div`
  height: 100%;
  width: 100%;
  background-color: #c0c1ff;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(8, 1fr);
`;

const HealthBar = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / -1;

  background-color: red;

  border-left: 1px solid black;
  border-right: 1px solid black;
`;

const ManaBar = styled.div`
  grid-column: 10 / -1;
  grid-row: 1 / -1;

  background-color: blue;

  border-left: 1px solid black;
  border-right: 1px solid black;
`;
