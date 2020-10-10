import React from 'react';
import Name from './name';
import Tasks from './tasks';
import CreateTask from './create-task';

import TasksProvider from '../state/store';

const ReduxMobX = () => (
    <TasksProvider>
        <h2>mobx-react</h2>
        <Name />
        <Tasks />
        <CreateTask />
    </TasksProvider>
);

export default ReduxMobX;
