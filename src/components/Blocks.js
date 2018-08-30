import React, { Component } from 'react';
import styled from 'styled-components';

import Block from './Block';

const Container = styled.div`
    display: grid;
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    grid-template-columns: 50% 50%;
`;

class Blocks extends Component {
  render() {
    return (
        <Container>
            <Block />
            <Block />
            <Block />
            <Block />
        </Container>
    );
  }
}

export default Blocks;
