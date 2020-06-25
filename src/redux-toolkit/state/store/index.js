import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import listNameReducer from '../reducers/list-name';
import tasksReducer from '../reducers/tasks';

const store = configureStore({
    reducer: { listName: listNameReducer, tasks: tasksReducer }
});

export const TasksProvider = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);
