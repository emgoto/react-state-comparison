import React from 'react';
import { useTasks } from '../../state/store';
import TasksView from '../../../common/components/tasks';
import Task from '../task';

const Tasks = () => {
    const [tasks] = useTasks();

    return <TasksView Task={Task} tasks={tasks} />;
};

export default Tasks;
