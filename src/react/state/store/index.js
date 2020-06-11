import React, { createContext, useReducer } from 'react';
import { reducer } from '../reducers';
import { initialState } from '../../../common/mocks';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <TasksContext.Provider value={{ state, dispatch }}>
            {children}
        </TasksContext.Provider>
    );
};
