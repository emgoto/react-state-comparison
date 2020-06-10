import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import ReactApp from './react';
import ReactTrackedApp from './react-tracked';

const App = () => (
    <Router>
        <Switch>
            <Route path="/vanilla-react">
                <ReactApp />
            </Route>
            <Route path="/react-tracked">
                <ReactTrackedApp />
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
                </ul>
            </Route>
        </Switch>
    </Router>
);

export default App;
