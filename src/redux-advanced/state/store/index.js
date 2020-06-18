import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers';

const store = createStore(reducer);

export const TasksProvider = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);
