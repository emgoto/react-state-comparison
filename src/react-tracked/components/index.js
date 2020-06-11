import React from 'react';

import { initialState } from '../../common/mocks';
import { TasksProvider } from '../state/store';

import Name from './name';
import Tasks from './tasks';
import CreateTask from './create-task';

const ReactTrackedApp = () => (
    <>
        <h2>React Tracked</h2>
        <TasksProvider initialState={initialState}>
            <Name />
            <Tasks />
            <CreateTask />
        </TasksProvider>
    </>
);

export default ReactTrackedApp;
