import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Blocks from './components/Blocks';

import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
            <h1>Animation playground</h1>
        </header>
        <main>
            <BrowserRouter>
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
            </BrowserRouter>
        </main>
      </Fragment>
    );
  }
}

export default App;
