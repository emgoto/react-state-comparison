import React from 'react';
import { useDispatch } from 'react-redux';
import TaskView from '../../../common/components/task';

const Task = ({ id, name, checked }) => {
    const dispatch = useDispatch();

    const onSetName = (id, name) =>
        dispatch({ type: 'updateTaskname', payload: { id, name } });
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
