import React, { useContext } from 'react';
import { TasksContext } from '../../state/store';
import TasksView from '../../../common/components/tasks';
import Task from '../task';

const Tasks = () => {
    const {
        state: { tasks }
    } = useContext(TasksContext);

    return <TasksView Task={Task} tasks={tasks} />;
};

export default Tasks;
