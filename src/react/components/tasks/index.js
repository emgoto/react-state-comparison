import React, { useContext } from 'react';

import { TasksContext } from '../../state';

import Task from './task';

const Tasks = () => {
    const { tasks } = useContext(TasksContext);

    return (
        <div className="tasks">
            <p>
                Welcome to the vanilla React example! Note as the creation
                endpoint is hardcoded, it will only work once.
            </p>
            {Object.values(tasks).map((task) => (
                <Task key={task.id} {...task} />
            ))}
        </div>
    );
};

export default Tasks;
