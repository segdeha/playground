import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { randomNamedColor } from '../lib/random';

const Container = styled.header`
    background: ${randomNamedColor()};
`;

class Header extends Component {
  render() {
    let { showBackLink } = this.props;
    return (
        <Container>
            <h1>
                Animation playground
                {showBackLink ? <Link to="/">← back</Link> : null}
            </h1>
        </Container>
    );
  }
}

export default Header;
