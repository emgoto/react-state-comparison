import React, { useContext } from 'react';
import TaskView from '../../../common/components/task';
import { TasksContext } from '../../state/store';

const Task = ({ id, name, checked }) => {
    const { dispatch } = useContext(TasksContext);

    const onSetName = (id, name) =>
        dispatch({ type: 'updateTaskName', payload: { id, name } });
    const onSetChecked = (id, checked) =>
        dispatch({ type: 'updateTaskChecked', payload: { id, checked } });
    const onDeleteTask = (id) =>
        dispatch({ type: 'deleteTask', payload: { id } });

    return (
        <TaskView
            id={id}
            name={name}
            checked={checked}
            onSetName={onSetName}
            onSetChecked={onSetChecked}
            onDeleteTask={onDeleteTask}
        />
    );
};

export default Task;
