import React from 'react';
import { useTrackedState } from '../../state/store';
import TasksView from '../../../common/components/tasks';
import Task from '../task';

const Tasks = () => {
    const state = useTrackedState();

    return <TasksView Task={Task} tasks={state.tasks} />;
};

export default Tasks;
