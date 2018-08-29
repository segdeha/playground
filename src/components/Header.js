import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    let { showBackLink } = this.props;
    return (
        <header>
            <h1>
                Animation playground
                {showBackLink ? <Link to="/">← back</Link> : null}
            </h1>
        </header>
    );
  }
}

export default Header;
