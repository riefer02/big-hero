import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/images/big-hero-bg-1.jpg';

export default function WorldView() {
    return (<WorldDisplay></WorldDisplay>)
}

const WorldDisplay = styled.div`
    grid-column: 1 / 40;
    grid-row: 1 / 27;

    background-image: url(${backgroundImage});
    background-size: cover;
`;