import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Blocks from './Blocks';

class Main extends Component {
  render() {
    return (
        <main>
            <Switch>
                <Route path="/blocks" component={Blocks} />
                <Route>
                    <ul>
                        <li>
                            <Link to="/blocks">
                                Blocks
                            </Link>
                        </li>
                    </ul>
                </Route>
            </Switch>
        </main>
    );
  }
}

export default Main;
