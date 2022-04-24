import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function TextDisplay() {
  const displayText = useSelector((state) => state.hudDisplay.displayText);
  return <Display className="text-display">{displayText}</Display>;
}

const Display = styled.div`
  grid-column: 1 / 40;
  grid-row: 27 / 28;

  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: orange;
`;
