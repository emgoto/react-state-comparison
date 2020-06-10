import React from 'react';

import { mockTasks } from '../../common/mocks';
import { TasksProvider } from '../state';

import Tasks from './tasks';
import CreateTask from './create-task';

const ReactTrackedApp = () => {
    // This would be replaced with a fetch call to grab the real data
    const initialTasks = mockTasks;

    return (
        <TasksProvider initialTasks={initialTasks}>
            <Tasks tasks={initialTasks} />
            <CreateTask />
        </TasksProvider>
    );
};

export default ReactTrackedApp;
