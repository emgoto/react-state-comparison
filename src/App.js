import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import ReactApp from './react';
import ReactTrackedApp from './react-tracked';
import ReduxApp from './redux';
import ReduxAdvancedApp from './redux-advanced';

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
                </ul>
            </Route>
        </Switch>
    </Router>
);

export default App;
