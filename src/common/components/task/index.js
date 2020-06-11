import React from 'react';

const TaskView = ({
    id,
    name,
    checked,
    onSetName,
    onSetChecked,
    onDeleteTask
}) => (
    <div>
        <input
            type="checkbox"
            defaultChecked={checked}
            onChange={(event) => onSetChecked(id, event.target.checked)}
        />
        <input
            type="text"
            value={name}
            onChange={(event) => onSetName(id, event.target.value)}
        />
        <button onClick={() => onDeleteTask(id)}>Delete</button>
    </div>
);

export default TaskView;
