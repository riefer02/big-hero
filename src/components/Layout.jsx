import React from 'react';
import Heroes from './Heroes';
import ResourceBar from './ResourceBar';
import OptionsPanel from './OptionsPanel';
import StatusEffects from './StatusEffects';
import TextDisplay from './TextDisplay';
import Companions from './Companions';
import Map from './Map';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function Layout({ children }) {
  const theme = useSelector((state) => state.theme);

  return (
    <AppLayout theme={theme} id="layout">
      <Heroes />
      <OptionsPanel />
      <TextDisplay />
      <ResourceBar />
      <Map />
      <Companions />
      <StatusEffects />
      {children}
    </AppLayout>
  );
}

const AppLayout = styled.div`
  width: 100vw;
  aspect-ratio: 16/9;
  display: grid;
  grid-template-columns: repeat(48, 1fr);
  grid-template-rows: repeat(36, 1fr);

  ${({ theme }) =>
    theme &&
    `
        background-color: ${theme.backgroundColor};
    `}
`;
