import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function ResourceBar() {
  const theme = useSelector((state) => state.theme);

  return <Resources theme={theme}></Resources>;
}

const Resources = styled.div`
  grid-column: 40/ -1;
  grid-row: 24/27;

  border-left: 1px solid;
  border-top: 1px solid;

  ${({ theme }) =>
    theme &&
    `
        border-color: ${theme.borderColor};
        background-color: ${theme.backgroundColor};
        background-image: url(${theme.stoneTexture});
        background-position: bottom right;

    `}
`;
