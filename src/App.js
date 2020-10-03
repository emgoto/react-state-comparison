import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import ReactApp from './react';
import ReactTrackedApp from './react-tracked';
import ReduxApp from './redux';
import ReduxAdvancedApp from './redux-advanced';
import ReduxToolkitApp from './redux-toolkit';
import ReactSweetStateApp from './react-sweet-state';
import ReactMobXApp from './react-mobx';

const App = () => (
    <Router>
        <Switch>
            <Route path="/react">
                <ReactApp />
            </Route>
            <Route path="/react-tracked">
                <ReactTrackedApp />
            </Route>
            <Route path="/redux">
                <ReduxApp />
            </Route>
            <Route path="/redux-advanced">
                <ReduxAdvancedApp />
            </Route>
            <Route path="/redux-toolkit">
                <ReduxToolkitApp />
            </Route>
            <Route path="/react-sweet-state">
                <ReactSweetStateApp />
            </Route>
            <Route path="/mobx-react">
                <ReactMobXApp />
            </Route>
            <Route path="/">
                <ul>
                    <li>
                        <Link to="/react">
                            React (useReducer + Context) example
                        </Link>
                    </li>
                    <li>
                        <Link to="/react-tracked">React Tracked example</Link>
                    </li>
                    <li>
                        <Link to="/redux">
                            React Redux example (with hooks)
                        </Link>
                    </li>
                    <li>
                        <Link to="/redux-advanced">
                            React Redux example (with connect())
                        </Link>
                    </li>
                    <li>
                        <Link to="/redux-toolkit">
                            React Redux Toolkit example
                        </Link>
                    </li>
                    <li>
                        <Link to="/react-sweet-state">
                            react-sweet-state example
                        </Link>
                    </li>

                    <li>
                        <Link to="/mobx-react">mobx-react example</Link>
                    </li>
                </ul>
            </Route>
        </Switch>
    </Router>
);

export default App;
