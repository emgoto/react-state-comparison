import React from 'react';
import { TasksProvider } from '../state/store';
import Name from './name';
import Tasks from './tasks';
import CreateTask from './create-task';

const ReduxApp = () => (
    <>
        <h2>Redux</h2>
        <TasksProvider>
            <Name />
            <Tasks />
            <CreateTask />
        </TasksProvider>
    </>
);

export default ReduxApp;
