import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import ReactApp from './react';
import ReactTrackedApp from './react-tracked';
import ReduxApp from './redux';

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
                        <Link to="/redux">React Redux example</Link>
                    </li>
                </ul>
            </Route>
        </Switch>
    </Router>
);

export default App;
