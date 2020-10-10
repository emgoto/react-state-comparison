import React from 'react';
import TaskView from '../../../common/components/task';
import { useStoreActions } from 'easy-peasy';

const Task = ({ id, name, checked }) => {
    const { updateTaskName, updateTaskChecked, deleteTask } = useStoreActions(
        (actions) => actions
    );

    const onSetName = (id, name) => updateTaskName({ id, name });
    const onSetChecked = (id, checked) => updateTaskChecked({ id, checked });
    const onDeleteTask = (id) => deleteTask({ id });

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
