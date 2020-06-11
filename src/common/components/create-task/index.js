import React, { useState } from 'react';

import { generateID } from '../../utils';

const CreateTaskView = ({ onCreate }) => {
    const [name, setName] = useState('');

    const onClick = () => {
        onCreate(generateID(), name);
        setName('');
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <button onClick={onClick}>Create task</button>
        </div>
    );
};

export default CreateTask;
