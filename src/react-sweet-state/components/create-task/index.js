import React from 'react';
import CreateTaskView from '../../../common/components/create-task';
import { useTaskActions } from '../../state/store';

const CreateTask = () => {
    const [, { createTask }] = useTaskActions();

    const onCreate = (id, name) => createTask(id, name);

    return <CreateTaskView onCreate={onCreate} />;
};

export default CreateTask;
