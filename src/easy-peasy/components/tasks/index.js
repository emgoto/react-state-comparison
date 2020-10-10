import React from 'react';
import { useStoreState } from 'easy-peasy';
import Task from '../task';
import TasksView from '../../../common/components/tasks';

const Tasks = () => {
    const tasks = useStoreState((state) => state.tasks);

    return <TasksView Task={Task} tasks={tasks} />;
};

export default Tasks;
