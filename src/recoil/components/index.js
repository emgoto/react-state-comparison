import React from 'react';
import Name from './name';
import Tasks from './tasks';
import CreateTask from './create-task';
import { TasksProvider } from '../state/store';

const RecoilApp = () => (
    <>
        <h2>Recoil</h2>
        <TasksProvider>
            <Name />
            <Tasks />
            <CreateTask />
        </TasksProvider>
    </>
);

export default RecoilApp;
