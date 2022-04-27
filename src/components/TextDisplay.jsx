import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function TextDisplay() {
  const displayText = useSelector((state) => state.hudDisplay.displayText);
  const theme = useSelector((state) => state.theme);

  return (
    <Display theme={theme}>
      <TextBackground>{displayText}</TextBackground>
    </Display>
  );
}

const Display = styled.div`
  grid-column: 1 / 40;
  grid-row: 27 / 28;

  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 1px solid;
  border-bottom: 1px solid;
  font-family: cairo, sans-serif;

  ${({ theme }) =>
    theme &&
    `
        background-color: ${theme.backgroundColor};
        border-color: ${theme.borderColor};
        background-image: url(${theme.stoneTexture});
        background-position: center center;
    `}
`;

const TextBackground = styled.div`
  background-color:rgba(0,0,0,0.5);
  color:  white;
  width: 100%;
  text-align:center;
`