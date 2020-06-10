import React, { createContext, useReducer } from 'react';

export const TasksContext = createContext();

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

export const TasksProvider = ({ initialTasks, children }) => {
    const [tasks, dispatch] = useReducer(reducer, initialTasks);
    return (
        <TasksContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TasksContext.Provider>
    );
};
