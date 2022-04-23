import React from 'react';
import ActionsSection from './ActionsSection';
import HudSection from './HudSection';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function Layout({ children }) {
  const themeColor = useSelector((state) => state.settings.themeColor);

  return (
    <AppLayout themeColor={themeColor} id="layout">
      <ActionsSection />
      <HudSection />
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

  ${({ themeColor }) =>
    themeColor &&
    `
        background-color: ${themeColor}
    `}
`;
