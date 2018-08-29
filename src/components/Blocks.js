import React, { Component, Fragment } from 'react';

import Block from './Block';

class Blocks extends Component {
  render() {
    return (
        <Fragment>
            <Block />
            <Block />
            <Block />
            <Block />
        </Fragment>
    );
  }
}

export default Blocks;
