import React from 'react';
import styled from 'styled-components';

export default function HeroBust() {
  return (
    <HeroPanel>
      {/* To be continued... */}
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
`;

const ManaBar = styled.div`
  grid-column: 10 / -1;
  grid-row: 1 / -1;

  background-color: blue;
`;
