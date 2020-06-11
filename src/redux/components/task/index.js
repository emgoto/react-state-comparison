import React from 'react';
import { useDispatch } from 'react-redux';
import TaskView from '../../../common/components/task';

const Task = ({ id, name, checked }) => {
    const dispatch = useDispatch();

    const onSetName = (id, name) =>
        dispatch({ type: 'UPDATE_TASK_NAME', payload: { id, name } });
    const onSetChecked = (id, checked) =>
        dispatch({ type: 'UPDATE_TASK_CHECKED', payload: { id, checked } });
    const onDeleteTask = (id) =>
        dispatch({ type: 'DELETE_TASK', payload: { id } });

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
