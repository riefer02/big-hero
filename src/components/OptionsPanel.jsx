import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function OptionsPanel() {
  return (
    <Options>
      {[...Array(12)].map((i, index) => (
        <OptionButton key={index}></OptionButton>
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

  background-color: white;
  border-top: 1px solid black;
  border-left: 1px solid black;
`;

const OptionButton = styled.div`
  border: 1px solid black;
  background-color: silver;
  height: 19%;
  width: 19%;
  /* border-radius: 50%; */
`;
