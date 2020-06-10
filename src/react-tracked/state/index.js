import React, { useReducer } from 'react';

import { createContainer } from 'react-tracked';

const reducer = (tasks, action) => {
    switch (action.type) {
        case 'createTask': {
            const { id, name } = action.payload;
            return { ...tasks, [id]: { id, name, checked: false } };
        }
        case 'updateTaskName': {
            const { id, name } = action.payload;
            const updatedTask = { ...tasks[id], name };
            return { ...tasks, [id]: updatedTask };
        }
        case 'updateTaskChecked': {
            const { id, checked } = action.payload;
            const updatedTask = { ...tasks[id], checked };
            return { ...tasks, [id]: updatedTask };
        }

        case 'deleteTask': {
            const { id } = action.payload;
            const newTasks = { ...tasks };
            delete newTasks[id];
            return newTasks;
        }

        default: {
            return tasks;
        }
    }
};

const useValue = ({ reducer, initialState }) =>
    useReducer(reducer, initialState);
const { Provider, useTrackedState, useUpdate } = createContainer(useValue);

export const TasksProvider = ({ children, initialTasks }) => (
    <Provider reducer={reducer} initialState={initialTasks}>
        {children}
    </Provider>
);

export { useTrackedState, useUpdate };
