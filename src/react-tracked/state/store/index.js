import React, { useReducer } from 'react';
import { createContainer } from 'react-tracked';
import { reducer } from '../reducers';

const useValue = ({ reducer, initialState }) =>
    useReducer(reducer, initialState);

const { Provider, useTracked, useTrackedState, useUpdate } = createContainer(
    useValue
);

export const TasksProvider = ({ children, initialState }) => (
    <Provider reducer={reducer} initialState={initialState}>
        {children}
    </Provider>
);

export { useTracked, useTrackedState, useUpdate };
