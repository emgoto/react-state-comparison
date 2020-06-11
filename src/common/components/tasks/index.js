import React from 'react';

const TasksView = ({ Task, tasks }) => (
    <div className="tasks">
        {Object.values(tasks).map((task) => (
            <Task key={task.id} {...task} />
        ))}
    </div>
);

export default TasksView;
