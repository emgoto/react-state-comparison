import React from 'react';
import { useDispatch } from 'react-redux';
import TaskView from '../../../common/components/task';
import {
    updateTaskName,
    updateTaskChecked,
    deleteTask
} from '../../state/reducers/tasks';

const Task = ({ id, name, checked }) => {
    const dispatch = useDispatch();

    const onSetName = (id, name) => dispatch(updateTaskName({ id, name }));
    const onSetChecked = (id, checked) =>
        dispatch(updateTaskChecked({ id, checked }));
    const onDeleteTask = (id) => dispatch(deleteTask({ id }));

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
