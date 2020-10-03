import React from 'react';
import { StoreProvider, createStore } from 'easy-peasy';
import updateListName from '../actions/list-name';
import taskActions from '../actions/tasks';
import { initialState } from '../../../common/mocks';

const store = createStore({
    ...initialState,
    updateListName,
    ...taskActions
});

export const TasksProvider = ({ children }) => (
    <StoreProvider store={store}>{children}</StoreProvider>
);
