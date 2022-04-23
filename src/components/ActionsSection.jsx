import React from 'react';
import styled from 'styled-components';

export default function ActionsSection() {
  return <ActionsList></ActionsList>;
}

const ActionsList = styled.div`
  grid-column: 40 / -1;
  grid-row: 1 / 48;
  border-left: 1px solid black;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
