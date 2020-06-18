import React from 'react';
import TasksView from '../../../common/components/tasks';

const Tasks = ({ tasks, Task }) => <TasksView Task={Task} tasks={tasks} />;

export default Tasks;
