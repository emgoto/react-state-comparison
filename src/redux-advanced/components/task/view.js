import React from 'react';
import TaskView from '../../../common/components/task';

const Task = ({
    id,
    name,
    checked,
    updateTaskName,
    updateTaskChecked,
    deleteTask
}) => (
    <TaskView
        id={id}
        name={name}
        checked={checked}
        onSetName={updateTaskName}
        onSetChecked={updateTaskChecked}
        onDeleteTask={deleteTask}
    />
);

export default Task;
