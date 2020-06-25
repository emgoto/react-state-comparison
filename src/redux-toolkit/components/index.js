import React from 'react';
import { TasksProvider } from '../state/store';
import Name from './name';
import Tasks from './tasks';
import CreateTask from './create-task';

const ReduxToolkitApp = () => (
    <>
        <h2>Redux Toolkit</h2>
        <TasksProvider>
            <Name />
            <Tasks />
            <CreateTask />
        </TasksProvider>
    </>
);

export default ReduxToolkitApp;
