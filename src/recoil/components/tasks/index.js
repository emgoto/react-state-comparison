import React from 'react';
import { useRecoilValue } from 'recoil';
import Task from '../task';
import tasksState from '../../state/tasks';
import TasksView from '../../../common/components/tasks';

const Tasks = () => {
    const tasks = useRecoilValue(tasksState);

    return <TasksView Task={Task} tasks={tasks} />;
};

export default Tasks;
