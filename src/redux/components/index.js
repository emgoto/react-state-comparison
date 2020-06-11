import React from 'react';
import { TasksProvider } from '../state/store';
import Tasks from './tasks';
import CreateTask from './create-task';

const ReduxApp = () => (
    <>
        <h2>Redux</h2>
        <TasksProvider>
            <Tasks />
            <CreateTask />
        </TasksProvider>
    </>
);

export default ReduxApp;
