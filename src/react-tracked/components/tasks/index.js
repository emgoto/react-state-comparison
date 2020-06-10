import React from 'react';

import { useTrackedState } from '../../state';

import Task from './task';

const Tasks = () => {
    const tasks = useTrackedState();

    return (
        <div className="tasks">
            <p>
                Welcome to the react-tracked example! Note as the creation
                endpoint is hardcoded, it will only work once.
            </p>
            {Object.values(tasks).map((task) => (
                <Task key={task.id} {...task} />
            ))}
        </div>
    );
};

export default Tasks;
