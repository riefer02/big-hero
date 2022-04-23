import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import HeroBust from './HeroBust';

export default function HudSection() {
  const displayText = useSelector((state) => state.hudDisplay.displayText);

  return (
    <HUD className="hud-section">
      <TextDisplay className="text-display">{displayText}</TextDisplay>
      <HeroesList>
        {[...Array(4)].map((i, index) => (
          <HeroBust key={index}></HeroBust>
        ))}
      </HeroesList>
    </HUD>
  );
}

const HUD = styled.div`
  grid-column: 1 / 40;
  grid-row: 27 / -1;

  display: grid;
  grid-template-columns: repeat(40, 1fr);
  grid-template-rows: repeat(8, 1fr);

  background-color: yellow;
`;

const TextDisplay = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 2;

  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: orange;
`;

const HeroesList = styled.div`
  grid-column: 1 / -1;
  grid-row: 2/ -1;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5%;
  background-color: #b56cb5;
`;
