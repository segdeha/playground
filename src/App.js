import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';

import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Fragment>
                        <Header />
                        <Main />
                    </Fragment>
                </Route>
                <Route>
                    <Fragment>
                        <Header showBackLink={true} />
                        <Main />
                    </Fragment>
                </Route>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
