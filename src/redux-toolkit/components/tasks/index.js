import React from 'react';
import { useSelector } from 'react-redux';
import { tasksSelector } from '../../state/selectors';
import TasksView from '../../../common/components/tasks';
import Task from '../task';

const Tasks = () => {
    const tasks = useSelector(tasksSelector);

    return <TasksView Task={Task} tasks={tasks} />;
};

export default Tasks;
