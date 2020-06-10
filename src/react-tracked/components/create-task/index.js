/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

import { useUpdate } from '../../state';

const CreateTask = () => {
    const dispatch = useUpdate();
    const [name, setName] = useState('');

    const onClick = () => {
        // In a real-life app, we would call an endpoint to create a task,
        // and use the ID value returned to us in the response to save it in state.
        // Here we will be hardcoding it.
        dispatch({ type: 'createTask', payload: { id: 4, name } });
        setName('');
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={() => setName(event.target.value)}
            />
            <button onClick={onClick}>Create task</button>
        </div>
    );
};

export default CreateTask;
