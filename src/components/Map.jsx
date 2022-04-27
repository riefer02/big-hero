import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function Map() {
  const theme = useSelector((state) => state.theme);

  return <MapContainer theme={theme}></MapContainer>;
}

const MapContainer = styled.div`
  grid-column: 40/ -1;
  grid-row: 1/12;

  border-left: 1px solid;
  border-bottom: 1px solid;

  ${({ theme }) =>
    theme &&
    `
        border-color: ${theme.borderColor};
        background-color: ${theme.backgroundColor};
        background-image: url(${theme.stoneTexture});
        background-position: center center;

    `}
`;
