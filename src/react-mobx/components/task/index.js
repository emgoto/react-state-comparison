import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../state/store';
import TaskView from '../../../common/components/task';

const Task = observer(({ id, name, checked }) => {
    const {
        tasksStore: { updateTaskName, updateTaskChecked, deleteTask }
    } = useContext(StoreContext);

    const onSetName = (id, name) => updateTaskName(id, name);
    const onSetChecked = (id, checked) => updateTaskChecked(id, checked);
    const onDeleteTask = (id) => deleteTask(id);

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
});

export default Task;
