/* eslint-disable no-restricted-globals */
import React, { useContext } from 'react';

import { TasksContext } from '../../../state';

const Task = ({ id, name, checked }) => {
    const { dispatch } = useContext(TasksContext);

    const onSetName = (id, name) =>
        dispatch({ type: 'updateTaskName', payload: { id, name } });
    const onSetChecked = (id, checked) =>
        dispatch({ type: 'updateTaskChecked', payload: { id, checked } });
    const onDeleteTask = (id) =>
        dispatch({ type: 'deleteTask', payload: { id } });

    return (
        <div>
            <input
                type="checkbox"
                defaultChecked={checked}
                onChange={() => onSetChecked(id, event.target.checked)}
            />
            <input
                type="text"
                value={name}
                onChange={() => onSetName(id, event.target.value)}
            />
            <button onClick={() => onDeleteTask(id)}>Delete</button>
        </div>
    );
};

export default Task;
