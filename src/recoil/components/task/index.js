import React from 'react';
import { useRecoilState } from 'recoil';
import tasksState from '../../state/tasks';
import TaskView from '../../../common/components/task';

const Task = ({ id, name, checked }) => {
    const [tasks, setTasks] = useRecoilState(tasksState);
    const onSetName = (id, name) => {
        setTasks({ ...tasks, [id]: { ...tasks[id], name } });
    };
    const onSetChecked = (id, checked) => {
        setTasks({ ...tasks, [id]: { ...tasks[id], checked } });
    };
    const onDeleteTask = (id) => {
        const newTasks = { ...tasks };
        delete newTasks[id];
        setTasks(newTasks);
    };

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
